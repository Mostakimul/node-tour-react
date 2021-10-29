import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Sign in with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign in with email and password
  const createAccountWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update displayName
  const updateName = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        const newUser = { ...user, displayName: name };
        setUser(newUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // state handle observer
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsub; //eslint-disable-next-line
  }, []);

  // sign out method
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  return {
    user,
    setUser,
    isLoading,
    setIsLoading,
    signInWithGoogle,
    logOut,
    createAccountWithEmail,
    updateName,
  };
};

export default useFirebase;
