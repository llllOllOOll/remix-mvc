import { json } from "@remix-run/node"
import { getUsers } from "./users.server"
import { useLoaderData } from "@remix-run/react"

//Controller
export async function loader(){
  return json(await getUsers()) 
}

// Controller Persistence
export function action(){
  return null
}

//VIEW 
export default function Users() {
  const users = useLoaderData<typeof loader>()
  return (
    <>
      <h1 className="text-4xl text-center">Users</h1>
      <ul>
        {users.map((user)=><li key={user.id}>{user.username}</li>)}
      </ul>
    </>
  )
}
