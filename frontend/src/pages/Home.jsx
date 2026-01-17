import React from 'react';
import Navigation from '../components/portfolio/Navigation';
import Hero from '../components/portfolio/Hero';
import About from '../components/portfolio/About';
import FeaturedWork from '../components/portfolio/FeaturedWork';
import Skills from '../components/portfolio/Skills';
import Contact from '../components/portfolio/Contact';
import Footer from '../components/portfolio/Footer';
import { portfolioData } from '../mock';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0f0f10] text-white">
      <Navigation name={portfolioData.hero.name} />
      
      <main>
        <Hero 
          hero={portfolioData.hero} 
          stats={{
            yearsExperience: portfolioData.about.yearsExperience,
            productsShipped: portfolioData.about.productsShipped,
            usersImpacted: portfolioData.about.usersImpacted
          }} 
        />
        
        <About about={portfolioData.about} />
        
        <FeaturedWork caseStudies={portfolioData.caseStudies} />
        
        <Skills skills={portfolioData.skills} />
        
        <Contact contact={portfolioData.contact} />
      </main>
      
      <Footer 
        name={portfolioData.hero.name} 
        resumeUrl={portfolioData.contact.resumeUrl} 
      />
    </div>
  );
};

export default Home;