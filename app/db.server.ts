export type User = {
    id?:string
    username:string
    email:string
}

const users : User[] = [
 {
    id:'1',
    username:'seven',
    email:'seven@mail.com'
 }
]

export async function createUser(user:User){
    const newUser : User = {
        id:crypto.randomUUID(),
        username:user.username,
        email:user.email
    } 
    
    users.push(newUser)
    return newUser
}


export const getUsers = async () =>{
    return users 
}
