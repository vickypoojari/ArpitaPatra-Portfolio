import React from 'react';
import { CheckCircle2, ChevronDown } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';

const CaseStudyCard = ({ study }) => {
  return (
    <Card className="bg-[#1a1a1c] border-[#1f1f21] overflow-hidden hover:border-[#2d5016] transition-all">
      <CardContent className="p-8">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4" role="list" aria-label="Project tags">
          {study.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="outline" 
              className="bg-[#0f0f10] border-[#2d5016] text-[#2d5016]"
              role="listitem"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        {/* Header */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold mb-2">{study.title}</h3>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>{study.company}</span>
            <span aria-hidden="true">•</span>
            <span>{study.role}</span>
            <span aria-hidden="true">•</span>
            <span>{study.timeline}</span>
          </div>
        </div>

        <div className="space-y-6">
          {/* Problem */}
          <div>
            <h4 className="text-sm font-semibold text-[#2d5016] mb-2 uppercase tracking-wide">
              Problem
            </h4>
            <p className="text-gray-300 leading-relaxed">{study.problem}</p>
          </div>

          {/* Approach */}
          <div>
            <h4 className="text-sm font-semibold text-[#2d5016] mb-3 uppercase tracking-wide">
              Approach
            </h4>
            <ul className="space-y-2" role="list">
              {study.approach.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300" role="listitem">
                  <ChevronDown 
                    className="h-5 w-5 text-[#2d5016] flex-shrink-0 rotate-[-90deg]" 
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="bg-[#0f0f10] border border-[#2d5016] p-6 rounded-lg">
            <h4 className="text-sm font-semibold text-[#2d5016] mb-3 uppercase tracking-wide">
              Impact
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3" role="list">
              {study.impact.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-300" role="listitem">
                  <CheckCircle2 
                    className="h-5 w-5 text-[#2d5016] flex-shrink-0 mt-0.5" 
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;