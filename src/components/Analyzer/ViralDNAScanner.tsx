import React, { useState } from 'react';
import { 
  Video, 
  Search, 
  Zap, 
  Sparkles, 
  AlertTriangle, 
  CheckCircle2, 
  Flame, 
  Music2, 
  Clock, 
  Play, 
  Layers, 
  ArrowRight,
  ShieldAlert,
  Compass,
  TrendingUp,
  Cpu
} from 'lucide-react';
import { ReelAnalysisResult, TrendItem } from '../../types';
import { MOCK_SAMPLE_URLS, MOCK_TRENDS } from '../../data/mockTrends';

interface ViralDNAScannerProps {
  onForgeScriptFromScan: (trend: TrendItem, twist: string) => void;
}

export const ViralDNAScanner: React.FC<ViralDNAScannerProps> = ({
  onForgeScriptFromScan
}) => {
  const [reelUrl, setReelUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [analysisResult, setAnalysisResult] = useState<ReelAnalysisResult | null>(null);
  const [matchedTrend, setMatchedTrend] = useState<TrendItem | null>(null);

  const scanSteps = [
    'Deconstructing audio track & matching acoustic fingerprint...',
    'Analyzing visual cuts, motion pacing, and 3-second hook vectors...',
    'Cross-referencing 420,000+ social posts to map lifecycle curve...',
    'Synthesizing macro creator retention formulas & contrarian gaps...'
  ];

  const handleStartScan = (urlToScan?: string) => {
    const target = urlToScan || reelUrl;
    if (!target.trim()) return;

    setIsScanning(true);
    setAnalysisResult(null);
    setMatchedTrend(null);
    setScanStep(0);

    const stepInterval = setInterval(() => {
      setScanStep((prev) => {
        if (prev < scanSteps.length - 1) {
          return prev + 1;
        } else {
          clearInterval(stepInterval);
          return prev;
        }
      });
    }, 600);

    // Complete scan after 2.6s
    setTimeout(() => {
      clearInterval(stepInterval);
      setIsScanning(false);

      // Determine mock result based on url or random
      const isSpatial = target.toLowerCase().includes('spatial') || target.includes('C8x9');
      const isStop = target.toLowerCase().includes('stop') || target.includes('DF99');

      let selectedTrend = MOCK_TRENDS[0]; // Spatial
      if (isStop) selectedTrend = MOCK_TRENDS[1];
      else if (!isSpatial) selectedTrend = MOCK_TRENDS[2]; // Biohack

      setMatchedTrend(selectedTrend);

      setAnalysisResult({
        url: target,
        platform: 'Instagram Reels',
        scannedAt: 'Just now',
        detectedFormat: selectedTrend.keyVisualPattern,
        identifiedTrendMatch: selectedTrend.title,
        trendMatchConfidence: 96,
        lifecycleStage: selectedTrend.stage,
        hookAudit: {
          score: selectedTrend.velocityScore > 90 ? 94 : 86,
          first3SecondsRating: 'Elite (Top 2%)',
          visualHookEffectiveness: 92,
          audioPacingScore: 96,
          curiosityGapStrength: 95,
          verdict: 'Immediate pattern-interrupt in frame 1 prevents thumb scrolling. Auditory prompt creates intense curiosity loop.'
        },
        pacingAudit: {
          cutFrequency: '1.4s average cut interval',
          energyCurve: 'High initial spike, sustained harmonic tension',
          audioSyncScore: 98
        },
        macroAudienceResonance: {
          verdict: selectedTrend.macroSuitability.categoryAuthorityPotential === 'High'
            ? 'High credibility upside. Perfect format for establishing category authority.'
            : 'Moderate upside. Requires elevated cinematic production to prevent copycat accusations.',
          fatigueRisk: selectedTrend.macroSuitability.riskOfAudienceFatigue as any,
          howMacroCreatorsShouldPivot: selectedTrend.macroAngles[0]?.storyOutline || 'Focus on high-budget cinematography and authentic teardown.'
        },
        contrarianTwistSuggestion: selectedTrend.macroAngles[1]?.hook || selectedTrend.macroAngles[0]?.hook || 'Flip the premise on its head to surprise existing followers.'
      });
    }, 2600);
  };

  return (
    <div className="space-y-6">
      {/* Scanner Header */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/60 border border-purple-500/20 p-6 shadow-xl relative overflow-hidden">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
            <Cpu className="w-3.5 h-3.5 text-purple-400" />
            <span>Multimodal Content Understanding Engine</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Viral DNA & Reel Retention Scanner
          </h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Paste any Instagram Reel, TikTok, or YouTube Shorts link to dissect why it is holding attention. Our AI extracts its auditory hook, visual cut cadence, lifecycle stage, and reveals how a macro creator can hijack the format without looking late.
          </p>
        </div>

        {/* Input Bar */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Video className="w-4 h-4 text-purple-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={reelUrl}
              onChange={(e) => setReelUrl(e.target.value)}
              placeholder="Paste Instagram Reel or TikTok URL (e.g. https://www.instagram.com/reel/C8x9Y21kLpQ)"
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-950/90 border border-slate-700/80 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              onKeyDown={(e) => {
                if (e.key === 'Enter') handleStartScan();
              }}
            />
          </div>
          <button
            onClick={() => handleStartScan()}
            disabled={isScanning || !reelUrl.trim()}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 disabled:opacity-50 text-white font-bold text-sm shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all shrink-0 hover:scale-[1.02]"
          >
            {isScanning ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Deconstructing Reel...</span>
              </>
            ) : (
              <>
                <Zap className="w-4 h-4" />
                <span>Dissect Viral DNA</span>
              </>
            )}
          </button>
        </div>

        {/* Preset Sample URLs for Quick Testing */}
        <div className="mt-3 flex items-center gap-2 flex-wrap text-xs">
          <span className="text-slate-400 font-semibold">Or try sample macro reels:</span>
          {MOCK_SAMPLE_URLS.map((sample, idx) => (
            <button
              key={idx}
              onClick={() => {
                setReelUrl(sample.url);
                handleStartScan(sample.url);
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-colors flex items-center gap-1.5"
            >
              <Play className="w-2.5 h-2.5 text-purple-400 fill-purple-400" />
              <span>{sample.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Loading Scanning Screen */}
      {isScanning && (
        <div className="p-8 rounded-2xl bg-slate-900/80 border border-slate-800 text-center space-y-4 animate-pulse">
          <div className="w-16 h-16 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center mx-auto text-purple-400">
            <Cpu className="w-8 h-8 animate-spin" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Analyzing Reel Architecture</h3>
            <p className="text-xs text-purple-300 mt-1 font-mono">
              {scanSteps[scanStep]}
            </p>
          </div>
          <div className="max-w-md mx-auto w-full bg-slate-800 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full transition-all duration-500 rounded-full"
              style={{ width: `${((scanStep + 1) / scanSteps.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Scan Results Display */}
      {analysisResult && matchedTrend && (
        <div className="space-y-5 animate-fade-in">
          {/* Top Banner: Identified Trend */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950/40 via-slate-900 to-slate-900 border border-purple-500/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  {analysisResult.trendMatchConfidence}% Match Confidence
                </span>
                <span className="text-xs text-slate-400 font-mono">
                  Format: {analysisResult.detectedFormat}
                </span>
              </div>
              <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
                <span>Matched Trend: {analysisResult.identifiedTrendMatch}</span>
              </h2>
              <p className="text-xs text-slate-300 mt-1 max-w-xl">
                {matchedTrend.overview}
              </p>
            </div>

            <button
              onClick={() => onForgeScriptFromScan(matchedTrend, analysisResult.contrarianTwistSuggestion)}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-xs shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>Forge Macro Script with this Twist</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Audit Grid: Hook Score & Pacing */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 1. First 3-Seconds Hook Audit */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-purple-400 tracking-wider">
                  🎣 3-Sec Hook Audit
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-purple-500/20 text-purple-300">
                  {analysisResult.hookAudit.first3SecondsRating}
                </span>
              </div>

              <div className="text-3xl font-extrabold text-white font-mono">
                {analysisResult.hookAudit.score}<span className="text-sm text-slate-400 font-normal">/100</span>
              </div>

              <div className="space-y-2 text-xs pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">Visual Pattern Interrupt:</span>
                  <span className="font-mono text-purple-300 font-bold">{analysisResult.hookAudit.visualHookEffectiveness}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Auditory Hook Velocity:</span>
                  <span className="font-mono text-emerald-400 font-bold">{analysisResult.hookAudit.audioPacingScore}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Curiosity Gap Index:</span>
                  <span className="font-mono text-indigo-400 font-bold">{analysisResult.hookAudit.curiosityGapStrength}%</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-300 bg-slate-950 p-2.5 rounded-lg border border-slate-800/80">
                {analysisResult.hookAudit.verdict}
              </p>
            </div>

            {/* 2. Pacing & Cut Velocity */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-indigo-400 tracking-wider">
                  ⚡ Dopamine Pacing
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono text-indigo-300 bg-indigo-950/80 border border-indigo-800/50">
                  {analysisResult.pacingAudit.cutFrequency}
                </span>
              </div>

              <div className="text-sm font-bold text-white">
                Energy Cadence: <span className="text-slate-300 font-normal">{analysisResult.pacingAudit.energyCurve}</span>
              </div>

              <div className="space-y-2 text-xs pt-2 border-t border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">Audio-Visual Beat Sync:</span>
                  <span className="font-mono text-emerald-400 font-bold">{analysisResult.pacingAudit.audioSyncScore}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Loopability Factor:</span>
                  <span className="font-mono text-purple-300 font-bold">92% High Replay</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-800/40 text-[11px] text-indigo-200">
                <strong>Pacing Secret:</strong> Cuts occur precisely on the drum snare, keeping brain stimulation active before visual fatigue sets in.
              </div>
            </div>

            {/* 3. Fatigue & Saturation Warning */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-amber-400 tracking-wider">
                  ⚠️ Fatigue & Risk Audit
                </span>
                <span className={`px-2 py-0.5 rounded text-[11px] font-bold ${
                  analysisResult.macroAudienceResonance.fatigueRisk === 'Low'
                    ? 'bg-emerald-500/20 text-emerald-300'
                    : 'bg-amber-500/20 text-amber-300'
                }`}>
                  {analysisResult.macroAudienceResonance.fatigueRisk} Fatigue Risk
                </span>
              </div>

              <div className="text-xs text-slate-300 leading-relaxed">
                {analysisResult.macroAudienceResonance.verdict}
              </div>

              <div className="pt-2 border-t border-slate-800 text-xs">
                <span className="text-slate-400 font-bold block mb-1">Macro Creator Verdict:</span>
                <p className="text-[11px] text-slate-300 bg-slate-950 p-2 rounded-lg border border-slate-800/80">
                  {analysisResult.macroAudienceResonance.howMacroCreatorsShouldPivot}
                </p>
              </div>
            </div>
          </div>

          {/* The Macro Twist Recommendation Banner */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-900/30 via-slate-900 to-indigo-900/30 border border-purple-500/40">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-purple-600/30 text-purple-300 border border-purple-500/40 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-extrabold text-white">
                  Recommended Macro Twist: The Contrarian Pattern Interrupt
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Instead of copying the Reel verbatim (which devalues your brand as a follower rather than a leader), open with:
                </p>
                <div className="mt-2 p-3 rounded-xl bg-slate-950/90 border border-purple-500/30 text-purple-200 text-xs font-mono italic">
                  "{analysisResult.contrarianTwistSuggestion}"
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
