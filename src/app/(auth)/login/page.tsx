"use client";

import Form from "@/components/Form/Form"
import Button from "@/components/UI/Button/Button"
import Input from "@/components/UI/Input/Input"
import { get } from "http"
import { AuthError } from "next-auth";
import { signIn } from "next-auth/react"
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";


const Login = () => {
  const router = useRouter();

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) =>{
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const user = {
      email: email,
      password: password,
      redirect: false
    };

    console.log(user);
    
    try{
      const response = await signIn("credentials", user);
      console.log(response);
      
      if(!response?.error){
        router.push("/dashboard")
      };

      event.currentTarget.reset()
      
    }catch (error){
      if(error instanceof AuthError){
        return{error: error.cause?.err?.message}
      }
    }
    
  }
  return (
    <>
      <main className="flex flex-col items-center py-10">
        <h1 className="text-4xl mb-6">Iniciar sesión</h1>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Email" type="email" name="email"/>
          <Input placeholder="Password" type="password" name="password"/>
          <Button>Iniciar sesión</Button>
        </Form>
      </main>
    </>
  )
  }
  
  export default Login