import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, User } from "firebase/auth";
import { Outlet } from "react-router-dom";
import { fireauth } from "../libs/firebase";
import React from "react";

type authContext = {
    user: User | null;
    GooglePopup: () => void;
}

const authContext = React.createContext<authContext>(null as any);

export default function AuthContext() {

    const [user, setUser] = React.useState<User | null>(null);
    const [pending, setPending] = React.useState(true);

    React.useEffect(() => {
        const unsub = onAuthStateChanged(fireauth, user => {
            setPending(false);
            setUser(user);
        })
        return () => unsub();
    }, [])

    async function GooglePopup() {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(fireauth, provider);
    }

    if (pending) return <>
        <h1>loading...</h1>
    </>

    return <authContext.Provider value={{ user, GooglePopup }}>
        <Outlet />
    </authContext.Provider>
}

export function useAuthContext() {
    return React.useContext(authContext);
}