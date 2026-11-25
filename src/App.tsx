import React, { useState } from 'react';
import { Header } from './components/Header';
import { TrendRadar } from './components/Radar/TrendRadar';
import { ViralDNAScanner } from './components/Analyzer/ViralDNAScanner';
import { AIContentStudio } from './components/Studio/AIContentStudio';
import { BrandOpportunityMatrix } from './components/Opportunities/BrandOpportunityMatrix';
import { WatchlistManager } from './components/Watchlist/WatchlistManager';
import { TrendDeepDiveModal } from './components/DeepDive/TrendDeepDiveModal';
import { TrendComparisonModal } from './components/Comparison/TrendComparisonModal';
import { MOCK_TRENDS, MOCK_PROFILES } from './data/mockTrends';
import { TrendItem, MacroCreatorProfile } from './types';

export function App() {
  const [currentTab, setCurrentTab] = useState<'radar' | 'scanner' | 'studio' | 'sponsors' | 'watchlist'>('radar');
  const [profiles] = useState<MacroCreatorProfile[]>(MOCK_PROFILES);
  const [activeProfile, setActiveProfile] = useState<MacroCreatorProfile>(MOCK_PROFILES[0]);
  const [trends, setTrends] = useState<TrendItem[]>(MOCK_TRENDS);

  // Watchlist state
  const [watchlist, setWatchlist] = useState<string[]>(['trend-spatial-audio', 'trend-contrarian-stop']);

  // Modals & Selected items
  const [selectedDeepDiveTrend, setSelectedDeepDiveTrend] = useState<TrendItem | null>(null);
  const [studioTrend, setStudioTrend] = useState<TrendItem | null>(MOCK_TRENDS[0]);
  const [prefillTwist, setPrefillTwist] = useState<string | undefined>(undefined);

  // Compare trends state
  const [comparedTrendIds, setComparedTrendIds] = useState<string[]>([]);
  const [compareModalOpen, setCompareModalOpen] = useState(false);

  const toggleWatchlist = (trendId: string) => {
    setWatchlist(prev => 
      prev.includes(trendId) 
        ? prev.filter(id => id !== trendId) 
        : [...prev, trendId]
    );
  };

  const toggleCompare = (trendId: string) => {
    setComparedTrendIds(prev => {
      if (prev.includes(trendId)) {
        return prev.filter(id => id !== trendId);
      }
      if (prev.length >= 3) {
        alert('You can compare a maximum of 3 trends at a time.');
        return prev;
      }
      return [...prev, trendId];
    });
  };

  const handleForgeScript = (trend: TrendItem, twist?: string) => {
    setStudioTrend(trend);
    setPrefillTwist(twist);
    setCurrentTab('studio');
  };

  const handleForgeFromScan = (trend: TrendItem, twist: string) => {
    setStudioTrend(trend);
    setPrefillTwist(twist);
    setCurrentTab('studio');
  };

  return (
    <div className="min-h-screen bg-[#080d1a] text-slate-100 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Top Navigation & Profile Bar */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        profiles={profiles}
        activeProfile={activeProfile}
        setActiveProfile={setActiveProfile}
        watchlistCount={watchlist.length}
        onOpenQuickScan={() => setCurrentTab('scanner')}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {currentTab === 'radar' && (
          <TrendRadar
            trends={trends}
            activeProfile={activeProfile}
            onSelectTrend={(t) => setSelectedDeepDiveTrend(t)}
            onForgeScript={(t) => handleForgeScript(t)}
            watchlist={watchlist}
            onToggleWatchlist={toggleWatchlist}
            comparedTrendIds={comparedTrendIds}
            onToggleCompare={toggleCompare}
            onOpenCompareModal={() => setCompareModalOpen(true)}
          />
        )}

        {currentTab === 'scanner' && (
          <ViralDNAScanner
            onForgeScriptFromScan={handleForgeFromScan}
          />
        )}

        {currentTab === 'studio' && (
          <AIContentStudio
            trends={trends}
            selectedTrend={studioTrend}
            onSelectTrend={setStudioTrend}
            activeProfile={activeProfile}
            prefillTwist={prefillTwist}
          />
        )}

        {currentTab === 'sponsors' && (
          <BrandOpportunityMatrix
            trends={trends}
            activeProfile={activeProfile}
            onSelectTrend={(t) => setSelectedDeepDiveTrend(t)}
            onForgeScript={(t) => handleForgeScript(t)}
          />
        )}

        {currentTab === 'watchlist' && (
          <WatchlistManager
            watchlistIds={watchlist}
            trends={trends}
            onRemoveFromWatchlist={toggleWatchlist}
            onSelectTrend={(t) => setSelectedDeepDiveTrend(t)}
            onForgeScript={(t) => handleForgeScript(t)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-[#070b14] py-8 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-300">TrendPulse AI Studio</span>
            <span>•</span>
            <span>Algorithmic Trend Intelligence for Macro Content Creators</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span>Instagram Reels</span>
            <span>•</span>
            <span>YouTube Shorts</span>
            <span>•</span>
            <span>TikTok Trends</span>
          </div>
        </div>
      </footer>

      {/* Deep Dive Trend Modal */}
      {selectedDeepDiveTrend && (
        <TrendDeepDiveModal
          trend={selectedDeepDiveTrend}
          onClose={() => setSelectedDeepDiveTrend(null)}
          onForgeScript={(t) => handleForgeScript(t)}
          onToggleWatchlist={toggleWatchlist}
          isWatchlisted={watchlist.includes(selectedDeepDiveTrend.id)}
        />
      )}

      {/* Trend Comparison Modal */}
      {compareModalOpen && (
        <TrendComparisonModal
          trendIds={comparedTrendIds}
          allTrends={trends}
          onClose={() => setCompareModalOpen(false)}
          onSelectTrend={(t) => setSelectedDeepDiveTrend(t)}
          onForgeScript={(t) => handleForgeScript(t)}
        />
      )}
    </div>
  );
}

export default App;
