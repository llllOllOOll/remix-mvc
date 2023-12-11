import { json, type DataFunctionArgs, type MetaFunction } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { getUsers } from "~/db.server";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader(){
  console.log(await getUsers())
  return json(await getUsers()) 
}

export async function action({request}:DataFunctionArgs){
  const formData = await request.formData()
  const {username, email} =  Object.fromEntries(formData) 
  console.log(username, email)
  // await createUser({
  //   username:username as string,
  //   email:email as string})
  return null
}

export default function Index() {
  const users = useLoaderData<typeof loader>()
  return (
   <div>
     <Form method="post">
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email"/>
      <button>Save</button>
     </Form>
     <ul>
      {users.map((user)=><li key={user.id}>{user.name}</li>)}
     </ul>
   </div>
  );
}
