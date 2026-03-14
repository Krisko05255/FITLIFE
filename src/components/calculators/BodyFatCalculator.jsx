import React, { useState } from 'react';
import { Calculator, Info, ChevronRight } from 'lucide-react';

const BodyFatCalculator = () => {
  const [gender, setGender] = useState('male');
  const [height, setHeight] = useState('');
  const [neck, setNeck] = useState('');
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [result, setResult] = useState(null);

  const calculateBodyFat = (e) => {
    e.preventDefault();
    if (!height || !neck || !waist || (gender === 'female' && !hip)) return;

    const h = parseFloat(height);
    const n = parseFloat(neck);
    const w = parseFloat(waist);
    const hi = parseFloat(hip || 0);

    let bf;
    if (gender === 'male') {
       // Male formula
       bf = 495 / (1.0324 - 0.19077 * Math.log10(w - n) + 0.15456 * Math.log10(h)) - 450;
    } else {
       // Female formula
       bf = 495 / (1.29579 - 0.35004 * Math.log10(w + hi - n) + 0.22100 * Math.log10(h)) - 450;
    }

    setResult(Math.max(1, Math.min(60, bf)).toFixed(1));
  };

  const getCategory = (bf) => {
    const val = parseFloat(bf);
    if (gender === 'male') {
      if (val < 6) return 'Essential Fat';
      if (val < 14) return 'Athletes';
      if (val < 18) return 'Fitness';
      if (val < 25) return 'Average';
      return 'Obese';
    } else {
      if (val < 14) return 'Essential Fat';
      if (val < 21) return 'Athletes';
      if (val < 25) return 'Fitness';
      if (val < 32) return 'Average';
      return 'Obese';
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Calculator className="h-6 w-6 text-electric-blue" />
        <h2 className="text-2xl font-bold text-slate-800">Body Fat Calculator</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <form onSubmit={calculateBodyFat} className="space-y-4">
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
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Neck (cm)</label>
              <input
                type="number"
                value={neck}
                onChange={(e) => setNeck(e.target.value)}
                placeholder="e.g. 38"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue transition"
                required
              />
            </div>
          </div>

          <div>
             <label className="block text-sm font-bold text-slate-700 mb-2">Waist (cm)</label>
             <input
               type="number"
               value={waist}
               onChange={(e) => setWaist(e.target.value)}
               placeholder="e.g. 90"
               className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue transition"
               required
             />
             <p className="text-xs text-slate-400 mt-2">Measure at the navel for men, and at the narrowest point for women.</p>
          </div>

          {gender === 'female' && (
            <div className="animate-in fade-in slide-in-from-top-2">
              <label className="block text-sm font-bold text-slate-700 mb-2">Hips (cm)</label>
              <input
                type="number"
                value={hip}
                onChange={(e) => setHip(e.target.value)}
                placeholder="e.g. 100"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue transition"
                required
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-electric-blue text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
          >
            Estimate Body Fat
          </button>
        </form>

        <div className="flex flex-col justify-center">
          {result ? (
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p className="text-slate-500 uppercase tracking-widest font-bold text-sm mb-2">Estimated Body Fat</p>
              <div className="text-6xl font-black text-slate-800 mb-4">{result}%</div>
              
              <div className={`inline-block px-4 py-1 rounded-full text-white font-bold text-sm mb-8 ${result < 20 ? 'bg-green-500' : 'bg-orange-500'}`}>
                {getCategory(result)}
              </div>
              
              <div className="space-y-4 text-left">
                <div className="bg-white p-4 rounded-xl border border-slate-100 text-sm text-slate-600">
                   <p>Based on the <strong>US Navy Method</strong>, this calculation has an accuracy of +/- 3% for most individuals.</p>
                </div>
                <button className="w-full bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-900 transition flex items-center justify-center gap-2">
                  Learn how to reduce BF% <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-3xl p-8 border border-dashed border-slate-300 text-center opacity-60">
              <Info className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 font-medium italic">
                Enter your measurements to estimate your body fat percentage.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyFatCalculator;
