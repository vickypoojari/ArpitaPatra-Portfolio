import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, Linkedin, Twitter, Download, User, Briefcase, Users, ChevronDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Badge } from '../components/ui/badge';
import { portfolioData } from '../mock';
import { toast } from '../hooks/use-toast';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-[#0f0f10] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f10]/95 backdrop-blur-sm border-b border-[#1f1f21]">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-semibold">{portfolioData.hero.name}</div>
          <div className="flex gap-8 items-center">
            <button onClick={() => scrollToSection('work')} className="text-sm text-gray-400 hover:text-[#2d5016] transition-colors">
              Work
            </button>
            <button onClick={() => scrollToSection('about')} className="text-sm text-gray-400 hover:text-[#2d5016] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm text-gray-400 hover:text-[#2d5016] transition-colors">
              Contact
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-[#1a1a1c] border border-[#2d5016] px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-[#2d5016] rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-400">Available for new opportunities</span>
          </div>
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            {portfolioData.hero.name}
          </h1>
          <p className="text-2xl text-gray-400 mb-8 leading-relaxed">
            {portfolioData.hero.tagline}
          </p>
          <Button 
            onClick={() => scrollToSection('work')} 
            className="bg-[#2d5016] hover:bg-[#3d6821] text-white px-8 py-6 text-base rounded-md transition-all"
          >
            {portfolioData.hero.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl">
          <div className="bg-[#1a1a1c] border border-[#1f1f21] p-6 rounded-lg">
            <Briefcase className="h-8 w-8 text-[#2d5016] mb-3" />
            <div className="text-3xl font-bold mb-1">{portfolioData.about.yearsExperience}</div>
            <div className="text-sm text-gray-400">Years Experience</div>
          </div>
          <div className="bg-[#1a1a1c] border border-[#1f1f21] p-6 rounded-lg">
            <CheckCircle2 className="h-8 w-8 text-[#2d5016] mb-3" />
            <div className="text-3xl font-bold mb-1">{portfolioData.about.productsShipped}</div>
            <div className="text-sm text-gray-400">Products Shipped</div>
          </div>
          <div className="bg-[#1a1a1c] border border-[#1f1f21] p-6 rounded-lg">
            <Users className="h-8 w-8 text-[#2d5016] mb-3" />
            <div className="text-3xl font-bold mb-1">{portfolioData.about.usersImpacted}</div>
            <div className="text-sm text-gray-400">Users Impacted</div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-6">{portfolioData.about.headline}</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            {portfolioData.about.description}
          </p>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="work" className="container mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-3">Featured Work</h2>
          <p className="text-gray-400">Case studies showcasing product strategy, execution, and impact</p>
        </div>

        <div className="space-y-12">
          {portfolioData.caseStudies.map((study) => (
            <Card key={study.id} className="bg-[#1a1a1c] border-[#1f1f21] overflow-hidden hover:border-[#2d5016] transition-all">
              <CardContent className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-[#0f0f10] border-[#2d5016] text-[#2d5016]">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>{study.company}</span>
                    <span>•</span>
                    <span>{study.role}</span>
                    <span>•</span>
                    <span>{study.timeline}</span>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Problem */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#2d5016] mb-2 uppercase tracking-wide">Problem</h4>
                    <p className="text-gray-300 leading-relaxed">{study.problem}</p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h4 className="text-sm font-semibold text-[#2d5016] mb-3 uppercase tracking-wide">Approach</h4>
                    <ul className="space-y-2">
                      {study.approach.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <ChevronDown className="h-5 w-5 text-[#2d5016] flex-shrink-0 rotate-[-90deg]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Impact */}
                  <div className="bg-[#0f0f10] border border-[#2d5016] p-6 rounded-lg">
                    <h4 className="text-sm font-semibold text-[#2d5016] mb-3 uppercase tracking-wide">Impact</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {study.impact.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300">
                          <CheckCircle2 className="h-5 w-5 text-[#2d5016] flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-[#2d5016] mb-4 uppercase tracking-wide">Product Areas</h3>
              <ul className="space-y-3">
                {portfolioData.skills.productAreas.map((area) => (
                  <li key={area} className="text-gray-300">{area}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#2d5016] mb-4 uppercase tracking-wide">Methodologies</h3>
              <ul className="space-y-3">
                {portfolioData.skills.methodologies.map((method) => (
                  <li key={method} className="text-gray-300">{method}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-[#2d5016] mb-4 uppercase tracking-wide">Tools</h3>
              <ul className="space-y-3">
                {portfolioData.skills.tools.map((tool) => (
                  <li key={tool} className="text-gray-300 text-sm">{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-3 text-center">Let's Connect</h2>
          <p className="text-gray-400 mb-12 text-center">Interested in working together? Drop me a message.</p>

          <Card className="bg-[#1a1a1c] border-[#1f1f21]">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-300 mb-2 block">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-[#0f0f10] border-[#1f1f21] text-white focus:border-[#2d5016]"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-300 mb-2 block">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-[#0f0f10] border-[#1f1f21] text-white focus:border-[#2d5016]"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-gray-300 mb-2 block">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="bg-[#0f0f10] border-[#1f1f21] text-white focus:border-[#2d5016] resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button type="submit" className="w-full bg-[#2d5016] hover:bg-[#3d6821] text-white py-6 rounded-md transition-all">
                  Send Message
                  <Mail className="ml-2 h-5 w-5" />
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-[#1f1f21]">
                <div className="flex justify-center gap-6">
                  <a href={`mailto:${portfolioData.contact.email}`} className="text-gray-400 hover:text-[#2d5016] transition-colors">
                    <Mail className="h-6 w-6" />
                  </a>
                  <a href={`https://${portfolioData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2d5016] transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href={`https://twitter.com/${portfolioData.contact.twitter.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2d5016] transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1f1f21] py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 {portfolioData.hero.name}. All rights reserved.
            </p>
            <a href={portfolioData.contact.resumeUrl} className="text-sm text-gray-400 hover:text-[#2d5016] transition-colors flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;