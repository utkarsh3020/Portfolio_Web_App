import React from 'react';
import { personalInfo } from '../data/portfolioData';
import ProfileImage from '../assets/Profile_UG.jpg';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">My Intro</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="glass-card p-4 relative group">
            {/* Using placeholder for now */}
            <div className="overflow-hidden rounded-xl">
              <img 
                src={ProfileImage} 
                alt="Utkarsh Gupta" 
                className="w-full h-auto aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                // onError={(e) => { e.target.src = 'https://via.placeholder.com/600x600?text=Profile+Image' }} 
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur-2xl opacity-40 -z-10"></div>
          </div>
          
          <div className="flex flex-col">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              {personalInfo.about}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 text-center hover:-translate-y-2 transition-transform">
                <h3 className="text-4xl font-extrabold text-blue-500 mb-2">3+</h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Years Experience</p>
              </div>
              <div className="glass-card p-6 text-center hover:-translate-y-2 transition-transform">
                <h3 className="text-4xl font-extrabold text-violet-500 mb-2">10+</h3>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Projects Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
