import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { Lock, ArrowLeft } from 'lucide-react';
import PaywallModal from '../components/PaywallModal';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find(a => a.id === id);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">Article Not Found</h2>
        <Link to="/articles" className="text-electric-blue hover:underline">Return to Articles</Link>
      </div>
    );
  }

  const isLockedPremium = article.isPremium && !isUnlocked;
  
  // Create a blurred preview text if locked
  const paragraphs = article.content.split('\n\n');
  const previewParagraphs = paragraphs.slice(0, 2);
  const blurredParagraphs = paragraphs.slice(2);

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/articles" className="inline-flex items-center gap-2 text-slate-500 hover:text-electric-blue transition mb-8 font-medium">
          <ArrowLeft className="h-4 w-4" /> Back to Library
        </Link>
        
        <header className="mb-12">
          {article.isPremium && (
            <div className="mb-4 inline-flex items-center gap-1.5 bg-blue-50 text-electric-blue text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
              {isUnlocked ? 'Premium Unlocked' : <><Lock className="h-3 w-3" /> Premium</>}
            </div>
          )}
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-800 tracking-tight leading-tight mb-6">
            {article.title}
          </h1>
          <div className="w-20 h-1 bg-electric-blue rounded-full"></div>
        </header>

        <article className="prose prose-lg md:prose-xl prose-slate font-sans">
          
          {isLockedPremium ? (
            <div className="relative">
              {/* Visible Preview */}
              <div className="space-y-6 text-slate-grey leading-relaxed">
                {previewParagraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Blurred Content Container */}
              <div className="relative mt-6">
                 <div className="space-y-6 text-slate-grey leading-relaxed blur-[6px] opacity-40 select-none pointer-events-none">
                  {blurredParagraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                 </div>

                 {/* Premium Overlay */}
                 <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-t from-white via-white/80 to-transparent p-6 text-center">
                    <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl p-10 max-w-lg w-full transform -translate-y-12">
                      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Lock className="h-8 w-8 text-electric-blue" />
                      </div>
                      <h3 className="text-2xl font-bold text-slate-800 mb-3">Keep Reading This Article</h3>
                      <p className="text-slate-500 mb-8">
                        Unlock this premium guide to discover the complete strategy, exact metrics, and actionable steps needed to accelerate your results.
                      </p>
                      <button 
                        onClick={() => setIsModalOpen(true)}
                        className="w-full bg-electric-blue hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
                      >
                         Unlock for $5.00
                      </button>
                    </div>
                 </div>
              </div>
            </div>
          ) : (
            /* Full Unlocked Content */
            <div className="space-y-6 text-slate-grey leading-relaxed">
              {paragraphs.map((p, idx) => {
                // Formatting simple headers/lists for better display
                if (p.match(/^[0-9]+\./) || p.length < 50) {
                  return <p key={idx} className="font-bold text-slate-800 mt-8 mb-4">{p}</p>;
                }
                return <p key={idx}>{p}</p>;
              })}
            </div>
          )}

        </article>
      </div>

      <PaywallModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onUnlock={() => {
          setIsModalOpen(false);
          setIsUnlocked(true);
        }}
        price="5.00"
        articleTitle={article.title}
      />
    </div>
  );
};

export default ArticleDetail;
