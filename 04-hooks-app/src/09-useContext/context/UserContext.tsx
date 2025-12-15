import { createContext, useState, type PropsWithChildren } from "react"
import type { User } from "../data/user-mock.data";

/* inteface UserContextProps {
    children: React.ReactNode;
} */


type AuthStatus = 'cheking' | 'authenticated' | 'not-authenticated';

interface UserContextProps {
    //state
    authStatus: AuthStatus;
    user:  User | null;

    //Methods
    login: (userId: number) => boolean;
    logout: () => void;
}

export const UserContext = createContext({} as UserContextProps)



export const UserContextProvider= ({children}: PropsWithChildren) => {
  
    const [authStatus, setAuthStatus] = useState<AuthStatus>('cheking');
    const [user, setUser] = useState<User|null>(null);

    const handleLogin = (userId: number) => {
        console.log({userId})
        return true;
    }
    const handleLogut = () => {
        console.log('logout')
    }
  
  
    return <UserContext
  value={{
    authStatus: authStatus,
    user:user,
    login:handleLogin,
    logout: handleLogut,
  }}> {children} </UserContext>
}

