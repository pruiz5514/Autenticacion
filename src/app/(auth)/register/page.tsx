import Form from "@/components/Form/Form"
import Button from "@/components/UI/Button/Button"
import Input from "@/components/UI/Input/Input"

const Register = () => {
    return (
      <>
        <main className="flex flex-col items-center py-10">
          <h1 className="text-4xl mb-6">Crear cuenta</h1>
          <Form>
            <Input placeholder="Email" type="email" name="email"/>
            <Input placeholder="Password" type="password" name="password"/>
            <Button>Crear cuenta</Button>
          </Form>
        </main>
      </>
    )
  }
  
  export default Register