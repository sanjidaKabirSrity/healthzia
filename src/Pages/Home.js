import React from 'react';
import { Link } from 'react-router-dom';
import video from '../images/hero-video.mp4';
import posterImg from '../images/poster.jpg'

const Home = () => {
    return (
        <div>
            {/* Hero Section Start  */}
            <div className="flex items-center justify-center overflow-hidden relative w-full">
                <div className="py-16 text-center z-10">
                    <h1 className="font-medium md:my-5 md:py-5 md:text-6xl mx-auto sm-py-0 sm:my-0 sm:text-2xl text-center text-white hero-text">Welcome To <span className="border-b-4 font-bold hover:text-secondary italic text-primary">HEALTHZIA</span></h1>
                    <h1 className="font-medium md:my-5 md:py-5 md:text-6xl mx-auto sm-py-0 sm:my-0 sm:text-2xl text-center text-white hero-text">How Can Help You?</h1>
                    {/* <h1 className="font-medium m-5 mx-auto p-5 text-6xl text-center text-white w-4/6">Welcome To <span className="border-b-4 font-bold hover:text-secondary italic text-primary">HEALTHZIA</span>. How Can Help You?</h1> */}
                    <div className="flex justify-center hero-serv">
                        <Link to="/conactUs" className="px-8 py-5 text-white bg-third hover:bg-thirdHov">
                            <div className="mb-3 text-5xl">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <p className="text-2xl">Find a Location <span><i className="fas fa-chevron-right"></i></span></p>
                        </Link>
                        <Link to="/doctors" className="px-8 py-5 text-white bg-primary hover:bg-primaryHov">
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
            <div>
                <h1>fnoenlerelkrefefmdfk</h1>
                <h1>fnoenlerelkrefefmdfk</h1>
                <h1>fnoenlerelkrefefmdfk</h1>
                <h1>fnoenlerelkrefefmdfk</h1>
            </div>
        </div>
    );
};

export default Home;