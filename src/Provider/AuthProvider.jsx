import { createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebaseAuth";
import { useState } from "react";
export const AuthContex=createContext()
const auth=getAuth(app);
const provider =new GoogleAuthProvider();
const AuthProvider=({children})=>{
    const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser=(mail, password)=>{
    return createUserWithEmailAndPassword(auth,mail, password)
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const goggle = () =>{
    return signInWithPopup(auth,provider)
  };
 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);
  const authData ={
createUser,
signIn,
goggle,
loading,
    setLoading,
    setUser,
    user,
  };
  return <AuthContex value={authData}>{children}</AuthContex>
};
export default AuthProvider;