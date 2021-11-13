import { useEffect, useState } from "react";
import initializeFirebase from "../pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword,  signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, signOut } from "firebase/auth";

// initialize Firebase app
initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('')

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name,  history) =>{
      setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser)
            // save user to the database
            saveUser(email, name);    
         // send name to firebase after creation

         updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
        }).catch((error) => {
        });
            history.replace('/');
          })
          .catch((error) => {
            setAuthError (error.message);
          })
          .finally(() => setIsLoading(false));

    }

    const loginUser = (email, password, location, history) =>{
      setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const destination = location?.state?.from || '/';
    history.replace(destination);  
    setAuthError('');
  })
  .catch((error) => {
    setAuthError (error.message);
  })
  .finally(() => setIsLoading(false));
    }

    const signInWithGoogle = (location, history) =>{
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setAuthError('');
      }).catch((error) => {
        setAuthError (error.message);
      }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() =>{
       const unsubscribe =  onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    },[])

    const logOut = () =>{
      setIsLoading(true);
        signOut(auth).then(() => {
          // Sign- out Succesfully 
          }).catch((error) => {
            // An error happened
          })
          .finally(() => setIsLoading(false));     
    }

    const saveUser = (email, displayName) =>{
        const user = {email, displayName};
        fetch('http://localhost:5000/users', {
          method:'POST',
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logOut,
    }
}

export default useFirebase;