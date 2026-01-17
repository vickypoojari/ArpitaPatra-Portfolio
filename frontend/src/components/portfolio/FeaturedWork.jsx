import React from 'react';
import CaseStudyCard from './CaseStudyCard';

const FeaturedWork = ({ caseStudies }) => {
  return (
    <section id="work" className="container mx-auto px-6 py-20">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-3">Featured Work</h2>
        <p className="text-gray-400">Case studies showcasing product strategy, execution, and impact</p>
      </div>

      <div className="space-y-12">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedWork;