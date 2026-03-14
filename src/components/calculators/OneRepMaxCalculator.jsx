import React, { useState } from 'react';
import { Dumbbell, Info, ChevronRight } from 'lucide-react';

const OneRepMaxCalculator = () => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [result, setResult] = useState(null);

  const calculate1RM = (e) => {
    e.preventDefault();
    if (!weight || !reps) return;

    const w = parseFloat(weight);
    const r = parseFloat(reps);

    if (r === 1) {
      setResult(w);
      return;
    }

    // Brzycki Formula
    const oneRM = w / (1.0278 - (0.0278 * r));
    setResult(Math.round(oneRM));
  };

  const getPercentages = (oneRM) => {
    const percentages = [95, 90, 85, 80, 75, 70];
    return percentages.map(p => ({
      percent: p,
      weight: Math.round(oneRM * (p / 100))
    }));
  };

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Dumbbell className="h-6 w-6 text-electric-blue" />
        <h2 className="text-2xl font-bold text-slate-800">One Rep Max Calculator</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <form onSubmit={calculate1RM} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Weight Lifted (kg)</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g. 100"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue transition"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Repetitions</label>
            <input
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
              placeholder="e.g. 5"
              min="1"
              max="15"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue transition"
              required
            />
            <p className="text-xs text-slate-400 mt-2">Maximum accuracy between 1-10 reps.</p>
          </div>

          <button
            type="submit"
            className="w-full bg-electric-blue text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
          >
            Predict 1-Rep Max
          </button>
        </form>

        <div className="flex flex-col justify-center">
          {result ? (
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="text-center mb-8 pb-8 border-b border-slate-200">
                <p className="text-slate-500 uppercase tracking-widest font-bold text-sm mb-2">Predicted 1RM</p>
                <div className="text-6xl font-black text-slate-800 mb-2">{result} kg</div>
                <p className="text-slate-500 text-sm">Target this for your heavy singles.</p>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-slate-800 text-sm mb-3">Training Percentages:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {getPercentages(result).map((p) => (
                    <div key={p.percent} className="bg-white p-3 rounded-xl border border-slate-100 flex justify-between items-center">
                      <span className="text-sm font-bold text-slate-400">{p.percent}%</span>
                      <span className="font-black text-slate-700">{p.weight} kg</span>
                    </div>
                  ))}
                </div>
                
                <button className="w-full mt-4 bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-900 transition flex items-center justify-center gap-2">
                  Find a strength program <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-3xl p-8 border border-dashed border-slate-300 text-center opacity-60">
              <Info className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 font-medium italic">
                Predict your maximum strength based on your recent lifts.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OneRepMaxCalculator;
