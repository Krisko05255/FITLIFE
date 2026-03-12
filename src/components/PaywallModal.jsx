import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck } from 'lucide-react';

const PaywallModal = ({ isOpen, onClose, onUnlock, price = "5.00", articleTitle }) => {
  const [isProcessing, setIsProcessing] = useState(false);

  if (!isOpen) return null;

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Mock processing delay
    setTimeout(() => {
      setIsProcessing(false);
      onUnlock();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Ribbon */}
        <div className="bg-slate-800 p-6 pt-8 text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/50 hover:text-white transition"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="w-16 h-16 bg-electric-blue rounded-full mx-auto flex items-center justify-center mb-4 shadow-lg ring-4 ring-slate-800">
             <CreditCard className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-1">Unlock Premium Article</h3>
          <p className="text-slate-300 text-sm italic opacity-90 truncate px-4">"{articleTitle}"</p>
        </div>

        {/* Body */}
        <div className="p-8">
          <div className="flex justify-between items-end mb-8 border-b border-gray-100 pb-6">
            <div>
              <p className="text-slate-500 font-medium mb-1">Total amount</p>
              <p className="text-slate-800 font-bold text-4xl">${price}</p>
            </div>
            <div className="text-right">
              <span className="bg-green-50 text-green-600 text-xs font-bold px-2.5 py-1 rounded-md">One-time payment</span>
            </div>
          </div>

          <form onSubmit={handlePayment} className="space-y-4">
            {/* Mock Card Input UI */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Card Information</label>
              <div className="border border-gray-200 rounded-lg shadow-sm focus-within:border-electric-blue focus-within:ring-1 focus-within:ring-electric-blue transition-all">
                <input 
                  type="text" 
                  placeholder="Card number" 
                  required
                  className="w-full px-4 py-3 border-b border-gray-200 outline-none rounded-t-lg font-mono text-sm placeholder:font-sans"
                />
                <div className="flex">
                  <input 
                    type="text" 
                    placeholder="MM/YY" 
                    required
                    className="w-1/2 px-4 py-3 border-r border-gray-200 outline-none rounded-bl-lg font-mono text-sm placeholder:font-sans"
                  />
                  <input 
                    type="text" 
                    placeholder="CVC" 
                    required
                    className="w-1/2 px-4 py-3 outline-none rounded-br-lg font-mono text-sm placeholder:font-sans"
                  />
                </div>
              </div>
            </div>
            
            <button 
              type="submit" 
              disabled={isProcessing}
              className="w-full bg-electric-blue hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition duration-200 flex items-center justify-center gap-2 mt-6 shadow-lg shadow-blue-500/25 disabled:opacity-70"
            >
              {isProcessing ? (
                <>Processing...</>
              ) : (
                <>Pay ${price} <ArrowRight className="h-5 w-5" /></>
              )}
            </button>
            <p className="text-center text-xs text-slate-400 mt-4 flex items-center justify-center gap-1.5">
              <ShieldCheck className="h-4 w-4" /> Secure, 256-bit encrypted checkout.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaywallModal;
