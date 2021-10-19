import React from 'react';
import {useParams} from "react-router-dom";
import useData from '../../Hooks/useData';


const ServicesDetails = () => {
    const {serviceId} = useParams();
    const data = useData()
    
    const singleService = [];
    for (const service of data) {
        if (service.id === serviceId) {
            singleService.push(service)
        }
    }
    
    return (
        <div className="single-service">
            <div className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-col">
                <div className="lg:w-4/6 mx-auto rounded shadow-lg bg-white">
                <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="h-full mx-auto object-center object-cover" src={singleService[0]?.img} />
                </div>
                <div className="flex flex-col mt-10 p-5 sm:flex-row">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="h-28 inline-flex items-center justify-center rounded-full w-28">
                        <img src={singleService[0]?.doctorImg} className="h-full rounded-full w-full" alt=""  />
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-medium title-font mt-4 text-primary text-lg">{singleService[0]?.doctorName}</h2>
                        <div className="w-12 h-1 bg-primary rounded mt-2 mb-4"></div>
                        <p className="text-base text-gray">{singleService[0]?.doctorData}</p>
                    </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                    <p className="leading-relaxed text-secondaryHov text-lg mb-4">{singleService[0]?.description}</p>
                    {/* <a className="text-indigo-500 inline-flex items-center">Learn More
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a> */}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ServicesDetails;