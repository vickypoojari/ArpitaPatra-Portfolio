import React from 'react';

const Skills = ({ skills }) => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="max-w-4xl">
        <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-[#2d5016] mb-4 uppercase tracking-wide">
              Product Areas
            </h3>
            <ul className="space-y-3" role="list">
              {skills.productAreas.map((area) => (
                <li key={area} className="text-gray-300" role="listitem">{area}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#2d5016] mb-4 uppercase tracking-wide">
              Methodologies
            </h3>
            <ul className="space-y-3" role="list">
              {skills.methodologies.map((method) => (
                <li key={method} className="text-gray-300" role="listitem">{method}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#2d5016] mb-4 uppercase tracking-wide">
              Tools
            </h3>
            <ul className="space-y-3" role="list">
              {skills.tools.map((tool) => (
                <li key={tool} className="text-gray-300 text-sm" role="listitem">{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;