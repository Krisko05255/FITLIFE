import React, { useState } from 'react';
import { Calculator, Activity, Target, Dumbbell, ChevronRight } from 'lucide-react';
import TDEECalculator from '../components/calculators/TDEECalculator';
import MacroCalculator from '../components/calculators/MacroCalculator';
import BodyFatCalculator from '../components/calculators/BodyFatCalculator';
import OneRepMaxCalculator from '../components/calculators/OneRepMaxCalculator';

const Tools = () => {
  const [activeTab, setActiveTab] = useState('tdee');

  const tools = [
    { id: 'tdee', name: 'TDEE Calculator', icon: Activity, description: 'Calculate your Total Daily Energy Expenditure.' },
    { id: 'macro', name: 'Macro Calculator', icon: Target, description: 'Determine your ideal protein, carb, and fat intake.' },
    { id: 'bodyfat', name: 'Body Fat %', icon: Calculator, description: 'Estimate your body fat percentage.' },
    { id: '1rm', name: 'One Rep Max', icon: Dumbbell, description: 'Predict your maximum lifting capacity.' },
  ];

  const renderCalculator = () => {
    switch (activeTab) {
      case 'tdee': return <TDEECalculator />;
      case 'macro': return <MacroCalculator />;
      case 'bodyfat': return <BodyFatCalculator />;
      case '1rm': return <OneRepMaxCalculator />;
      default: return <TDEECalculator />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Fitness Tools Hub</h1>
          <p className="text-xl text-slate-grey max-w-2xl mx-auto">
            Free interactive tools to help you track your progress, optimize your nutrition, and reach your goals faster.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          {/* Sidebar / List */}
          <div className="lg:col-span-4 mb-8 lg:mb-0">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => setActiveTab(tool.id)}
                  className={`w-full flex items-center p-6 text-left transition-all border-b border-slate-100 last:border-0 ${
                    activeTab === tool.id 
                      ? 'bg-blue-50 border-r-4 border-r-electric-blue' 
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <div className={`p-3 rounded-xl mr-4 ${activeTab === tool.id ? 'bg-electric-blue text-white' : 'bg-slate-100 text-slate-500'}`}>
                    <tool.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-grow">
                    <h3 className={`font-bold ${activeTab === tool.id ? 'text-electric-blue' : 'text-slate-800'}`}>
                      {tool.name}
                    </h3>
                    <p className="text-sm text-slate-grey line-clamp-1">{tool.description}</p>
                  </div>
                  <ChevronRight className={`h-5 w-5 ${activeTab === tool.id ? 'text-electric-blue' : 'text-slate-300'}`} />
                </button>
              ))}
            </div>

            {/* Funnel/SEO Sidebar Tip */}
            <div className="mt-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 text-white shadow-xl">
              <h4 className="font-bold text-lg mb-2">Want better results?</h4>
              <p className="text-slate-300 text-sm mb-4">
                Our premium guides include personalized meal plans based on these exact calculations.
              </p>
              <a href="/premium" className="inline-block bg-electric-blue text-white text-sm font-bold px-6 py-2 rounded-full hover:bg-blue-700 transition">
                Explore Premium
              </a>
            </div>
          </div>

          {/* Main Content / Calculator UI */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden min-h-[500px]">
              {renderCalculator()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
