import React from 'react';
import { ArrowRight, Briefcase, CheckCircle2, Users } from 'lucide-react';
import { Button } from '../ui/button';

const Hero = ({ hero, stats }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="container mx-auto px-6 pt-32 pb-20">
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 bg-[#1a1a1c] border border-[#2d5016] px-4 py-2 rounded-full mb-6">
          <div className="w-2 h-2 bg-[#2d5016] rounded-full animate-pulse" aria-hidden="true"></div>
          <span className="text-sm text-gray-400">Available for new opportunities</span>
        </div>
        
        <h1 className="text-6xl font-bold mb-6 leading-tight">
          {hero.name}
        </h1>
        
        <p className="text-2xl text-gray-400 mb-8 leading-relaxed">
          {hero.tagline}
        </p>
        
        <Button 
          onClick={() => scrollToSection('work')} 
          className="bg-[#2d5016] hover:bg-[#3d6821] text-white px-8 py-6 text-base rounded-md transition-all"
          aria-label="View case studies"
        >
          {hero.cta}
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl">
        <div className="bg-[#1a1a1c] border border-[#1f1f21] p-6 rounded-lg">
          <Briefcase className="h-8 w-8 text-[#2d5016] mb-3" aria-hidden="true" />
          <div className="text-3xl font-bold mb-1">{stats.yearsExperience}</div>
          <div className="text-sm text-gray-400">Years Experience</div>
        </div>
        
        <div className="bg-[#1a1a1c] border border-[#1f1f21] p-6 rounded-lg">
          <CheckCircle2 className="h-8 w-8 text-[#2d5016] mb-3" aria-hidden="true" />
          <div className="text-3xl font-bold mb-1">{stats.productsShipped}</div>
          <div className="text-sm text-gray-400">Products Shipped</div>
        </div>
        
        <div className="bg-[#1a1a1c] border border-[#1f1f21] p-6 rounded-lg">
          <Users className="h-8 w-8 text-[#2d5016] mb-3" aria-hidden="true" />
          <div className="text-3xl font-bold mb-1">{stats.usersImpacted}</div>
          <div className="text-sm text-gray-400">Users Impacted</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;