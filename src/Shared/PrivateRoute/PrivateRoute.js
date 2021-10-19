import React from 'react';
import { BrowserRouter , Switch , Route, Redirect } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth'


const PrivateRoute = ({children, ...rest}) => {
    const { user, isLoading } = useAuth();
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
                state: { from: location },
              }}
            ></Redirect>
          )
        }
      ></Route>
    );
};

export default PrivateRoute;