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
import {useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initailize";

initializeAuthentication();

const useFirebase = () => {
  const [user , setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  // Firebase Auth
  const auth = getAuth();

  //   google sign in
  const signInUsingGoogle = () => {
    const providerGoogle = new GoogleAuthProvider();
    return signInWithPopup(auth, providerGoogle)
   
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
      .finally(() => setIsLoading(false));
  };

  //   observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser();
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, [auth]);
  return {
      signInUsingGoogle,
      handleSignUpWithEmail,
      handleSignInWithEmail,
      user,
      signOutForm,
      setIsLoading,
      isLoading
  }
}

export default useFirebase;