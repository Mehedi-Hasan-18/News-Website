import React, { Children, createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState({
        Name:"Mehedi",
    });


    const authInfo = {
        user,
        setUser
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;