import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth/web-extension';


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})

    const createUser = (email, pass) =>{
        return createUserWithEmailAndPassword(auth, email, pass)

    }
    const login = (email, pass) =>{
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const provider = new GoogleAuthProvider()
    const googleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currUser=>{
            setUser(currUser)
        })
        return ()=>{
            unSubscribe()
        }
    },[])

    const authInfo = {user, loading, createUser, login, googleSignIn, logOut}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;