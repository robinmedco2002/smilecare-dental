import React from "react";

const ClinicIntro = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center gap-10">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Welcome to SmileCare Dental</h2>
          <p className="text-gray-700 mb-6">
            At SmileCare, we’re committed to providing top-quality dental care in a comfortable and friendly environment. From regular checkups to advanced procedures, our experienced team is here to keep your smile healthy and beautiful.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>State-of-the-art equipment</li>
            <li>Personalized care</li>
            <li>Highly experienced dentists</li>
            <li>Modern, clean, and comfortable clinic</li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          <img src="/images/clinic-intro.jpg" alt="Clinic Interior" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default ClinicIntro;
