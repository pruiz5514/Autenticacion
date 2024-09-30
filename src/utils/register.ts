"use server"
import db from "../../db";
import bcrypt from "bcryptjs"

const registerUser = async (newUser: any) => {
    const user = await db.user.findUnique({
        where: {
            email: newUser.email as string
        }
    })

    if (user) {
        console.log("Usario ya existe");
    } else {
        const password = await bcrypt.hash(newUser.password as string, 10);

        await db.user.create({
            data: {
                email: newUser.email as string,
                name: newUser.name as string,
                password
            }
        })

        console.log("melo")
    }
}

export default registerUser;