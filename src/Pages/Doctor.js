import React from 'react';
import { Link } from 'react-router-dom';

const Doctor = ({service}) => {
    const {title, doctorImg , doctorName , doctorData} = service;

    return (
        <div className="p-4 md:w-1/3">
        <div className="border-2 border-gray border-opacity-50 h-full overflow-hidden rounded-lg">
          <img className="object-center object-cover w-full" src={doctorImg} alt="blog" />
          <div className="pt-6 px-6 pb-0">
            <div className="flex items-center mb-4">
                <h2 className="tracking-widest text-xs title-font font-medium text-secondary mb-1">{title} Speacialist</h2>
                <span className="text-secondary mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                    </svg>1.2K
                </span>
                <span className="text-secondary inline-flex items-center leading-none text-sm">
                    <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>6
                </span>
            </div>
            <h1 className="title-font text-center text-lg font-medium text-primary mb-3">{doctorName}</h1>
            <p className="text-center leading-relaxed mb-3 text-gray">{doctorData}</p>
            
          </div>
        </div>
      </div>
    );
};

export default Doctor;