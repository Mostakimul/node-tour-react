import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import initializeAuthentication from '../firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // Sign in with google
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // create account with email and password
  const createAccountWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in with email and password
  const loginWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
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
        if (user.email === 'admin@gmail.com') {
          setIsAdmin(true);
        }
        setUser(user);
      } else {
        setUser({});
        setIsAdmin(false);
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
      .finally(() => {
        setIsAdmin(false);
        setIsLoading(false);
      });
  };

  return {
    user,
    setUser,
    isLoading,
    setIsAdmin,
    isAdmin,
    setIsLoading,
    signInWithGoogle,
    logOut,
    createAccountWithEmail,
    updateName,
    loginWithEmailAndPassword,
  };
};

export default useFirebase;
