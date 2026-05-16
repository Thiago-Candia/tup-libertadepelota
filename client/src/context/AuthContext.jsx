
import React, { createContext, useState, useContext, useEffect } from "react";
import { onAuthStateChanged, signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "../firebase_config.js";



const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem("session") === "true";
  })

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          name: firebaseUser.displayName || firebaseUser.email,
          picture: firebaseUser.photoURL || '',
        });
        sessionStorage.setItem("session", "true");
        setIsAuthenticated(true);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);


  const login = () => {
    sessionStorage.setItem("session", "true");
    setIsAuthenticated(true);
  }

  const logout = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      console.log(error);
    }
    sessionStorage.removeItem("session");
    setUser(null);
    setIsAuthenticated(false);
  }


  return (
    <AuthContext.Provider value={{isAuthenticated, user, loading, login, logout}}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
