import React from 'react';
import { 
  X, 
  Layers, 
  TrendingUp, 
  Sparkles, 
  Clock, 
  ShieldAlert, 
  CheckCircle2, 
  Music2, 
  DollarSign,
  ArrowRight
} from 'lucide-react';
import { TrendItem } from '../../types';

interface TrendComparisonModalProps {
  trendIds: string[];
  allTrends: TrendItem[];
  onClose: () => void;
  onSelectTrend: (trend: TrendItem) => void;
  onForgeScript: (trend: TrendItem) => void;
}

export const TrendComparisonModal: React.FC<TrendComparisonModalProps> = ({
  trendIds,
  allTrends,
  onClose,
  onSelectTrend,
  onForgeScript
}) => {
  const trendsToCompare = allTrends.filter(t => trendIds.includes(t.id));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-5xl bg-[#0f172a] rounded-3xl border border-slate-800 shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="px-6 py-5 border-b border-slate-800/80 bg-gradient-to-r from-purple-950/40 via-slate-900 to-indigo-950/40 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-600/30 text-purple-300 border border-purple-500/40">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-white">
                Macro Trend ROI & Feasibility Matrix
              </h2>
              <p className="text-xs text-slate-400">
                Compare velocity, audience fatigue risk, and estimated sponsorship returns before allocating production resources.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Comparison Grid */}
        <div className="p-6 overflow-x-auto max-h-[75vh]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 min-w-[650px]">
            {trendsToCompare.map(trend => {
              const sponsor = trend.brandSponsors[0];

              return (
                <div 
                  key={trend.id}
                  className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 flex flex-col justify-between space-y-4"
                >
                  {/* Title & Stage */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono font-bold text-purple-400 bg-purple-950 px-2 py-0.5 rounded border border-purple-800/60">
                        {trend.hashtag}
                      </span>
                      <span className="text-xs font-bold text-emerald-400">
                        {trend.stage.toUpperCase()}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-white leading-snug">
                      {trend.title}
                    </h3>
                  </div>

                  {/* Core Metrics */}
                  <div className="space-y-2 py-3 border-y border-slate-800 text-xs">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Velocity Surge:</span>
                      <span className="font-mono text-emerald-400 font-bold">{trend.velocityScore}/100</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Macro Brand Fit:</span>
                      <span className="font-mono text-purple-400 font-bold">{trend.macroSuitability.macroSuitabilityScore}/100</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Saturation Level:</span>
                      <span className={`font-mono font-bold ${trend.saturationScore > 70 ? 'text-rose-400' : 'text-amber-400'}`}>
                        {trend.saturationScore}%
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">3-Sec Retention:</span>
                      <span className="font-mono text-indigo-400 font-bold">{trend.platformMetrics.retentionFirst3s}%</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Fatigue Risk:</span>
                      <span className="font-semibold text-slate-200">{trend.macroSuitability.riskOfAudienceFatigue}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Est. Sponsor Value:</span>
                      <span className="font-mono text-emerald-400 font-bold">{sponsor?.estimatedValue || '$10K+'}</span>
                    </div>
                  </div>

                  {/* Macro Verdict */}
                  <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-800/30 text-[11px] text-purple-200">
                    <strong className="block text-purple-300 mb-0.5">Production Strategy:</strong>
                    {trend.macroSuitability.idealProductionFormat}
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => {
                      onClose();
                      onForgeScript(trend);
                    }}
                    className="w-full py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Forge Script For This</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
