import React from 'react';

const About = ({ about }) => {
  return (
    <section id="about" className="container mx-auto px-6 py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-6">{about.headline}</h2>
        <p className="text-xl text-gray-400 leading-relaxed">
          {about.description}
        </p>
      </div>
    </section>
  );
};

export default About;