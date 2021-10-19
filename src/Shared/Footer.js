import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';

const Footer = () => {
    return (
        <footer className="text-gray-600 body-font footer">
  <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
      <Link to="" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={logo} alt="" />
      </Link>
      <p className="mt-2 text-sm text-white">Together, we can make a difference for Olathe Health</p>
    </div>
    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h3 className="font-medium mb-3 text-2xl text-primary text-sm title-font">Get In Touch</h3>
        <nav className="list-none mb-10">
          <li>
            <p className="text-white">Street 238,52 tempor Donec ultricies mattis nulla, suscipit risus tristique ut.</p>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h3 className="font-medium mb-3 text-2xl text-primary text-sm title-font">Contact Info</h3>
        <nav className="list-none mb-10">
          <li>
            <p className="hover:text-primary text-white"><span className="font-semibold">Phone:</span> 1.800.555.6789</p>
          </li>
          <li>
            <p className="hover:text-primary text-white"><span className="font-semibold">E-mail:</span> healthzia@.com</p>
          </li>
          <li>
            <p className="hover:text-primary text-white"><span className="font-semibold">Website:</span> https://sktthemes.org</p>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h3 className="font-medium mb-3 text-2xl text-primary text-sm title-font">Quick Links</h3>
        <nav className="list-none mb-10">
          <li>
            <Link to="/home" className="hover:text-primary text-white"><i className="fas fa-chevron-right"></i>  Home</Link>
          </li>
          <li>
            <Link to="/aboutUs" className="hover:text-primary text-white"><i className="fas fa-chevron-right"></i>  About Us</Link>
          </li>
          <li>
            <Link to="/doctors" className="hover:text-primary text-white"><i className="fas fa-chevron-right"></i>  Doctors</Link>
          </li>
          <li>
            <Link to="/conactUs" className="hover:text-primary text-white"><i className="fas fa-chevron-right"></i>  Contact Us</Link>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div className="bg-primary">
    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p className=" text-white text-sm text-center sm:text-left">© 2021 HEALTHZIA —
        <Link to="/home" href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="ml-1 hover:text-gray" target="_blank">@healthzia</Link>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <Link to="/conactUs" className="hover:text-gray text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </Link>
        <Link to="/conactUs" className="ml-3 hover:text-gray text-white">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </Link>
        <Link to="/conactUs" className="ml-3 hover:text-gray text-white">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </Link>
        <Link to="/conactUs" className="ml-3 hover:text-gray text-white">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </Link>
      </span>
    </div>
  </div>
</footer>
    );
};

export default Footer;