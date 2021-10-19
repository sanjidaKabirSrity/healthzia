import React from 'react';
import photo from '../images/poster.jpg'

const AboutUs = () => {
    return (
        <div>
            <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <img src={photo} className="w-full" alt="" />
      <p class="leading-relaxed text-lg text-secondary">Multi-specialty Medical Centre with Experienced Staff. Make an Appointment! Highest Quality Of Medical Service. In Thailand. Plan Treatment Today. Advanced Tecnologies. Hospitals matter to people and often mark central points in their lives. They also matter to health systems by being instrumental for care coordination. Hospitals matter to people and often mark central points in their lives. They also matter to health systems by being instrumental for care coordination. Hospitals matter to people and often mark central points in their lives. They also matter to health systems by being instrumental for care coordination and</p>
      <span class="inline-block h-1 w-10 rounded bg-secondary mt-8 mb-6"></span>
      <h2 class="text-primary font-medium title-font tracking-wider text-sm text-2xl">HEALTHZIA</h2>
      <p class="text-gray">Senior Sergent Specealist</p>
    </div>
  </div>
</section>
        </div>
    );
};

export default AboutUs;