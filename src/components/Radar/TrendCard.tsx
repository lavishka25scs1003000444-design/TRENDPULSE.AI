import React from 'react';
import { 
  TrendingUp, 
  Flame, 
  Clock, 
  Sparkles, 
  Bookmark, 
  Eye, 
  BarChart2, 
  AlertTriangle, 
  CheckCircle2, 
  Music2, 
  Users,
  Compass,
  ArrowUpRight
} from 'lucide-react';
import { TrendItem, LifecycleStage } from '../../types';

interface TrendCardProps {
  trend: TrendItem;
  onSelect: (trend: TrendItem) => void;
  onForgeScript: (trend: TrendItem) => void;
  onToggleWatchlist: (trendId: string) => void;
  isWatchlisted: boolean;
  onToggleCompare?: (trendId: string) => void;
  isCompared?: boolean;
}

export const TrendCard: React.FC<TrendCardProps> = ({
  trend,
  onSelect,
  onForgeScript,
  onToggleWatchlist,
  isWatchlisted,
  onToggleCompare,
  isCompared
}) => {
  // Lifecycle Stage styling
  const getStageBadge = (stage: LifecycleStage) => {
    switch (stage) {
      case 'emerging':
        return {
          label: 'Emerging (Prime Entry)',
          bg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
          dot: 'bg-emerald-400',
          advice: 'Golden window for macro creators to set standard'
        };
      case 'rising':
        return {
          label: 'Rapidly Rising',
          bg: 'bg-blue-500/15 text-blue-300 border-blue-500/30',
          dot: 'bg-blue-400',
          advice: 'Strong engagement, high virality coefficient'
        };
      case 'viral_peak':
        return {
          label: 'Viral Peak',
          bg: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
          dot: 'bg-purple-400',
          advice: 'Hijack now with high-production twist'
        };
      case 'saturating':
        return {
          label: 'Saturating (Fatigue Risk)',
          bg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
          dot: 'bg-amber-400',
          advice: 'High copycat density — use contrarian angle only'
        };
      case 'declining':
        return {
          label: 'Declining',
          bg: 'bg-rose-500/15 text-rose-300 border-rose-500/30',
          dot: 'bg-rose-400',
          advice: 'Audience fatigue high — avoid direct replication'
        };
      default:
        return {
          label: 'Dormant',
          bg: 'bg-slate-700/30 text-slate-400 border-slate-700',
          dot: 'bg-slate-500',
          advice: 'Minimal current momentum'
        };
    }
  };

  const stageInfo = getStageBadge(trend.stage);

  return (
    <div className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800/80 flex flex-col justify-between relative group overflow-hidden">
      {/* Top ambient color glow depending on stage */}
      <div 
        className={`absolute -top-16 -right-16 w-36 h-36 rounded-full blur-3xl opacity-20 pointer-events-none ${
          trend.stage === 'emerging' ? 'bg-emerald-500' :
          trend.stage === 'rising' ? 'bg-blue-500' :
          trend.stage === 'viral_peak' ? 'bg-purple-500' :
          trend.stage === 'saturating' ? 'bg-amber-500' : 'bg-rose-500'
        }`} 
      />

      {/* Card Header */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-2.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${stageInfo.bg}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${stageInfo.dot} animate-pulse`} />
              {stageInfo.label}
            </span>
            <span className="text-[11px] font-mono font-medium text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
              {trend.hashtag}
            </span>
          </div>

          {/* Action Icons */}
          <div className="flex items-center gap-1">
            {onToggleCompare && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleCompare(trend.id);
                }}
                className={`p-1.5 rounded-lg border text-xs transition-colors ${
                  isCompared 
                    ? 'bg-purple-600 text-white border-purple-500' 
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
                }`}
                title={isCompared ? 'Remove from compare' : 'Compare with another trend'}
              >
                <BarChart2 className="w-3.5 h-3.5" />
              </button>
            )}

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleWatchlist(trend.id);
              }}
              className={`p-1.5 rounded-lg border transition-colors ${
                isWatchlisted
                  ? 'bg-pink-500/20 text-pink-400 border-pink-500/40'
                  : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
              title={isWatchlisted ? 'Saved in Watchlist' : 'Save to Watchlist'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isWatchlisted ? 'fill-pink-400' : ''}`} />
            </button>
          </div>
        </div>

        {/* Title & Overview */}
        <h3 
          onClick={() => onSelect(trend)}
          className="text-base font-bold text-white group-hover:text-purple-300 transition-colors cursor-pointer flex items-center justify-between"
        >
          <span>{trend.title}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-purple-400 shrink-0" />
        </h3>

        <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
          {trend.overview}
        </p>
      </div>

      {/* Macro Creator Metrics Matrix */}
      <div className="my-4 py-3 px-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2.5">
        {/* Metric 1: Velocity & Virality Potential */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/60">
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Velocity</div>
            <div className="text-sm font-extrabold text-emerald-400 font-mono mt-0.5">
              {trend.velocityScore}/100
            </div>
          </div>
          <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/60">
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Macro Fit</div>
            <div className="text-sm font-extrabold text-purple-400 font-mono mt-0.5">
              {trend.macroSuitability.macroSuitabilityScore}/100
            </div>
          </div>
          <div className="bg-slate-950/70 p-2 rounded-lg border border-slate-800/60">
            <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Saturation</div>
            <div className={`text-sm font-extrabold font-mono mt-0.5 ${
              trend.saturationScore > 70 ? 'text-rose-400' : trend.saturationScore > 40 ? 'text-amber-400' : 'text-emerald-400'
            }`}>
              {trend.saturationScore}%
            </div>
          </div>
        </div>

        {/* Audio Trend & 3-Sec Retention */}
        <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-800/50">
          <div className="flex items-center gap-1.5 text-slate-300 truncate max-w-[65%]">
            <Music2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
            <span className="truncate text-[11px] font-mono">{trend.audioName}</span>
          </div>
          <span className="text-[11px] font-semibold text-emerald-400 shrink-0 font-mono">
            {trend.platformMetrics.retentionFirst3s}% 3s Hold
          </span>
        </div>

        {/* Window of Opportunity */}
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
          <Clock className="w-3 h-3 text-indigo-400 shrink-0" />
          <span className="truncate">
            <strong className="text-slate-200">Optimal Window:</strong> {trend.macroSuitability.recommendedWindowDays}
          </span>
        </div>
      </div>

      {/* Macro Twist Teaser */}
      {trend.macroAngles.length > 0 && (
        <div className="mb-4 text-[11px] bg-purple-950/30 p-2.5 rounded-lg border border-purple-800/40 text-purple-200">
          <span className="font-bold text-purple-300">💡 Macro Twist: </span>
          <span className="italic">"{trend.macroAngles[0].title}"</span>
          <span className="block text-slate-400 text-[10px] mt-0.5 font-mono">
            Exp. retention: {trend.macroAngles[0].expectedRetentionBoost}
          </span>
        </div>
      )}

      {/* Footer Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-800/70">
        <button
          onClick={() => onSelect(trend)}
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all border border-slate-700/60"
        >
          <BarChart2 className="w-3.5 h-3.5 text-slate-400" />
          <span>Deep Insights</span>
        </button>

        <button
          onClick={() => onForgeScript(trend)}
          className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-md shadow-purple-600/20 transition-all hover:scale-[1.02]"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Forge Script</span>
        </button>
      </div>
    </div>
  );
};
