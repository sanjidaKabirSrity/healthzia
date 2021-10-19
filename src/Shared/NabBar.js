import React from 'react';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import { Transition } from "@headlessui/react";
import logo from '../images/logo.png';

const NabBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    // Navtab active style
    const activeNavTab ={
        fontWeight: "700",
        color: "#008d7f",
        borderBottom:"2px solid #008d7f"
      }
      const combineContext = useAuth();
      const { firebaseContext } = combineContext;
      const {user , signOutForm} = firebaseContext;
    console.log(user);
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container flex flex-wrap items-center justify-around md:flex-row mx-auto">

                    <NavLink to="/home" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={logo} className="w-48" alt="HealthZia" />
                    </NavLink>
                    <nav className="hidden md:block md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <NavLink to="/home" className="hover:text-secondary font-medium hover:border-secondary border-b-2 border-white hover:border-b-2 mx-4 px-3 py-1 text-primary" activeStyle={activeNavTab}>Home</NavLink>
                    <NavLink to="/aboutUs" className="hover:text-secondary font-medium hover:border-secondary border-b-2 border-white hover:border-b-2 mx-4 px-3 py-1 text-primary" activeStyle={activeNavTab}>About Us</NavLink>
                    {/* <NavLink to="/doctors" className="hover:text-secondary font-medium hover:border-secondary border-b-2 border-white hover:border-b-2 mx-4 px-3 py-1 text-primary" activeStyle={activeNavTab}>Doctors</NavLink> */}
                    <NavLink to="/conactUs" className="hover:text-secondary font-medium hover:border-secondary border-b-2 border-white hover:border-b-2 mx-4 px-3 py-1 text-primary" activeStyle={activeNavTab}>Contact Us</NavLink>
                    </nav>
                    <span className="hidden md:block">
                        {user?.photoURL ? (
                        <img className="h-14 rounded-full w-14 mx-4" src={user.photoURL} alt="" />
                        ) : (
                        <small>{user?.displayName}</small>
                        )}
                    </span>
                    <NavLink to="/signin" className="hidden md:block">
                    {
                    user?.email ?
                     (
                        <button onClick={signOutForm} className="bg-primary border-0 focus:outline-none hover:bg-secondary inline-flex items-center md:mt-0 mt-4 px-3 py-1 rounded text-white">Sign Out</button>
                     )
                     :
                     (
                        <button className="bg-primary border-0 focus:outline-none hover:bg-secondary inline-flex items-center md:mt-0 mt-4 px-3 py-1 rounded text-white">Sign in</button>
                     )
                    }
                    </NavLink>


                    {/* toggoler bar  */}
                    <div className="-mr-2 flex md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        type="button"
                        className="bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white inline-flex items-center justify-center p-2 rounded-md text-white"
                        aria-controls="mobile-menu"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                        <svg
                        className="block h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                        </svg>
                    ) : (
                        <svg
                        className="hidden h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                        </svg>
                    )}
                    </button>
                    </div>

                </div>

                {/* mobile menu  */}
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                {(ref) => (
                <div className="md:hidden" id="mobile-menu">
                        <div className="pb-3 pt-2 px-2 sm:px-3 space-y-1 text-center">
                            <NavLink to="/home"
                            className="block font-medium hover:text-secondary px-3 py-2 rounded-md text-base text-primary"
                            >
                            home
                            </NavLink>

                            <NavLink to="/aboutUs"
                            className="block font-medium hover:text-secondary px-3 py-2 rounded-md text-base text-primary"
                            >
                            About Us
                            </NavLink>

                            {/* <NavLink to="/doctors" className="block font-medium hover:text-secondary px-3 py-2 rounded-md text-base text-primary" >
                            Doctors
                            </NavLink> */}

                            <NavLink to="/conactUs"
                            className="block font-medium hover:text-secondary px-3 py-2 rounded-md text-base text-primary"
                            >
                            Contact Us
                            </NavLink>
                            <NavLink to="/signin" className="block">
                            {
                            user?.email ?
                            (
                                <button onClick={signOutForm} className="bg-primary border-0 focus:outline-none hover:bg-secondary inline-flex items-center justify-center my-4 py-1 rounded text-white w-full">Sign Out</button>
                            )
                            :
                            (
                                <button className="bg-primary border-0 focus:outline-none hover:bg-secondary inline-flex items-center justify-center my-4 py-1 rounded text-white w-full">Sign in</button>
                            )
                            }
                            </NavLink>
                        </div>
                    </div>
                    )}
                    </Transition>
            </header>
        </div>
    );
};

export default NabBar;