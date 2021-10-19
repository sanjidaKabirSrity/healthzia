import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div className="contact-img hidden xl:block">
            </div>
            <div className="text-gray-600 body-font relative">
        <div className="container flex flex-wrap md:pt-16 mx-auto pb-16 px-5 sm:flex-nowrap sm:pt-0">
          <div className="bg-white flex flex-col lg:w-1/3 md:ml-auto md:mt-0 md:py-8 md:w-1/2 mt-8 mx-5 w-full">
              <div className="">
                <h2 className="font-semibold text-4xl text-primary hover:text-secondary">CONTACT US TO GET MORE INFO</h2>
              </div>
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-primary text-sm">Name</label>
                <input type="text" id="name" name="name" className="bg-white border border-primary duration-200 ease-in-out focus:border-primary focus:ring-2 focus:ring-indigo-200 leading-8 outline-none px-3 py-1 rounded text-base text-primary transition-colors w-full" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-primary text-sm">Email</label>
                <input type="email" id="email" name="email" className="bg-white border border-primary duration-200 ease-in-out focus:border-primary focus:ring-2 focus:ring-indigo-200 leading-8 outline-none px-3 py-1 rounded text-base text-primary transition-colors w-full" />
              </div>
              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-primary text-sm">Message</label>
                <textarea id="message" name="message" className="bg-white border border-primary duration-200 ease-in-out focus:border-primary focus:ring-2 focus:ring-indigo-200 leading-8 outline-none px-3 py-1 rounded text-base text-primary transition-colors w-full"></textarea>
              </div>
              <button className="bg-primary hover:bg-secondary my-5 py-3 rounded text-white">Submit</button>
            </div>
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703692693!2d90.27923991057244!3d23.780573258035957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1634222942082!5m2!1sen!2sbd" width="100%" height="100%" className="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no"></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                  <p className="mt-1">House #20 (3rd Floor) Road # 17, Nikanjia-2 Dhaka, Bangladesh</p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                  <a href="#" className="contact-email leading-relaxed">healthzia@gmail.com</a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    );
};

export default ContactUs;