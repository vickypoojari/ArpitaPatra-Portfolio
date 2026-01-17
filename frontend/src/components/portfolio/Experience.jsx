import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Experience = ({ experience }) => {
  return (
    <section className="container mx-auto px-6 py-20 bg-[#0f0f10]">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-12">{experience.headline}</h2>
        
        <ul className="space-y-4" role="list">
          {experience.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-4" role="listitem">
              <CheckCircle2 
                className="h-5 w-5 text-[#2d5016] flex-shrink-0 mt-1" 
                aria-hidden="true"
              />
              <span className="text-lg text-gray-300 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
