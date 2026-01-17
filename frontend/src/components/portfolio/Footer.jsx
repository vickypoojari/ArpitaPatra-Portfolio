import React from 'react';
import { Download } from 'lucide-react';

const Footer = ({ name, resumeUrl }) => {
  return (
    <footer className="border-t border-[#1f1f21] py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} {name}. All rights reserved.
          </p>
          <a 
            href={resumeUrl} 
            className="text-sm text-gray-400 hover:text-[#2d5016] transition-colors flex items-center gap-2"
            aria-label="Download resume"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;