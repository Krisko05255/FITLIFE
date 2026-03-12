import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { Lock, Star } from 'lucide-react';

const Premium = () => {
  const premiumArticles = articles.filter(a => a.isPremium);

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-electric-blue rounded-[2.5rem] p-12 text-center text-white mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <Star className="h-16 w-16 text-yellow-300 mx-auto mb-6 fill-yellow-300" />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">FitLife Premium Content</h1>
            <p className="text-xl text-blue-100">
              Unlock our most effective, comprehensive guides and strategies that go deep into the science of extreme body transformation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {premiumArticles.map((article) => (
            <Link 
              to={`/articles/${article.id}`} 
              key={article.id}
              className="group bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="w-16 h-16 bg-blue-50 text-electric-blue rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Lock className="h-8 w-8" />
              </div>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 px-4 leading-tight">
                {article.title}
              </h2>
              <p className="text-slate-grey mb-8 flex-grow">
                {article.excerpt}
              </p>
              <button className="bg-slate-800 text-white font-semibold py-3 px-8 rounded-full hover:bg-slate-700 transition w-full max-w-xs">
                Preview Article
              </button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Premium;
