import React, { useState } from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { toast } from '../../hooks/use-toast';

const Contact = ({ contact }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // TODO: Replace with actual API call to backend
    // Mock submission for now
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="container mx-auto px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-3 text-center">Let's Connect</h2>
        <p className="text-gray-400 mb-12 text-center">
          Interested in working together? Drop me a message.
        </p>

        <Card className="bg-[#1a1a1c] border-[#1f1f21]">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-gray-300 mb-2 block">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-[#0f0f10] border-[#1f1f21] text-white focus:border-[#2d5016]"
                  placeholder="Your name"
                  aria-required="true"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-gray-300 mb-2 block">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-[#0f0f10] border-[#1f1f21] text-white focus:border-[#2d5016]"
                  placeholder="your.email@example.com"
                  aria-required="true"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-gray-300 mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-[#0f0f10] border-[#1f1f21] text-white focus:border-[#2d5016] resize-none"
                  placeholder="Tell me about your project or opportunity..."
                  aria-required="true"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#2d5016] hover:bg-[#3d6821] text-white py-6 rounded-md transition-all"
              >
                Send Message
                <Mail className="ml-2 h-5 w-5" />
              </Button>
            </form>

            <div className="mt-8 pt-8 border-t border-[#1f1f21]">
              <div className="flex justify-center gap-6">
                <a 
                  href={`mailto:${contact.email}`} 
                  className="text-gray-400 hover:text-[#2d5016] transition-colors"
                  aria-label="Send email"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <a 
                  href={`https://${contact.linkedin}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#2d5016] transition-colors"
                  aria-label="Visit LinkedIn profile"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a 
                  href={`https://twitter.com/${contact.twitter.replace('@', '')}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-400 hover:text-[#2d5016] transition-colors"
                  aria-label="Visit Twitter profile"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;