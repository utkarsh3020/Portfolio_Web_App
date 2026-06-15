import React from 'react';
import { experience } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">My Professional Journey</p>
        
        <div className="relative border-l-2 border-slate-200 dark:border-slate-800 ml-4 md:ml-6 lg:ml-8">
          {experience.map((exp) => (
            <div key={exp.id} className="mb-12 ml-8 md:ml-12 relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-10 md:-left-14 top-1 w-5 h-5 rounded-full bg-white dark:bg-slate-950 border-4 border-blue-500 shadow-sm transition-transform group-hover:scale-125"></div>
              
              <div className="glass-card p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-100 mb-1">{exp.role}</h3>
                <h4 className="text-lg font-semibold text-blue-500 mb-2">{exp.company}</h4>
                
                <div className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 mb-6 bg-slate-100 dark:bg-slate-800/50 inline-flex px-3 py-1 rounded-full">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                  <span>{exp.duration}</span>
                </div>
                
                <ul className="flex flex-col gap-3">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                      <span className="text-violet-500 mt-1 flex-shrink-0">▹</span>
                      <span className="leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
