import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebage.config';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";




export const AuthContext=createContext(null)
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

const AuthProviders = ( {children} ) => {
    const [user,setUser]=useState('')
     const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

const signInGoogle=()=>{
    setLoading(true)
   return signInWithPopup(auth, provider);

}
  const logIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
  const logOut =()=>{
        return signOut(auth)
    }

  useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            console.log('auth state change',currentUser);
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])





const authInfo={
    user,
    loading,
    logIn,
    createUser,
    signInGoogle,
    logOut
}






    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProviders;