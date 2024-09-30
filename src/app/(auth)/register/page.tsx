"use client"
import Form from "@/components/Form/Form"
import Button from "@/components/UI/Button/Button"
import Input from "@/components/UI/Input/Input"
import db from "../../../../db"
import registerUser from "@/utils/register"


const Register = () => {
  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");

    const newUser = {
      name: name,
      email: email,
      password: password
    }

    await registerUser(newUser);
    
  }
  return (
    <>
      <main className="flex flex-col items-center py-10">
        <h1 className="text-4xl mb-6">Crear cuenta</h1>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Name" type="text" name="name"/>
          <Input placeholder="Email" type="email" name="email"/>
          <Input placeholder="Password" type="password" name="password"/>
          <Button>Crear cuenta</Button>
        </Form>
      </main>
    </>
  )
  }
  
  export default Register