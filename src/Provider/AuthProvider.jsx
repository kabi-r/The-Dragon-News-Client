import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/Firebas.init';

export const AuthContext = createContext(null)
const auth = getAuth(app)
const user = {disply:'am'}

const AuthProvider = ({children}) => {
    const authInfo ={user}
    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;