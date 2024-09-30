import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./auth.config"
import { PrismaClient } from "@prisma/client"
import db from "./db"


export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,

    callbacks: {
        // jwt() se ejecuta cada vez que se crea o actualiza un token JWT
        // Aca se puede agregar informacion adicional al token
        jwt({ token, user }) {
            if (user) { // User is available during sign-in
                token.role = user.role
            }
            return token
        },
        session({ session, token }) {
            if (session.user) {
                session.user.role = token.role
            }
            return session
        },
    },
})