
//third party packages
import React, { createContext, useEffect,useState} from "react";

//local packages
import { useMe } from "./ hooks/users";
import type { User } from "./types";

 export enum Role{
    admin="admin"
  }

export interface UserContextType {
  user: User | null;
  resetUser: () => void;
}
  
export const UserContext = createContext<UserContextType|null>(null)
 
 const initialUserState=null

function UserProvider({ children }: { children: React.ReactNode }) {
  const { data, isError, isLoading } = useMe();
  const [user, setUser ] = useState<User | null>(initialUserState);
  
  useEffect(() => {
    if (isError) {
      localStorage.removeItem("token");
    }
    if (!isLoading && data) { 
      setUser(data);
    }

  }, [data, isError, isLoading]);
  
  const resetUser = () => {
    setUser(null);
  }


  return (
    <UserContext.Provider value={{user, resetUser}
}>
        {children}
    </UserContext.Provider>
  )
}

export default UserProvider