import Button from "@/components/UI/Button/Button"
import { auth } from "../../../../auth"
import LogoutButton from "../../../components/UI/LogoutButton/LogoutButton"


 
export default async function Dashboard() {
  const session = await auth()
 
  if (!session) {
    return <div>Not authenticated</div>
  }
 
  return (
    <div className="container">
      <pre>{JSON.stringify(session)}</pre>
      <LogoutButton/>
    </div>
  )
}