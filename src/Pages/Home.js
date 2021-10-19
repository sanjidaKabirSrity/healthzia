import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../Hooks/useData';
import video from '../images/hero-video.mp4';
import posterImg from '../images/poster.jpg'
import Service from './Service';

const Home = () => {
    const services = useData();

    return (
        <div>
            {/* Hero Section Start  */}
            <div className="flex items-center justify-center overflow-hidden relative w-full">
                <div className="py-16 text-center z-10">
                    <h1 className="font-medium md:my-5 md:py-5 md:text-6xl mx-auto sm-py-0 sm:my-0 sm:text-2xl text-center text-white hero-text">Welcome To <span className="border-b-4 font-bold hover:text-secondary italic text-primary">HEALTHZIA</span></h1>
                    <h1 className="font-medium md:my-5 md:py-5 md:text-6xl mx-auto sm-py-0 sm:my-0 sm:text-2xl text-center text-white hero-text">How Can Help You?</h1>
                    <div className="flex justify-center hero-serv">
                        <Link to="/conactUs" className="px-8 py-5 text-white bg-third hover:bg-thirdHov">
                            <div className="mb-3 text-5xl">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <p className="text-2xl">Find a Location <span><i className="fas fa-chevron-right"></i></span></p>
                        </Link>
                        <Link to="" className="px-8 py-5 text-white bg-primary hover:bg-primaryHov">
                            <div className="mb-3 text-5xl">
                                <i className="fas fa-stethoscope"></i>
                            </div>
                            <p className="text-2xl">Find a Doctor <span><i className="fas fa-chevron-right"></i></span></p>
                        </Link>
                        <Link to="#" className="px-8 py-5 text-white bg-secondary hover:bg-secondaryHov">
                            <div className="mb-3 text-5xl">
                                <i className="far fa-user"></i>
                            </div>
                            <p className="text-2xl">Patient Portal <span><i className="fas fa-chevron-right"></i></span></p>
                        </Link>
                    </div>
                </div>
                <div className="absolute left-0 top-0 w-full">
                    <div className="absolute h-full left-0 top-0 w-full color-overlay"></div>
                    <video autoPlay loop muted poster={posterImg} className="w-full">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
            </div>
            {/* Hero Section End  */}

            {/* Service section start  */}
            <div className="py-16">
                <div className="text-center mb-8">
                    <h2 className="font-medium mb-4 md:text-4xl sm:text-3xl text-2xl text-primary title-font">Our Special Services</h2>
                    <p className="leading-relaxed lg:w-3/4 mx-auto text-base text-gray xl:w-2/4">Hospital either as in-patient or out-patient, our Special Services. Special Services assists patients</p>
                </div>
                <div className="text-gray-600 body-font">
                <div className="container p-5 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -m-4">
                    {
                        services.map(service => <Service key={service.id} service={service}></Service>)
                    }
                    </div>
                </div>
                </div>
            </div>
            {/* Service section end */}
        </div>
    );
};

export default Home;