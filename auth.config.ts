import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import email from "next-auth/providers/email"
import db from "./db"
import bcrypt from "bcryptjs"
import { redirect } from "next/dist/server/api-utils"


// Notice this is only an object, not a full Auth.js instance
export default {
    providers: [
        Credentials({
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                console.log(credentials);
                const user = await db.user.findUnique({
                    where: {
                        email: credentials.email as string
                    }
                })

                console.log(user);

                if (!user || !user.password) {
                    throw new Error("No user found")
                }

                const isValid = await bcrypt.compare(credentials.password as string, user.password as string)

                if (!isValid) {
                    throw new Error("Incorrect password")
                }
                return user
            },
        }),
    ],
} satisfies NextAuthConfig