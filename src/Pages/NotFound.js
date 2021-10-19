import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="py-5 text-center">
                <h1 className="mb-4 text-9xl text-primary">404</h1>
                <h3 className="mb-4 text-4xl text-secondary">Oops! Page not found</h3>
                <p className="mb-4 text-gray">The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
                <Link to="/home">
                    <button className="bg-primary hover:bg-secondary my-16 px-10 py-3 rounded text-white">Go Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;