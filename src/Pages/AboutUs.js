import React from 'react';
import photo from '../images/poster.jpg'

const AboutUs = () => {
    return (
        <div>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <img src={photo} className="w-full" alt="" />
      <p className="leading-relaxed text-lg text-secondary">Multi-specialty Medical Centre with Experienced Staff. Make an Appointment! Highest Quality Of Medical Service. In Thailand. Plan Treatment Today. Advanced Tecnologies. Hospitals matter to people and often mark central points in their lives. They also matter to health systems by being instrumental for care coordination. Hospitals matter to people and often mark central points in their lives. They also matter to health systems by being instrumental for care coordination. Hospitals matter to people and often mark central points in their lives. They also matter to health systems by being instrumental for care coordination and</p>
      <span className="inline-block h-1 w-10 rounded bg-secondary mt-8 mb-6"></span>
      <h2 className="text-primary font-medium title-font tracking-wider text-sm text-2xl">HEALTHZIA</h2>
      <p className="text-gray">Senior Sergent Specealist</p>
    </div>
  </div>
</section>
        </div>
    );
};

export default AboutUs;