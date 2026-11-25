import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Copy, 
  Check, 
  Flame, 
  Clock, 
  Play, 
  Download, 
  RefreshCw, 
  MessageSquare, 
  Sliders, 
  Music2, 
  Film, 
  ChevronRight,
  Layers,
  Zap,
  Target
} from 'lucide-react';
import { TrendItem, GeneratedScript, MacroCreatorProfile } from '../../types';

interface AIContentStudioProps {
  trends: TrendItem[];
  selectedTrend: TrendItem | null;
  onSelectTrend: (trend: TrendItem) => void;
  activeProfile: MacroCreatorProfile;
  prefillTwist?: string;
}

export const AIContentStudio: React.FC<AIContentStudioProps> = ({
  trends,
  selectedTrend,
  onSelectTrend,
  activeProfile,
  prefillTwist
}) => {
  const currentTrend = selectedTrend || trends[0];

  const [angleType, setAngleType] = useState<string>('Contrarian Pattern Interrupt');
  const [duration, setDuration] = useState<'30s' | '45s' | '60s'>('45s');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  // Script State
  const [script, setScript] = useState<GeneratedScript | null>(null);

  const generateMacroScript = (trend: TrendItem, angle: string) => {
    setIsGenerating(true);

    setTimeout(() => {
      setIsGenerating(false);

      // Generate dynamic script tailored for macro creators
      setScript({
        id: `script-${Date.now()}`,
        trendId: trend.id,
        trendTitle: trend.title,
        angleType: angle,
        targetDuration: duration,
        estimatedHookRetention: '93.4% 3-Second Hold (Top 1% Tier)',
        hookOptions: [
          {
            visualCue: 'Look deadpan into lens while holding phone speaker right up to the camera microphone, then slap a studio IEM into your ear.',
            spokenLine: prefillTwist || `Put your headphones on right now. In 3 seconds, I will prove that 90% of creators hyping ${trend.hashtag} are deceiving you.`,
            onScreenText: 'PUT HEADPHONES ON (Trust me) 🎧',
            psychologicalTrigger: 'Urgency + Pattern Interrupt + Social Proof Challenge'
          },
          {
            visualCue: 'Sudden high-contrast zoom cut while displaying a highlighted waveform graph with red warning marks.',
            spokenLine: `Stop copying ${trend.hashtag} until you see this. Because there is a massive catch nobody with over 100K followers is talking about.`,
            onScreenText: 'STOP DOING THIS IN 2027 ⚠️',
            psychologicalTrigger: 'Fear of Looking Outdated + Insider Secrets'
          },
          {
            visualCue: 'Split screen comparing iPhone default output vs master studio reference monitor.',
            spokenLine: `I spent $4,000 recreating the viral ${trend.title} to find out if the algorithm actually rewards it or if it\'s pure placebo.`,
            onScreenText: 'I TESTED THE $4,000 VIRAL HACK 🧪',
            psychologicalTrigger: 'Extreme Curiosity + High-Budget Verification'
          }
        ],
        timeline: [
          {
            timestamp: '0:00 - 0:03',
            section: 'HOOK',
            visualDirection: 'Harsh frontal keylight, direct eye-contact dolly zoom. Zero hesitation.',
            spokenScript: prefillTwist || `Put your headphones on. Because in 3 seconds, you will hear why phone speakers destroy this entire trend.`,
            soundFxMusic: `${trend.audioName} starts at -12dB, sudden 100% volume bass drop on second 0:02.5.`,
            directorTip: 'Do NOT say "Hey guys". Frame 1 must slap the user out of zombie-scrolling.'
          },
          {
            timestamp: '0:03 - 0:12',
            section: 'RE-HOOK & FRAME',
            visualDirection: 'Cut to screen recording of the trend reaching 40M+ views, followed by your custom motion-tracked graphic exposing the flaw.',
            spokenScript: `Notice how everyone else is just repeating the same 5-second template? Here is what happens when you understand the acoustic physics behind it.`,
            soundFxMusic: 'Subtle high-tension ticking clock beneath ambient synth pad.',
            directorTip: 'Maintain high vocal energy. Do not drop pitch at sentence ends.'
          },
          {
            timestamp: '0:12 - 0:34',
            section: 'CLIMAX / VALUE DROP',
            visualDirection: 'Multi-cam punch cuts every 1.8 seconds. Show side-by-side comparative demo with real-time audio panning.',
            spokenScript: `When you pan the binaural frequency at 432Hz instead of standard stereo, the brain registers it as a real physical object moving behind you. Listen to this right here... [Demonstrate 3-second live sound move].`,
            soundFxMusic: 'Binaural sound sweeps completely from left ear to right ear in 8D audio.',
            directorTip: 'Deliver the actual value promise. Macro audiences demand real depth, not empty hype.'
          },
          {
            timestamp: '0:34 - 0:45',
            section: 'ALGORITHMIC COMMENT ENGINE',
            visualDirection: 'Zoom out to wide studio shot, hold up your hands with a genuine question expression.',
            spokenScript: `Be completely honest in the comments: did you hear the sound move behind your head, or is your audio driver flat? I am reading every reply.`,
            soundFxMusic: 'Beat fades into lingering harmonic reverb echo.',
            directorTip: 'This question creates binary debate (yes vs no) which generates 3,000+ comments within 2 hours.'
          }
        ],
        commentBaitFormula: {
          promptQuestion: 'Did the sound actually move behind your head or was it standard stereo? Drop your phone/headphone model below 👇',
          whyItWorks: 'Viewers feel compelled to test their hardware and compare with others, creating an explosive comment thread that signals top-tier engagement to Instagram/TikTok algorithms.',
          pinnedCommentIdea: '📌 PINNED: If you are using AirPods Pro, tell me if spatial audio was on or off! Pinning the best audio engineer breakdown below.'
        },
        audioRecommendation: {
          title: trend.audioName,
          timingCue: 'Drop the sub-bass at exactly second 0:02.8 for maximum dopamine lock',
          tempoBpm: 124
        },
        thumbnailConcept: {
          facialExpression: 'Intense skepticism / focused curiosity (eyebrows slightly raised)',
          overlayText: 'STOP DOING THIS ⚠️',
          contrastColors: 'Bright yellow text on deep obsidian vignette'
        }
      });
    }, 1200);
  };

  // Generate on mount or trend change
  useEffect(() => {
    generateMacroScript(currentTrend, angleType);
  }, [currentTrend.id, angleType, duration]);

  const copyToClipboard = (text: string, sectionId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSection(sectionId);
    setTimeout(() => setCopiedSection(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Studio Header */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/60 border border-purple-500/20 p-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Tailored for Macro Creator: {activeProfile.name}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              AI Macro Script & Hook Forge
            </h1>
            <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
              Standard AI script generators output generic filler that damages macro creator credibility. Our engine writes high-retention, timestamped scripts engineered for <strong className="text-purple-300">90%+ first 3-second hold</strong> and viral algorithmic comment triggers.
            </p>
          </div>

          {/* Quick Refresh */}
          <button
            onClick={() => generateMacroScript(currentTrend, angleType)}
            disabled={isGenerating}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 border border-purple-500/30 text-xs font-semibold transition-all shrink-0 hover:scale-[1.02]"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
            <span>Regenerate Fresh Angle</span>
          </button>
        </div>
      </div>

      {/* Control Panel: Trend Selector & Strategic Angle */}
      <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* 1. Trend Target */}
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Selected Trend Target:
          </label>
          <select
            value={currentTrend.id}
            onChange={(e) => {
              const found = trends.find(t => t.id === e.target.value);
              if (found) onSelectTrend(found);
            }}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-purple-500"
          >
            {trends.map(t => (
              <option key={t.id} value={t.id}>
                {t.title} ({t.stage.toUpperCase()})
              </option>
            ))}
          </select>
        </div>

        {/* 2. Angle Strategy */}
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Macro Strategic Angle:
          </label>
          <select
            value={angleType}
            onChange={(e) => setAngleType(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-purple-500"
          >
            <option value="Contrarian Pattern Interrupt">Contrarian Pattern Interrupt ("Why Everyone is Wrong")</option>
            <option value="Cinematic High-Production Masterclass">Cinematic High-Production Teardown ($$$ Production)</option>
            <option value="Interactive Challenge / Debate Engine">Interactive Challenge / Turing Test (Comment Bait)</option>
            <option value="Clinical Data / Biometric Verification">Clinical Data / Biometric Verification (Undeniable Proof)</option>
          </select>
        </div>

        {/* 3. Target Duration */}
        <div>
          <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
            Target Video Length:
          </label>
          <div className="grid grid-cols-3 gap-2">
            {(['30s', '45s', '60s'] as const).map(d => (
              <button
                key={d}
                onClick={() => setDuration(d)}
                className={`py-2 rounded-xl text-xs font-bold border transition-colors ${
                  duration === d
                    ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Script Loading Animation */}
      {isGenerating && (
        <div className="p-12 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-3">
          <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center mx-auto text-purple-400">
            <Sparkles className="w-6 h-6 animate-spin" />
          </div>
          <h3 className="text-sm font-bold text-white">Synthesizing Macro Retention Vectors...</h3>
          <p className="text-xs text-slate-400 font-mono">Calibrating cut timestamps, auditory cues, and comment engine for {duration} runtime.</p>
        </div>
      )}

      {/* Generated Script Content */}
      {!isGenerating && script && (
        <div className="space-y-6 animate-fade-in">
          {/* Hook Variant Selector */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                  <Flame className="w-4 h-4 text-pink-400" />
                  <span>3-Second Hook Arsenal (Select Your Opening)</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Macro creator retention hinges on the first 90 frames. Choose the hook vector that matches your tone:
                </p>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-lg border border-emerald-800/60">
                {script.estimatedHookRetention}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {script.hookOptions.map((h, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 hover:border-purple-500/50 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold text-purple-400 font-mono">VARIANT 0{idx + 1}</span>
                      <span className="text-[10px] font-semibold text-slate-400">{h.psychologicalTrigger}</span>
                    </div>
                    <div className="text-xs font-mono text-purple-200 bg-purple-950/40 p-1.5 rounded border border-purple-800/40">
                      <strong>Text on Screen:</strong> {h.onScreenText}
                    </div>
                    <p className="text-xs text-white font-medium italic">
                      "{h.spokenLine}"
                    </p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      <strong>Visual Cue:</strong> {h.visualCue}
                    </p>
                  </div>

                  <button
                    onClick={() => copyToClipboard(h.spokenLine, `hook-${idx}`)}
                    className="mt-3 w-full py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-[11px] font-semibold border border-slate-800 flex items-center justify-center gap-1.5 transition-colors"
                  >
                    {copiedSection === `hook-${idx}` ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Hook</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Timestamped Production Script Breakdown */}
          <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-extrabold text-white flex items-center gap-2">
                  <Film className="w-4 h-4 text-purple-400" />
                  <span>Timestamped Video Production Blueprint ({script.targetDuration})</span>
                </h3>
                <p className="text-xs text-slate-400">
                  Exact cut cadence and audio synchronizations to prevent mid-video retention decay.
                </p>
              </div>

              <button
                onClick={() => {
                  const fullText = script.timeline.map(t => `[${t.timestamp}] ${t.section}\nVisual: ${t.visualDirection}\nSpoken: "${t.spokenScript}"\nAudio: ${t.soundFxMusic}\nTip: ${t.directorTip}\n`).join('\n---\n');
                  copyToClipboard(fullText, 'full-script');
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700"
              >
                {copiedSection === 'full-script' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 font-bold">Full Script Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Full Script</span>
                  </>
                )}
              </button>
            </div>

            <div className="space-y-3">
              {script.timeline.map((step, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 hover:border-slate-700 transition-colors space-y-2.5"
                >
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-purple-900/40 text-purple-300 border border-purple-700/50">
                        {step.timestamp}
                      </span>
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        {step.section}
                      </span>
                    </div>

                    <button
                      onClick={() => copyToClipboard(step.spokenScript, `step-${idx}`)}
                      className="text-slate-400 hover:text-white p-1"
                      title="Copy spoken line"
                    >
                      {copiedSection === `step-${idx}` ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  {/* Script Spoken */}
                  <div className="p-2.5 rounded-lg bg-purple-950/20 border border-purple-800/30 text-xs text-purple-100 font-medium">
                    <strong className="text-purple-300">Spoken Line:</strong> "{step.spokenScript}"
                  </div>

                  {/* Visual & Sound Direction Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px]">
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                      <strong className="text-indigo-300 block mb-0.5">🎬 Visual & Camera:</strong>
                      {step.visualDirection}
                    </div>

                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
                      <strong className="text-pink-300 block mb-0.5">🎵 Audio & Foley:</strong>
                      {step.soundFxMusic}
                    </div>
                  </div>

                  {/* Director Tip */}
                  <div className="text-[10px] text-slate-400 italic flex items-center gap-1.5 pt-1">
                    <Zap className="w-3 h-3 text-amber-400 shrink-0" />
                    <span><strong>Retention Cue:</strong> {step.directorTip}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comment Bait & Algorithmic Growth Engine */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Algorithmic Comment Engine */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/50 to-slate-900 border border-indigo-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-indigo-300 tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-4 h-4 text-indigo-400" />
                  Algorithmic Comment Multiplier
                </span>
                <span className="text-[10px] font-mono text-emerald-400 font-bold bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800/40">
                  +4.2x Distribution
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-indigo-900/50 text-xs text-white space-y-1">
                <span className="text-[10px] font-bold text-indigo-400 uppercase">Closing CTA Question:</span>
                <p className="font-semibold italic">"{script.commentBaitFormula.promptQuestion}"</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-indigo-900/50 text-xs text-slate-300 space-y-1">
                <span className="text-[10px] font-bold text-purple-400 uppercase">Pinned First Comment:</span>
                <p className="text-[11px] font-mono">{script.commentBaitFormula.pinnedCommentIdea}</p>
              </div>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                <strong>Why this triggers algorithmic velocity:</strong> {script.commentBaitFormula.whyItWorks}
              </p>
            </div>

            {/* Thumbnail & Packaging Concept */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/50 to-slate-900 border border-purple-500/30 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase text-purple-300 tracking-wider flex items-center gap-1.5">
                  <Target className="w-4 h-4 text-purple-400" />
                  Reel Cover / Thumbnail Packaging
                </span>
                <span className="text-[10px] font-mono text-purple-300 bg-purple-950 px-2 py-0.5 rounded border border-purple-800/40">
                  Grid Optimization
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-purple-900/50 space-y-2 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Bold Text Overlay:</span>
                  <span className="text-base font-extrabold text-amber-300 font-mono tracking-tight">
                    {script.thumbnailConcept.overlayText}
                  </span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Facial Expression:</span>
                  <span className="text-slate-200 text-xs">{script.thumbnailConcept.facialExpression}</span>
                </div>

                <div>
                  <span className="text-slate-400 block text-[10px] uppercase font-bold">Color Contrast:</span>
                  <span className="text-slate-200 text-xs">{script.thumbnailConcept.contrastColors}</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-purple-950/30 border border-purple-800/40 text-[11px] text-purple-200">
                <strong>Audio BPM Sync:</strong> Set audio to <strong>{script.audioRecommendation.tempoBpm} BPM</strong>. {script.audioRecommendation.timingCue}.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
