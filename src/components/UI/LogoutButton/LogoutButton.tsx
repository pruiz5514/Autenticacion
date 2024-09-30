"use client"
import { signOut } from "next-auth/react"
import Button from "../Button/Button";

const LogoutButton = () =>{
    const handleClick = async()=>{
        await signOut({
            callbackUrl: '/login'
        });
    }

    return (
        <Button onClick={handleClick}>Cerrar Sesión</Button>
    )
}

export default LogoutButton;