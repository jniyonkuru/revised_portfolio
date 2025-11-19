import React,{createContext,useState} from 'react'

 export enum Role{
    admin="admin"
  }
  export interface User{
    name:string,
    email:string,
    id:string,
    role:Role
       
  }
  
 export  const UserContext=createContext<User|null>(null)

function UserProvider({children}:{children:React.ReactNode}) {

    const [user]=useState<User|null>(null)
  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider