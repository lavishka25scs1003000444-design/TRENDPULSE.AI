import React, { useState } from 'react';
import { 
  Bookmark, 
  Trash2, 
  Bell, 
  TrendingUp, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Download,
  Share2
} from 'lucide-react';
import { TrendItem } from '../../types';

interface WatchlistManagerProps {
  watchlistIds: string[];
  trends: TrendItem[];
  onRemoveFromWatchlist: (trendId: string) => void;
  onSelectTrend: (trend: TrendItem) => void;
  onForgeScript: (trend: TrendItem) => void;
}

export const WatchlistManager: React.FC<WatchlistManagerProps> = ({
  watchlistIds,
  trends,
  onRemoveFromWatchlist,
  onSelectTrend,
  onForgeScript
}) => {
  const watchlistedTrends = trends.filter(t => watchlistIds.includes(t.id));
  const [alertSettings, setAlertSettings] = useState<{ [id: string]: boolean }>({
    'trend-spatial-audio': true,
    'trend-contrarian-stop': true
  });

  const toggleAlert = (id: string) => {
    setAlertSettings(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const exportWatchlistReport = () => {
    const reportData = watchlistedTrends.map(t => ({
      title: t.title,
      hashtag: t.hashtag,
      stage: t.stage,
      velocity: t.velocityScore,
      saturation: t.saturationScore,
      audio: t.audioName,
      window: t.macroSuitability.recommendedWindowDays,
      macroFit: t.macroSuitability.macroSuitabilityScore
    }));

    const blob = new Blob([JSON.stringify(reportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `TrendPulse_Macro_Watchlist_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/60 border border-purple-500/20 p-6 shadow-xl relative overflow-hidden flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-semibold mb-3">
            <Bookmark className="w-3.5 h-3.5 text-pink-400" />
            <span>Active Macro Watchlist</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Trend Lifecycle Monitoring & Early Alerts
          </h1>
          <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
            Monitor critical shifts in adoption velocity and audience saturation in real-time. Automated alerts notify you the moment a trend reaches its peak window or begins experiencing audience fatigue.
          </p>
        </div>

        {watchlistedTrends.length > 0 && (
          <button
            onClick={exportWatchlistReport}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold transition-all shrink-0 hover:scale-[1.02]"
          >
            <Download className="w-4 h-4 text-purple-400" />
            <span>Export Trend Brief (.JSON)</span>
          </button>
        )}
      </div>

      {/* Watchlist Content */}
      {watchlistedTrends.length === 0 ? (
        <div className="text-center py-20 bg-slate-900/40 rounded-2xl border border-slate-800 p-8 space-y-3">
          <Bookmark className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-base font-bold text-white">Your Watchlist is empty</h3>
          <p className="text-xs text-slate-400 max-w-md mx-auto">
            Bookmark trends from the Trend Radar or Viral DNA Scanner to track their velocity changes and receive fatigue alerts.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {watchlistedTrends.map(t => {
            const hasAlert = alertSettings[t.id] ?? true;

            return (
              <div 
                key={t.id}
                className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5"
              >
                {/* Left Info */}
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-bold text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800/60">
                      {t.hashtag}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                      t.stage === 'emerging' ? 'bg-emerald-500/20 text-emerald-300' :
                      t.stage === 'rising' ? 'bg-blue-500/20 text-blue-300' :
                      t.stage === 'viral_peak' ? 'bg-purple-500/20 text-purple-300' :
                      'bg-amber-500/20 text-amber-300'
                    }`}>
                      {t.stage.toUpperCase()}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">
                      Window: {t.macroSuitability.recommendedWindowDays}
                    </span>
                  </div>

                  <h3 
                    onClick={() => onSelectTrend(t)}
                    className="text-base font-bold text-white hover:text-purple-300 cursor-pointer transition-colors"
                  >
                    {t.title}
                  </h3>

                  <p className="text-xs text-slate-300 line-clamp-1">
                    {t.overview}
                  </p>
                </div>

                {/* Middle Metrics */}
                <div className="flex items-center gap-4 text-center shrink-0">
                  <div className="bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Velocity</span>
                    <span className="text-sm font-extrabold text-emerald-400 font-mono">{t.velocityScore}/100</span>
                  </div>
                  <div className="bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Saturation</span>
                    <span className={`text-sm font-extrabold font-mono ${
                      t.saturationScore > 70 ? 'text-rose-400' : 'text-amber-400'
                    }`}>{t.saturationScore}%</span>
                  </div>
                  <div className="bg-slate-950 px-3 py-2 rounded-xl border border-slate-800">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">Macro Fit</span>
                    <span className="text-sm font-extrabold text-purple-400 font-mono">
                      {t.macroSuitability.macroSuitabilityScore}/100
                    </span>
                  </div>
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => toggleAlert(t.id)}
                    className={`p-2 rounded-xl border text-xs transition-colors flex items-center gap-1.5 ${
                      hasAlert
                        ? 'bg-purple-600/20 text-purple-300 border-purple-500/40'
                        : 'bg-slate-950 text-slate-500 border-slate-800 hover:text-slate-300'
                    }`}
                    title={hasAlert ? 'Alerts active' : 'Alerts paused'}
                  >
                    <Bell className="w-3.5 h-3.5" />
                    <span className="text-[11px] font-semibold">{hasAlert ? 'Alerts On' : 'Muted'}</span>
                  </button>

                  <button
                    onClick={() => onForgeScript(t)}
                    className="px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Forge Script</span>
                  </button>

                  <button
                    onClick={() => onRemoveFromWatchlist(t.id)}
                    className="p-2 rounded-xl bg-slate-950 text-slate-400 hover:text-rose-400 hover:bg-rose-950/30 border border-slate-800 transition-colors"
                    title="Remove from watchlist"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
