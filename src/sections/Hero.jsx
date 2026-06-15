import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-24 pb-16 px-6 relative overflow-hidden animate-fade-in">
      {/* Decorative background blur elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-6xl flex flex-col items-center md:items-start text-center md:text-left z-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-800 dark:text-white mb-4 leading-tight">
          Hi, I'm <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-bold text-slate-600 dark:text-slate-300 mb-6">
          {personalInfo.role}
        </h2>
        
        <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mb-10 leading-relaxed">
          {personalInfo.tagline}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#projects" className="btn-primary w-full sm:w-auto">
            View Featured Work
          </a>
          <a href={personalInfo.resume} download className="btn-secondary w-full sm:w-auto">
            Download Resume
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
