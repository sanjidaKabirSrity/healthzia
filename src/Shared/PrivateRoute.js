import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({children, ...rest}) => {
    const combineContext = useAuth();
    const { firebaseContext } = combineContext;
    const {user,isLoading} = firebaseContext;

    if (isLoading) {
        return (
        <div className="text-center py-4">
            <span>Loading...</span>
        </div>
        );
    }

    return (
        <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;