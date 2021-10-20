import React from 'react';
import useData from '../Hooks/useData';
import Doctor from './Doctor';

const Doctors = () => {
    // Service Data
    const services = useData();

    return (
        <div className="py-16">
            <div className="text-center mb-8">
                <h2 className="font-medium mb-4 md:text-4xl sm:text-3xl text-2xl text-primary title-font">Our Best Doctors</h2>
                <p className="leading-relaxed lg:w-3/4 mx-auto text-base text-gray xl:w-2/4">When you need answers, Best Doctors can help. Get an Expert Medical Opinion from one of our world-renowned specialists</p>
            </div>
            <div className="text-gray-600 body-font">
  <div className="container px-5 py-6 mx-auto">
    <div className="flex flex-wrap -m-4">
    {
        services.map(service => <Doctor key={service.id} service={service}></Doctor>)
    }
    </div>
  </div>
</div>
        </div>
    );
};

export default Doctors;