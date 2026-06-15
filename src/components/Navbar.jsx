import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'py-4 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border-slate-200 dark:border-slate-800' : 'py-6 bg-transparent border-transparent'}`}
    >
      <nav className="container mx-auto px-6 max-w-6xl flex justify-between items-center">
        <a href="#" className="text-2xl font-extrabold text-slate-800 dark:text-white tracking-tighter">
          UG<span className="text-blue-500">.</span>
        </a>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <li><a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">About</a></li>
          <li><a href="#skills" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Skills</a></li>
          <li><a href="#experience" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Experience</a></li>
          <li><a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Projects</a></li>
          <li><a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">Contact</a></li>
          <li><ThemeToggle /></li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-slate-800 dark:text-slate-100 p-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg md:hidden">
          <ul className="flex flex-col p-6 gap-6 font-medium text-center">
            <li><a href="#about" onClick={() => setMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400">About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400">Skills</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400">Experience</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)} className="block text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
