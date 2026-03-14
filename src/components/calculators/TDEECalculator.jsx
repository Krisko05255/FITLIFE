import React, { useState } from 'react';
import { Activity, Info } from 'lucide-react';

const TDEECalculator = () => {
  const [gender, setGender] = useState('male');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [activity, setActivity] = useState('1.2');
  const [result, setResult] = useState(null);

  const calculateTDEE = (e) => {
    e.preventDefault();
    if (!weight || !height || !age) return;

    // Mifflin-St Jeor Equation
    let bmr = (10 * parseFloat(weight)) + (6.25 * parseFloat(height)) - (5 * parseInt(age));
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;
    
    const tdee = Math.round(bmr * parseFloat(activity));
    setResult(tdee);
  };

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Activity className="h-6 w-6 text-electric-blue" />
        <h2 className="text-2xl font-bold text-slate-800">TDEE Calculator</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <form onSubmit={calculateTDEE} className="space-y-6">
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button
              type="button"
              onClick={() => setGender('male')}
              className={`flex-1 py-2 rounded-lg font-bold transition ${gender === 'male' ? 'bg-white shadow text-electric-blue' : 'text-slate-500'}`}
            >
              Male
            </button>
            <button
              type="button"
              onClick={() => setGender('female')}
              className={`flex-1 py-2 rounded-lg font-bold transition ${gender === 'female' ? 'bg-white shadow text-electric-blue' : 'text-slate-500'}`}
            >
              Female
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="e.g. 80"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue transition"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="e.g. 180"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Age</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. 25"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Activity Level</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue transition appearance-none bg-white"
            >
              <option value="1.2">Sedentary (Office job)</option>
              <option value="1.375">Lightly Active (1-2 days/week)</option>
              <option value="1.55">Moderately Active (3-5 days/week)</option>
              <option value="1.725">Very Active (6-7 days/week)</option>
              <option value="1.9">Extra Active (Physical job + training)</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-electric-blue text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
          >
            Calculate TDEE
          </button>
        </form>

        <div className="flex flex-col justify-center">
          {result ? (
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="text-slate-500 uppercase tracking-widest font-bold text-sm mb-2">Your Maintenance Calories</p>
              <div className="text-6xl font-black text-slate-800 mb-4">{result}</div>
              <p className="text-slate-500 mb-8">Calories/day</p>
              
              <div className="space-y-4">
                <a href="/articles/count-calories-right-way" className="block w-full bg-white border border-slate-200 text-slate-800 font-bold py-3 rounded-xl hover:bg-slate-100 transition flex items-center justify-center gap-2">
                  How to use this number <ChevronRight className="h-4 w-4" />
                </a>
                <button className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-900 transition">
                  Get My Custom Plan
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-3xl p-8 border border-dashed border-slate-300 text-center opacity-60">
              <Info className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 font-medium italic">
                Enter your details to calculate your Total Daily Energy Expenditure.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ChevronRight = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default TDEECalculator;
