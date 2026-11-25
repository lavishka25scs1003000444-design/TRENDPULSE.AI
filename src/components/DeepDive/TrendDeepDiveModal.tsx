import React, { useState } from 'react';
import { 
  X, 
  TrendingUp, 
  Clock, 
  Sparkles, 
  Bookmark, 
  Music2, 
  Share2, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Eye, 
  Zap, 
  ArrowRight,
  PieChart,
  Users,
  Compass
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { TrendItem } from '../../types';

interface TrendDeepDiveModalProps {
  trend: TrendItem;
  onClose: () => void;
  onForgeScript: (trend: TrendItem) => void;
  onToggleWatchlist: (trendId: string) => void;
  isWatchlisted: boolean;
}

export const TrendDeepDiveModal: React.FC<TrendDeepDiveModalProps> = ({
  trend,
  onClose,
  onForgeScript,
  onToggleWatchlist,
  isWatchlisted
}) => {
  const [activeChartMetric, setActiveChartMetric] = useState<'volume' | 'velocity' | 'saturation'>('volume');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl bg-[#0f172a] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="relative px-6 py-5 border-b border-slate-800/80 bg-gradient-to-r from-purple-950/40 via-slate-900 to-indigo-950/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 animate-ping" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-purple-400 bg-purple-950/80 px-2.5 py-0.5 rounded border border-purple-800/60">
                  {trend.hashtag}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  Detected {trend.firstDetected}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-white mt-1">
                {trend.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWatchlist(trend.id)}
              className={`p-2 rounded-xl border transition-all ${
                isWatchlisted 
                  ? 'bg-pink-500/20 text-pink-400 border-pink-500/40' 
                  : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
              }`}
              title={isWatchlisted ? 'Remove from watchlist' : 'Save to watchlist'}
            >
              <Bookmark className={`w-4 h-4 ${isWatchlisted ? 'fill-pink-400' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
          {/* Key Metrics Quick Summary */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Velocity Index</span>
              <div className="text-2xl font-extrabold text-emerald-400 font-mono mt-1">
                {trend.velocityScore}/100
              </div>
              <span className="text-[10px] text-slate-500">Day-over-day surge</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Macro Suitability</span>
              <div className="text-2xl font-extrabold text-purple-400 font-mono mt-1">
                {trend.macroSuitability.macroSuitabilityScore}/100
              </div>
              <span className="text-[10px] text-slate-500">{trend.macroSuitability.categoryAuthorityPotential} Authority</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Saturation Level</span>
              <div className={`text-2xl font-extrabold font-mono mt-1 ${
                trend.saturationScore > 70 ? 'text-rose-400' : trend.saturationScore > 40 ? 'text-amber-400' : 'text-emerald-400'
              }`}>
                {trend.saturationScore}%
              </div>
              <span className="text-[10px] text-slate-500">Copycat density</span>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
              <span className="text-[11px] font-bold text-slate-400 uppercase">Est. Peak Horizon</span>
              <div className="text-sm font-extrabold text-indigo-300 mt-2 leading-tight">
                {trend.peakPredictionDate}
              </div>
              <span className="text-[10px] text-indigo-400/80 font-mono">Window of entry</span>
            </div>
          </div>

          {/* Time Series Historical Trajectory Chart */}
          <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-400" />
                  <span>Historical Adoption & Velocity Trajectory</span>
                </h3>
                <p className="text-xs text-slate-400">Measured across millions of Reels and TikTok posts over time</p>
              </div>

              <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                <button
                  onClick={() => setActiveChartMetric('volume')}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                    activeChartMetric === 'volume' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Post Volume
                </button>
                <button
                  onClick={() => setActiveChartMetric('velocity')}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                    activeChartMetric === 'velocity' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Velocity Delta
                </button>
                <button
                  onClick={() => setActiveChartMetric('saturation')}
                  className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                    activeChartMetric === 'saturation' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Saturation %
                </button>
              </div>
            </div>

            <div className="h-60 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={trend.timeSeries} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.5}/>
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="date" stroke="#64748b" fontSize={11} />
                  <YAxis stroke="#64748b" fontSize={11} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f172a', 
                      borderColor: '#334155',
                      borderRadius: '0.75rem',
                      fontSize: '12px',
                      color: '#fff'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey={
                      activeChartMetric === 'volume' ? 'volume' : 
                      activeChartMetric === 'velocity' ? 'velocity' : 'saturationIndex'
                    } 
                    stroke="#a855f7" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#chartGradient)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Multimodal Analysis Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Left: Why it works & Audio Signal */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold uppercase text-purple-400 tracking-wider flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5" />
                Algorithmic Virality Drivers
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {trend.whyItsTrending}
              </p>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Music2 className="w-3.5 h-3.5 text-purple-400" />
                    Soundtrack:
                  </span>
                  <span className="font-mono text-purple-300 font-semibold">{trend.audioName}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Audio Momentum:</span>
                  <span className="font-mono text-emerald-400 font-bold">{trend.audioGrowthDelta}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Visual Pattern:</span>
                  <span className="text-slate-200 text-right text-[11px] max-w-[60%]">{trend.keyVisualPattern}</span>
                </div>
              </div>
            </div>

            {/* Right: Macro Creator Risk vs Reward Strategy */}
            <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
              <h4 className="text-xs font-bold uppercase text-indigo-400 tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Macro Creator Playbook (500K+ Followers)
              </h4>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/80 border border-slate-800">
                  <span className="text-slate-400">Audience Fatigue Risk:</span>
                  <span className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                    trend.macroSuitability.riskOfAudienceFatigue === 'Low' 
                      ? 'bg-emerald-500/20 text-emerald-300' 
                      : trend.macroSuitability.riskOfAudienceFatigue === 'Moderate'
                      ? 'bg-amber-500/20 text-amber-300'
                      : 'bg-rose-500/20 text-rose-300'
                  }`}>
                    {trend.macroSuitability.riskOfAudienceFatigue}
                  </span>
                </div>

                <div className="flex items-center justify-between p-2 rounded-lg bg-slate-950/80 border border-slate-800">
                  <span className="text-slate-400">Category Authority Potential:</span>
                  <span className="font-semibold text-purple-300 font-mono">
                    {trend.macroSuitability.categoryAuthorityPotential}
                  </span>
                </div>

                <div className="p-2.5 rounded-lg bg-purple-950/30 border border-purple-800/40 text-purple-200 text-[11px] leading-relaxed">
                  <strong>Macro Production Advice:</strong> {trend.macroSuitability.idealProductionFormat}
                </div>
              </div>
            </div>
          </div>

          {/* Macro Angles Preview */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase text-slate-300 tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span>Recommended Creative Angles for High Retention</span>
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {trend.macroAngles.map((angle, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/40 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-900/40 text-purple-300 border border-purple-700/50">
                      {angle.type}
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono font-semibold">
                      {angle.expectedRetentionBoost}
                    </span>
                  </div>
                  <h5 className="text-xs font-bold text-white mb-1">{angle.title}</h5>
                  <p className="text-[11px] text-slate-300 italic mb-2">"{angle.hook}"</p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{angle.storyOutline}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="px-6 py-4 bg-slate-950 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Ready to execute before this trend reaches its predicted peak?
          </div>
          <button
            onClick={() => {
              onClose();
              onForgeScript(trend);
            }}
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Macro Video Script in AI Studio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
