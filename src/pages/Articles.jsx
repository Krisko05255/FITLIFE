import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { Lock, Unlock } from 'lucide-react';

const Articles = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-4">Article Library</h1>
          <p className="text-xl text-slate-grey max-w-2xl mx-auto">
            Discover actionable insights on nutrition, mindset, and training.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {articles.map((article) => (
            <Link 
              to={`/articles/${article.id}`} 
              key={article.id}
              className="group flex flex-col bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Premium Badge */}
              {article.isPremium ? (
                <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-blue-50 text-electric-blue text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  <Lock className="h-3 w-3" /> Premium
                </div>
              ) : (
                <div className="absolute top-6 right-6 flex items-center gap-1.5 bg-green-50 text-green-600 text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                  <Unlock className="h-3 w-3" /> Free
                </div>
              )}
              
              <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4 group-hover:text-electric-blue transition-colors pr-12">
                {article.title}
              </h2>
              
              <p className="text-slate-grey leading-relaxed flex-grow">
                {article.excerpt}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-electric-blue font-semibold">
                Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Articles;
