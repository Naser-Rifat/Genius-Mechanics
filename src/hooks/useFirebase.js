import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

import initializeAuthentication from "../Firebase/firebase-init"

initializeAuthentication();
const useFirebase = () => {

    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleSignIn = () => {
        setIsLoading(true)

        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);


    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)

            }

            else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe;
    }, [])


    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false))
    }
    return {
        user,
        googleSignIn,
        logOut,
        setIsLoading,
        setUser,
        isLoading


    }



}

export default useFirebase;