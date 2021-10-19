import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile
} from "firebase/auth";
import { useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initailize";

initializeAuthentication();

const useFirebase = () => {
  const [user , setUser] = useState({});
  const [isLoging, setIsLoging] = useState(true);

  // Firebase Auth
  const auth = getAuth();

  //   google sign in
  const signInUsingGoogle = () => {
    const providerGoogle = new GoogleAuthProvider();
    signInWithPopup(auth, providerGoogle)
    .then((result) => {
        const user = result.user;
        console.log(user);
    }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
    });
  }

  //  sign up with email and password
  const handleSignUpWithEmail = (name, email, password) => {
      console.log(name, email, password);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const users = userCredential.user;
            setUser(users);
            updateProfile(auth.currentUser, {
                displayName:name 
              }).then(() => {});
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
  }

  //  sign in with email and password
  const handleSignInWithEmail = (email , password) => {
      console.log(email,password);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const users = userCredential.user;
            setUser(users);
            console.log(users);
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
  }

  //  Sign out
  const signOutForm = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .finally(() => setIsLoging(false));
  };

  return {
      signInUsingGoogle,
      handleSignUpWithEmail,
      handleSignInWithEmail,
      user,
      signOutForm,
      setIsLoging,
      isLoging
  }
}

export default useFirebase;