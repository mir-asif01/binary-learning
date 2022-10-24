import React, { createContext } from 'react';

export const AuthContext = createContext()
const UserContext = ({children}) => {

    const user = {name : 'asif'}

    const contextInfo = {user}
    return (
        <AuthContext.Provider value={contextInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;