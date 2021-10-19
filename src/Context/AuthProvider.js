import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // Firebase
    const firebaseContext = useFirebase();

  const combineContext = { firebaseContext };

    return (
        <AuthContext.Provider value={combineContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;