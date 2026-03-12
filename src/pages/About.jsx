import React from 'react';

const About = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 tracking-tight mb-6">About FitLife</h1>
          <p className="text-xl text-slate-grey">
            Redefining fitness through sustainable, smart changes.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg prose-slate mx-auto">
          <p className="lead text-2xl text-slate-800 font-medium mb-8">
            The fitness industry has a problem. It sells radical transformations through severe restrictions, setting millions up for failure, burnout, and guilt.
          </p>
          
          <div className="space-y-6 text-slate-grey leading-relaxed">
            <p>
              We founded FitLife on a fundamentally different premise: <strong>Lifestyle over Deprivation.</strong>
            </p>
            <p>
              Your body is highly adaptable. It doesn't require starvation or three-hour daily gym sessions to change. It requires consistency, intelligent planning, and small, manageable shifts in your daily habits. 
            </p>
            <p>
              Our approach focuses on what you can <em>add</em> to your life—more energy, more strength, more confidence—rather than what you need to take away. Whether it's learning to count calories the right way without obsessing over every morsel, or understanding how your metabolism truly works, our goal is education that leads to empowerment.
            </p>
            <p>
              We provide both free foundational guides and premium, in-depth blueprints for those ready to take their transformation to the absolute highest level. Welcome to the new standard of fitness.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
