import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-32 lg:pb-32">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-800 tracking-tight mb-6">
                Small Changes, <br/><span className="text-electric-blue">Massive Results.</span>
              </h1>
              <p className="text-xl text-slate-grey mb-10 max-w-2xl mx-auto lg:mx-0">
                A modern approach to fitness. Build the body you want without giving up the life you love.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/articles" className="bg-electric-blue text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30">
                  Start Reading <ArrowRight className="h-5 w-5" />
                </Link>
                <Link to="/premium" className="bg-white text-slate-800 border border-gray-200 font-bold px-8 py-4 rounded-full hover:bg-slate-50 transition flex items-center justify-center">
                  Unlock Premium
                </Link>
              </div>
            </div>
            <div className="lg:col-span-6 mt-16 lg:mt-0 relative group">
              <div className="absolute inset-0 bg-electric-blue rounded-3xl transform rotate-3 scale-105 opacity-10 group-hover:rotate-6 transition duration-500"></div>
              {/* Fitness model photo */}
              <div className="relative bg-gradient-to-tr from-slate-200 to-slate-100 rounded-3xl aspect-[4/5] overflow-hidden flex items-center justify-center border border-white shadow-2xl">
                 <img src="/images/media__1773336516909.jpg" alt="Fitness Model" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">The "Lifestyle over Deprivation" Philosophy</h2>
          <div className="w-24 h-1 bg-electric-blue mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-slate-grey leading-relaxed">
            Most fitness programs fail because they ask you to change everything all at once. They demand perfection, eliminate your favorite foods, and leave you exhausted. We believe in a different approach. By focusing on sustainable, intelligent adjustments to your daily routine, you can achieve extraordinary transformations while actually enjoying the process.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
