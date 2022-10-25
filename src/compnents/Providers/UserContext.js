import React, { createContext, useState } from 'react';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const UserContext = ({children}) => {
    const [user,setUser] = useState(null)

    const registerWithGoogle=()=>{
        return signInWithPopup(auth,provider);
    }


    const contextInfo = {registerWithGoogle,setUser,user}
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;