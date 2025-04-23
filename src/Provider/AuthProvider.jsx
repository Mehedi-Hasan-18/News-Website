import React, { Children, createContext, useEffect, useState } from 'react';
import auth from '../Components/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);

    const createNewUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut = ()=>{
        
        return signOut(auth);
    }

    const UpdateUserData = (updateData)=>{
        return updateProfile(auth.currentUser,updateData);
    }

    const authInfo = {
        user,
        setUser,
        createNewUser,
        signIn,
        logOut,
        loading,
        UpdateUserData
    }
    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false) 
        })
        return()=> unSubcribe();
    },[])


    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;