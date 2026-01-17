import React from 'react';

const Navigation = ({ name }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f10]/95 backdrop-blur-sm border-b border-[#1f1f21]">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-semibold">{name}</div>
        <div className="flex gap-8 items-center">
          <button 
            onClick={() => scrollToSection('work')} 
            className="text-sm text-gray-400 hover:text-[#2d5016] transition-colors"
            aria-label="Navigate to work section"
          >
            Work
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-sm text-gray-400 hover:text-[#2d5016] transition-colors"
            aria-label="Navigate to about section"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-sm text-gray-400 hover:text-[#2d5016] transition-colors"
            aria-label="Navigate to contact section"
          >
            Contact
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;