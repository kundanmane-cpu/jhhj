
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { AuditFormData } from '../types';

const AuditForm: React.FC = () => {
  const [formData, setFormData] = useState<AuditFormData>({
    name: '',
    instagramHandle: '',
    niche: '',
    goal: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="py-24 bg-slate-950 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto glass rounded-[40px] border border-white/10 overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="md:w-2/5 p-12 bg-purple-600 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6 font-heading leading-tight">Get a Free Instagram Growth Audit</h2>
              <p className="text-purple-100 mb-8">
                Ready to grow the right way? Fill the form and our team will analyze your account manually.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-200" />
                  <span>Profile & Bio Review</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-200" />
                  <span>Content & Reels Analysis</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-200" />
                  <span>Clear Actionable Roadmap</span>
                </li>
              </ul>
            </div>
            <div className="mt-12 text-sm text-purple-200">
              ⚡ Delivered to your DMs within 48 hours.
            </div>
          </div>

          <div className="md:w-3/5 p-12 bg-slate-900/50">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold mb-2 font-heading">Audit Requested!</h3>
                <p className="text-slate-400">
                  Thank you {formData.name}. We've received your request and will get back to you soon.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-purple-400 font-bold hover:text-purple-300"
                >
                  Send another request
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Name</label>
                    <input 
                      required
                      type="text"
                      className="w-full bg-slate-800 border border-white/5 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Instagram Handle</label>
                    <input 
                      required
                      type="text"
                      className="w-full bg-slate-800 border border-white/5 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                      placeholder="@username"
                      value={formData.instagramHandle}
                      onChange={e => setFormData({...formData, instagramHandle: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Your Niche</label>
                  <input 
                    required
                    type="text"
                    className="w-full bg-slate-800 border border-white/5 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="e.g. SaaS Founder, Fitness Coach"
                    value={formData.niche}
                    onChange={e => setFormData({...formData, niche: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Main Goal</label>
                  <textarea 
                    required
                    rows={4}
                    className="w-full bg-slate-800 border border-white/5 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="What is your primary goal for the next 90 days?"
                    value={formData.goal}
                    onChange={e => setFormData({...formData, goal: e.target.value})}
                  ></textarea>
                </div>
                <button 
                  disabled={loading}
                  type="submit"
                  className="w-full py-4 bg-white text-slate-950 font-bold rounded-2xl hover:bg-purple-100 transition-all flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-2 border-slate-900 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>Submit Audit Request</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditForm;
