import React, { useState } from 'react';
import { Target, Info, ChevronRight } from 'lucide-react';

const MacroCalculator = () => {
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('maintain');
  const [calories, setCalories] = useState('');
  const [result, setResult] = useState(null);

  const calculateMacros = () => {
    if (!weight || !calories) {
      setResult(null);
      return;
    }

    const w = parseFloat(weight);
    const cals = parseFloat(calories);

    let proteinRatio, fatRatio;

    switch (goal) {
      case 'lose':
        proteinRatio = 2.2;
        fatRatio = 0.25;
        break;
      case 'build':
        proteinRatio = 2.0;
        fatRatio = 0.20;
        break;
      case 'maintain':
      default:
        proteinRatio = 2.0;
        fatRatio = 0.30;
        break;
    }

    // Step 1 – Calculate protein
    const proteinGrams = Math.round(w * proteinRatio);
    // Step 2 – Convert protein to calories
    const proteinCals = proteinGrams * 4;
    // Step 3 – Calculate fat calories
    const fatCals = Math.round(cals * fatRatio);
    // Step 4 – Convert fat to grams
    const fatGrams = Math.round(fatCals / 9);
    // Step 5 – Calculate remaining calories for carbs
    const carbCals = cals - proteinCals - fatCals;
    // Step 6 – Convert carbs to grams
    const carbGrams = Math.round(carbCals / 4);

    setResult({
      protein: proteinGrams,
      fat: fatGrams,
      carbs: carbGrams,
      total: cals
    });
  };

  React.useEffect(() => {
    calculateMacros();
  }, [weight, calories, goal]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    calculateMacros();
  };

  return (
    <div className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <Target className="h-6 w-6 text-electric-blue" />
        <h2 className="text-2xl font-bold text-slate-800">Macro Calculator</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <form onSubmit={handleFormSubmit} className="space-y-6">
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
            <label className="block text-sm font-bold text-slate-700 mb-2">Daily Calorie Target</label>
            <input
              type="number"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
              placeholder="e.g. 2500"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-electric-blue/20 focus:border-electric-blue transition"
              required
            />
            <p className="text-xs text-slate-400 mt-2">Use the TDEE tool if you're not sure about your target.</p>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Primary Goal</label>
            <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-xl">
              {['lose', 'maintain', 'build'].map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGoal(g)}
                  className={`py-2 rounded-lg font-bold text-sm transition capitalize ${goal === g ? 'bg-white shadow text-electric-blue' : 'text-slate-500'}`}
                >
                  {g === 'lose' ? 'Lose Fat' : g === 'maintain' ? 'Maintain' : 'Build Muscle'}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-electric-blue text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-500/20"
          >
            Calculate Macros
          </button>
        </form>

        <div className="flex flex-col justify-center">
          {result ? (
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-black text-slate-800">{result.protein}g</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Protein</div>
                </div>
                <div className="text-center border-x border-slate-200">
                  <div className="text-3xl font-black text-slate-800">{result.carbs}g</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Carbs</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-slate-800">{result.fat}g</div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Fat</div>
                </div>
              </div>

              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h4 className="font-bold text-slate-800 text-sm">How to hit these targets:</h4>
                <div className="bg-white p-4 rounded-xl border border-slate-100 text-sm text-slate-600 flex items-start gap-3">
                  <div className="bg-blue-50 p-2 rounded-lg shrink-0">
                    <Target className="h-4 w-4 text-electric-blue" />
                  </div>
                  <p>Eat roughly <strong>{Math.round(result.protein / 4)}g</strong> of protein per meal across 4 meals.</p>
                </div>
                
                <a href="/articles/15-ways-to-cut-100-calories" className="block w-full bg-white border border-slate-200 text-slate-800 font-bold py-3 rounded-xl hover:bg-slate-100 transition flex items-center justify-center gap-2">
                  Meal Plan Examples <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ) : (
            <div className="bg-slate-50 rounded-3xl p-8 border border-dashed border-slate-300 text-center opacity-60">
              <Info className="h-12 w-12 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500 font-medium italic">
                Get your custom macronutrient breakdown based on your goals.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MacroCalculator;
