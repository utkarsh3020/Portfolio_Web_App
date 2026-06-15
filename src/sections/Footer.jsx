import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer id="contact" className="py-20 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 text-center px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-800 dark:text-slate-100">Get In Touch</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-xl mx-auto mb-10 text-lg">
          Currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </p>
        
        <a href={`mailto:${personalInfo.email}`} className="btn-primary mb-16 inline-flex text-lg px-8 py-4">
          Say Hello
        </a>
        
        <div className="flex justify-center gap-8 mb-12">
          <a href={personalInfo.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors hover:-translate-y-1 transform duration-300">
            <span className="sr-only">GitHub</span>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-500 transition-colors hover:-translate-y-1 transform duration-300">
            <span className="sr-only">LinkedIn</span>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
        
        <p className="text-slate-500 dark:text-slate-500 font-medium tracking-wide text-sm">
          © {new Date().getFullYear()} {personalInfo.name}.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
