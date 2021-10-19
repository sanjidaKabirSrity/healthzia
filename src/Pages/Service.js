import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../Hooks/useData';

const Service = ({service}) => {
    const {id , img , title, subTitle } = service;
    const data = useData()
    console.log(data);
    return (
        <div className="p-4 lg:w-1/2 md:w-full">
            <div className="border-2 border-opacity-50 border-primary flex flex-col p-8 rounded-lg shadow-lg sm:flex-row service-card">
                <div className="bg-white flex-shrink-0 h-36 inline-flex items-center justify-center mb-4 rounded-full sm:mb-0 sm:mr-8 w-36">
                    <img src={img} className="w-3/4" alt="" />
                </div>
                <div className="flex-grow">
                    <h2 className="font-medium mb-3 text-2xl text-lg text-primaryHov title-font">{title}</h2>
                    <p className="mb-3 leading-relaxed text-base text-secondaryHov">{subTitle}</p>
                    <Link to={`/services/${id}`} className="bg-primary border-0 hover:bg-secondary inline-flex items-center md:mt-0 px-3 py-1 rounded text-white">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Service;