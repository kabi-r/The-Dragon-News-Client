import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import app from '../Firebase/Firebas.init';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const user = {disply:'am'}

const AuthProvider = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const userLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log('loggeduser ', loggedUser);
            setUser(loggedUser)
            setLoading(false)
        }) 
    })
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }
    const authInfo ={
        user,
        loading,
        createUser,
        userLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;