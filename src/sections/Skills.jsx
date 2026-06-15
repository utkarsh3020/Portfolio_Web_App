import React from 'react';
import { skills } from '../data/portfolioData';

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-slate-100 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">My Technical Expertise</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="glass-card p-8 group">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </span>
                {skillGroup.category}
              </h3>
              <ul className="flex flex-col gap-4">
                {skillGroup.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600 dark:text-slate-300 font-medium">
                    <span className="text-violet-500">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
