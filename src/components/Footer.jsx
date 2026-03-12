import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Brand Info */}
          <div>
            <span className="font-bold text-2xl tracking-tight text-slate-800">FITLIFE</span>
            <p className="mt-4 text-slate-grey">
              Embracing the Lifestyle over Deprivation philosophy. Small changes, massive results.
            </p>
          </div>

          {/* Newsletter Signup (Sticky feature idea implemented here cleanly) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative">
            <h3 className="font-bold text-slate-800 text-lg mb-2">Join the Community</h3>
            <p className="text-sm text-slate-grey mb-4">Get weekly tips and exclusive content directly to your inbox.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-electric-blue"
              />
              <button 
                type="button"
                className="bg-electric-blue text-white font-medium px-4 py-2 rounded-md hover:bg-blue-700 transition flex items-center justify-center gap-2"
              >
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Social / Instagram Feed Widget Placeholder */}
          <div>
            <h3 className="font-bold text-slate-800 text-lg mb-4 flex items-center gap-2">
              <Instagram className="h-5 w-5 text-pink-600" />
              Instagram
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {['media__1773336516909.jpg', 'media__1773336517539.jpg', 'media__1773336517551.jpg', 'media__1773336517599.jpg'].map((img, i) => (
                <div key={i} className="aspect-square bg-gray-200 rounded-md overflow-hidden relative group cursor-pointer hover:opacity-80 transition">
                  <img src={`/images/${img}`} alt={`Instagram feed ${i}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-slate-grey opacity-0 group-hover:opacity-10 transition"></div>
                </div>
              ))}
            </div>
            <a href="https://www.instagram.com/fit_meganriley/" target="_blank" rel="noopener noreferrer" className="block mt-4 text-sm text-electric-blue hover:underline cursor-pointer">
              @fit_meganriley
            </a>
          </div>

        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 text-center text-sm text-slate-grey">
          &copy; {new Date().getFullYear()} FitLife. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
