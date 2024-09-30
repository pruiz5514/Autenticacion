import { auth } from "../../../../auth"

const Admin = async() => {
  const session = await auth()
 
  if (session?.user?.role !== "admin") {
    return <div>You are not an admin</div>
  }
  return (
      <div>page</div>
  )
}
  
  export default Admin