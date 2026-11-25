import React, { useState } from 'react';
import { 
  Flame, 
  Search, 
  Filter, 
  ArrowUpDown, 
  Sparkles, 
  SlidersHorizontal,
  Compass,
  Zap,
  TrendingUp,
  AlertCircle,
  HelpCircle,
  Layers
} from 'lucide-react';
import { TrendItem, LifecycleStage, ContentNiche, MacroCreatorProfile } from '../../types';
import { TrendCard } from './TrendCard';

interface TrendRadarProps {
  trends: TrendItem[];
  activeProfile: MacroCreatorProfile;
  onSelectTrend: (trend: TrendItem) => void;
  onForgeScript: (trend: TrendItem) => void;
  watchlist: string[];
  onToggleWatchlist: (trendId: string) => void;
  comparedTrendIds: string[];
  onToggleCompare: (trendId: string) => void;
  onOpenCompareModal: () => void;
}

export const TrendRadar: React.FC<TrendRadarProps> = ({
  trends,
  activeProfile,
  onSelectTrend,
  onForgeScript,
  watchlist,
  onToggleWatchlist,
  comparedTrendIds,
  onToggleCompare,
  onOpenCompareModal
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStage, setSelectedStage] = useState<LifecycleStage | 'all'>('all');
  const [selectedNiche, setSelectedNiche] = useState<ContentNiche | 'all'>('all');
  const [macroFitOnly, setMacroFitOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'velocity' | 'macroFit' | 'saturation' | 'views'>('velocity');

  // Stage filters count
  const counts = {
    all: trends.length,
    emerging: trends.filter(t => t.stage === 'emerging').length,
    rising: trends.filter(t => t.stage === 'rising').length,
    viral_peak: trends.filter(t => t.stage === 'viral_peak').length,
    saturating: trends.filter(t => t.stage === 'saturating').length,
    declining: trends.filter(t => t.stage === 'declining').length,
  };

  // Filter trends
  const filteredTrends = trends.filter(t => {
    // Search match
    const matchesSearch = 
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.hashtag.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.audioName.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Stage match
    const matchesStage = selectedStage === 'all' || t.stage === selectedStage;

    // Niche match
    const matchesNiche = selectedNiche === 'all' || t.category === selectedNiche;

    // Macro filter
    const matchesMacro = !macroFitOnly || t.macroSuitability.macroSuitabilityScore >= 85;

    return matchesSearch && matchesStage && matchesNiche && matchesMacro;
  }).sort((a, b) => {
    if (sortBy === 'velocity') return b.velocityScore - a.velocityScore;
    if (sortBy === 'macroFit') return b.macroSuitability.macroSuitabilityScore - a.macroSuitability.macroSuitabilityScore;
    if (sortBy === 'saturation') return a.saturationScore - b.saturationScore; // lowest saturation first
    return b.viralityPotential - a.viralityPotential;
  });

  return (
    <div className="space-y-6">
      {/* Hero Header for Macro Creators */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-950/70 via-slate-900 to-indigo-950/70 border border-purple-500/20 p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
              <Zap className="w-3.5 h-3.5 text-purple-400" />
              <span>Tailored for {activeProfile.name} ({activeProfile.nicheLabel})</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              Trend Radar & Opportunity Horizon
            </h1>
            <p className="text-sm text-slate-300 mt-2 leading-relaxed">
              Don't just chase viral trends when they are saturating. Discover high-velocity formats while they are in the <strong className="text-emerald-400">Emerging</strong> & <strong className="text-blue-400">Rising</strong> windows to dominate watch-time and establish category authority.
            </p>
          </div>

          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <span className="text-[11px] uppercase font-bold text-slate-400">Emerging Wave</span>
              <div className="text-xl font-extrabold text-emerald-400 font-mono mt-0.5">
                {counts.emerging} Trends
              </div>
              <span className="text-[10px] text-emerald-400/80">Prime Entry Window</span>
            </div>

            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800">
              <span className="text-[11px] uppercase font-bold text-slate-400">Active Peak</span>
              <div className="text-xl font-extrabold text-purple-400 font-mono mt-0.5">
                {counts.viral_peak} Trends
              </div>
              <span className="text-[10px] text-purple-400/80">High Production Needed</span>
            </div>

            <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 col-span-2 sm:col-span-1">
              <span className="text-[11px] uppercase font-bold text-slate-400">Fatigue Warning</span>
              <div className="text-xl font-extrabold text-amber-400 font-mono mt-0.5">
                {counts.saturating} Trends
              </div>
              <span className="text-[10px] text-amber-400/80">Contrarian Pivot Only</span>
            </div>
          </div>
        </div>
      </div>

      {/* Compare Floating Bar if 2+ selected */}
      {comparedTrendIds.length > 0 && (
        <div className="sticky top-20 z-30 p-3 rounded-xl bg-purple-950/90 border border-purple-500/50 shadow-xl flex items-center justify-between text-xs backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-400" />
            <span className="font-semibold text-white">
              {comparedTrendIds.length} trend{comparedTrendIds.length > 1 ? 's' : ''} selected for side-by-side ROI comparison
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCompareModal}
              className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:brightness-110 shadow-md"
            >
              Compare Trends Now
            </button>
          </div>
        </div>
      )}

      {/* Control Filters Toolbar */}
      <div className="space-y-4">
        {/* Search & Sort Row */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search trends by format, hashtag (#SpatialSound), audio title, or topic..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-purple-500/60 focus:ring-1 focus:ring-purple-500/60"
            />
          </div>

          {/* Quick Filters */}
          <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
            {/* Macro Fit Toggle */}
            <button
              onClick={() => setMacroFitOnly(!macroFitOnly)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                macroFitOnly
                  ? 'bg-purple-600/20 text-purple-300 border-purple-500/60'
                  : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:text-slate-200'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Macro-Worthy Only (85+)</span>
            </button>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 bg-slate-900/80 border border-slate-800 rounded-xl px-3 py-2 text-xs">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-400">Sort:</span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-transparent text-slate-200 font-semibold focus:outline-none cursor-pointer"
              >
                <option value="velocity" className="bg-slate-900">Highest Velocity</option>
                <option value="macroFit" className="bg-slate-900">Highest Macro Fit</option>
                <option value="saturation" className="bg-slate-900">Lowest Saturation</option>
                <option value="views" className="bg-slate-900">Virality Potential</option>
              </select>
            </div>
          </div>
        </div>

        {/* Lifecycle Stage Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-slate-400 font-bold uppercase tracking-wider text-[11px] mr-1 shrink-0">Stage:</span>
          
          <button
            onClick={() => setSelectedStage('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold shrink-0 transition-all ${
              selectedStage === 'all'
                ? 'bg-slate-200 text-slate-950 shadow'
                : 'bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            All Lifecycles ({counts.all})
          </button>

          <button
            onClick={() => setSelectedStage('emerging')}
            className={`px-3 py-1.5 rounded-lg font-semibold shrink-0 flex items-center gap-1.5 transition-all ${
              selectedStage === 'emerging'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow'
                : 'bg-slate-900/80 text-emerald-400/80 border border-slate-800 hover:text-emerald-300'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Emerging ({counts.emerging})
          </button>

          <button
            onClick={() => setSelectedStage('rising')}
            className={`px-3 py-1.5 rounded-lg font-semibold shrink-0 flex items-center gap-1.5 transition-all ${
              selectedStage === 'rising'
                ? 'bg-blue-500 text-slate-950 font-bold shadow'
                : 'bg-slate-900/80 text-blue-400/80 border border-slate-800 hover:text-blue-300'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            Rapidly Rising ({counts.rising})
          </button>

          <button
            onClick={() => setSelectedStage('viral_peak')}
            className={`px-3 py-1.5 rounded-lg font-semibold shrink-0 flex items-center gap-1.5 transition-all ${
              selectedStage === 'viral_peak'
                ? 'bg-purple-600 text-white font-bold shadow'
                : 'bg-slate-900/80 text-purple-400/80 border border-slate-800 hover:text-purple-300'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
            Viral Peak ({counts.viral_peak})
          </button>

          <button
            onClick={() => setSelectedStage('saturating')}
            className={`px-3 py-1.5 rounded-lg font-semibold shrink-0 flex items-center gap-1.5 transition-all ${
              selectedStage === 'saturating'
                ? 'bg-amber-500 text-slate-950 font-bold shadow'
                : 'bg-slate-900/80 text-amber-400/80 border border-slate-800 hover:text-amber-300'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            Saturating ({counts.saturating})
          </button>
        </div>
      </div>

      {/* Trend Cards Grid */}
      {filteredTrends.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800/80 p-8">
          <AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white">No trends match your active filters</h3>
          <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1">
            Try resetting your search query or enabling all lifecycle stages to see more opportunities.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedStage('all');
              setSelectedNiche('all');
              setMacroFitOnly(false);
            }}
            className="mt-4 px-4 py-2 rounded-xl text-xs font-semibold bg-purple-600 text-white hover:bg-purple-500 transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTrends.map(trend => (
            <TrendCard
              key={trend.id}
              trend={trend}
              onSelect={onSelectTrend}
              onForgeScript={onForgeScript}
              onToggleWatchlist={onToggleWatchlist}
              isWatchlisted={watchlist.includes(trend.id)}
              onToggleCompare={onToggleCompare}
              isCompared={comparedTrendIds.includes(trend.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
