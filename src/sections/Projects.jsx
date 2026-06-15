import React from 'react';
import { projects } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-slate-100 dark:bg-slate-900/50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="section-title">Featured Work</h2>
        <p className="section-subtitle">My Recent Projects</p>

        <div className="flex flex-col gap-16">
          {projects.map((project, index) => (
            <div key={project.id} className={`glass-card p-6 md:p-8 flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>

              {/* Project Image Placeholder */}
              {/* <div className="w-full lg:w-1/2 h-64 md:h-80 bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center justify-center relative overflow-hidden group">
                 <span className="text-slate-400 font-medium z-10">Project Screenshot ({project.title})</span>
                 <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div> */}
              <div className="w-full lg:w-1/2 h-64 md:h-80 bg-slate-200 dark:bg-slate-800 rounded-xl flex items-center justify-center relative overflow-hidden group">
                {project.img ? (
                  <img
                    src={project.img}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-slate-400 font-medium z-10">Project Screenshot ({project.title})</span>
                )}
                {/* <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2 flex flex-col">
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-800 dark:text-slate-100 mb-4">{project.title}</h3>

                <div className="bg-white/50 dark:bg-slate-950/50 p-6 rounded-xl border border-slate-200/50 dark:border-slate-800/50 mb-6">
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{project.longDescription}</p>
                </div>

                <div className="mb-6">
                  <strong className="text-slate-800 dark:text-slate-100 font-semibold mb-3 block">Key Features:</strong>
                  <ul className="flex flex-col gap-2">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-600 dark:text-slate-300 text-sm">
                        <span className="text-blue-500">✓</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-auto">
                  {project.github !== "#" && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="btn-secondary text-sm px-4 py-2">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      Code
                    </a>
                  )}
                  <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary text-sm px-4 py-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                    Live Demo
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
