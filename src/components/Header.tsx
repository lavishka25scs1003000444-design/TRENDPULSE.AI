import React from 'react';
import { 
  Zap, 
  Flame, 
  Sparkles, 
  Bookmark, 
  DollarSign, 
  Layers, 
  Video, 
  Bell, 
  ChevronDown,
  TrendingUp,
  Share2
} from 'lucide-react';
import { MacroCreatorProfile } from '../types';

interface HeaderProps {
  currentTab: 'radar' | 'scanner' | 'studio' | 'sponsors' | 'watchlist';
  setCurrentTab: (tab: 'radar' | 'scanner' | 'studio' | 'sponsors' | 'watchlist') => void;
  profiles: MacroCreatorProfile[];
  activeProfile: MacroCreatorProfile;
  setActiveProfile: (profile: MacroCreatorProfile) => void;
  watchlistCount: number;
  onOpenQuickScan: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  profiles,
  activeProfile,
  setActiveProfile,
  watchlistCount,
  onOpenQuickScan
}) => {
  const [profileDropdownOpen, setProfileDropdownOpen] = React.useState(false);
  const [notificationsOpen, setNotificationsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#0c1222]/90 backdrop-blur-xl border-b border-slate-800/80">
      {/* Top Banner Alert Bar */}
      <div className="bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/60 border-b border-purple-500/20 px-4 py-1.5 text-xs flex items-center justify-between">
        <div className="flex items-center gap-2 overflow-hidden text-slate-300">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-semibold text-purple-300">LIVE TREND PULSE:</span>
          <span className="truncate">
            <strong className="text-white">#SpatialSoundHacks</strong> surged <span className="text-emerald-400 font-mono font-semibold">+412%</span> in velocity • <strong className="text-white">#StopDoingThis</strong> approaching peak adoption window
          </span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-slate-400 shrink-0">
          <span className="text-[11px] bg-purple-900/40 text-purple-300 px-2 py-0.5 rounded border border-purple-700/40 font-mono">
            Macro Creator Intelligence Engine v2.4
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 via-indigo-600 to-pink-500 p-0.5 shadow-lg shadow-purple-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Zap className="w-5 h-5 text-purple-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-tight text-lg text-white font-sans">
                  Trend<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Pulse</span>
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  MACRO
                </span>
              </div>
              <p className="text-[10px] text-slate-400 hidden sm:block">Engineered for 100K+ Reach Creators</p>
            </div>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setCurrentTab('radar')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentTab === 'radar'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Flame className="w-3.5 h-3.5" />
              Trend Radar
            </button>

            <button
              onClick={() => setCurrentTab('scanner')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentTab === 'scanner'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              Viral DNA Scanner
            </button>

            <button
              onClick={() => setCurrentTab('studio')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentTab === 'studio'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              AI Script Forge
            </button>

            <button
              onClick={() => setCurrentTab('sponsors')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                currentTab === 'sponsors'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <DollarSign className="w-3.5 h-3.5" />
              Sponsor Matrix
            </button>

            <button
              onClick={() => setCurrentTab('watchlist')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all relative ${
                currentTab === 'watchlist'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-600/20'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              Watchlist
              {watchlistCount > 0 && (
                <span className="w-4 h-4 rounded-full bg-pink-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {watchlistCount}
                </span>
              )}
            </button>
          </nav>

          {/* Right Controls: Creator Persona Switcher & Quick Scan */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuickScan}
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-purple-500/15 text-purple-300 hover:bg-purple-500/25 border border-purple-500/30 transition-all hover:scale-[1.02]"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>Paste Reel URL</span>
            </button>

            {/* Notifications Trigger */}
            <div className="relative">
              <button
                onClick={() => setNotificationsOpen(!notificationsOpen)}
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-slate-700 transition-all relative"
                title="Trend Velocity Alerts"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-pink-500"></span>
              </button>

              {notificationsOpen && (
                <div className="absolute right-0 mt-2 w-80 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl p-3 z-50 text-xs">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 mb-2">
                    <span className="font-bold text-white">Macro Trend Alerts</span>
                    <span className="text-[10px] text-purple-400 font-semibold">2 New Alerts</span>
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 rounded-lg bg-purple-950/40 border border-purple-800/40">
                      <p className="font-semibold text-purple-200">🚨 Saturation Risk Alert</p>
                      <p className="text-slate-300 text-[11px] mt-0.5">
                        <strong>#HyperlapseASMR</strong> reached 84% saturation. Audience fatigue detected. Pivot recommended.
                      </p>
                      <span className="text-[10px] text-slate-500 mt-1 block">15m ago</span>
                    </div>
                    <div className="p-2 rounded-lg bg-emerald-950/40 border border-emerald-800/40">
                      <p className="font-semibold text-emerald-200">🚀 Window of Opportunity</p>
                      <p className="text-slate-300 text-[11px] mt-0.5">
                        <strong>#SpatialSoundHacks</strong> has ideal early-mover advantage. 95% hook retention recorded.
                      </p>
                      <span className="text-[10px] text-slate-500 mt-1 block">1h ago</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-2.5 p-1.5 pr-2.5 rounded-xl bg-slate-900 hover:bg-slate-800/80 border border-slate-800 transition-all"
              >
                <img
                  src={activeProfile.avatar}
                  alt={activeProfile.name}
                  className="w-7 h-7 rounded-lg object-cover ring-1 ring-purple-500/40"
                />
                <div className="text-left hidden md:block">
                  <div className="text-xs font-bold text-slate-200 leading-tight">{activeProfile.name}</div>
                  <div className="text-[10px] text-purple-400 font-mono leading-tight">{activeProfile.totalReach}</div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 ml-0.5" />
              </button>

              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 rounded-xl bg-slate-900 border border-slate-800 shadow-2xl p-2 z-50">
                  <div className="px-3 py-2 border-b border-slate-800/80 mb-1">
                    <p className="text-[11px] uppercase tracking-wider text-slate-400 font-bold">Active Macro Persona</p>
                    <p className="text-xs text-slate-300 mt-0.5">Customizes virality formulas and sponsor matches to your specific audience size & niche</p>
                  </div>
                  <div className="space-y-1">
                    {profiles.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => {
                          setActiveProfile(p);
                          setProfileDropdownOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 p-2 rounded-lg text-left transition-all ${
                          p.id === activeProfile.id
                            ? 'bg-purple-900/30 border border-purple-500/40 text-white'
                            : 'hover:bg-slate-800 text-slate-300'
                        }`}
                      >
                        <img src={p.avatar} alt={p.name} className="w-8 h-8 rounded-lg object-cover" />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold truncate text-white">{p.name}</span>
                            <span className="text-[10px] text-purple-400 font-mono font-semibold">{p.totalReach}</span>
                          </div>
                          <p className="text-[11px] text-slate-400 truncate">{p.nicheLabel}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Sub-Navigation */}
        <div className="lg:hidden flex items-center justify-around py-2 border-t border-slate-800 text-xs overflow-x-auto gap-2">
          <button
            onClick={() => setCurrentTab('radar')}
            className={`px-3 py-1 rounded-md shrink-0 font-medium ${
              currentTab === 'radar' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400'
            }`}
          >
            Trend Radar
          </button>
          <button
            onClick={() => setCurrentTab('scanner')}
            className={`px-3 py-1 rounded-md shrink-0 font-medium ${
              currentTab === 'scanner' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400'
            }`}
          >
            Viral Scanner
          </button>
          <button
            onClick={() => setCurrentTab('studio')}
            className={`px-3 py-1 rounded-md shrink-0 font-medium ${
              currentTab === 'studio' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400'
            }`}
          >
            Script Forge
          </button>
          <button
            onClick={() => setCurrentTab('sponsors')}
            className={`px-3 py-1 rounded-md shrink-0 font-medium ${
              currentTab === 'sponsors' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400'
            }`}
          >
            Sponsors
          </button>
          <button
            onClick={() => setCurrentTab('watchlist')}
            className={`px-3 py-1 rounded-md shrink-0 font-medium ${
              currentTab === 'watchlist' ? 'bg-purple-600 text-white font-bold' : 'text-slate-400'
            }`}
          >
            Watchlist ({watchlistCount})
          </button>
        </div>
      </div>
    </header>
  );
};
