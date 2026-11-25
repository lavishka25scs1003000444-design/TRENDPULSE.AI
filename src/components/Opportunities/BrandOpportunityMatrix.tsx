import React, { useState } from 'react';
import { 
  DollarSign, 
  Sparkles, 
  Copy, 
  Check, 
  Send, 
  Mail, 
  TrendingUp, 
  Building2, 
  Briefcase,
  Zap,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';
import { TrendItem, MacroCreatorProfile } from '../../types';

interface BrandOpportunityMatrixProps {
  trends: TrendItem[];
  activeProfile: MacroCreatorProfile;
  onSelectTrend: (trend: TrendItem) => void;
  onForgeScript: (trend: TrendItem) => void;
}

export const BrandOpportunityMatrix: React.FC<BrandOpportunityMatrixProps> = ({
  trends,
  activeProfile,
  onSelectTrend,
  onForgeScript
}) => {
  const [selectedTrendId, setSelectedTrendId] = useState<string>(trends[0].id);
  const [copiedPitch, setCopiedPitch] = useState(false);

  const currentTrend = trends.find(t => t.id === selectedTrendId) || trends[0];

  const generatePitchEmail = (trend: TrendItem, profile: MacroCreatorProfile) => {
    return `Subject: Partnership Proposal: High-Retention Video Concept for [Brand Name] (${profile.handle})

Hi [Marketing Director / Partnerships Lead],

I've been tracking an explosive shift in viewer retention this week around ${trend.hashtag} (currently holding a 92%+ first 3-second retention rate across social feeds).

Rather than standard sponsored talking points that viewers skip, my production team is producing an elevated macro-tier video around: "${trend.title}".

Here is how we natively integrate [Brand Name]:
1. Position [Brand Name] as the definitive solution within the core demonstration [timestamp 0:18 - 0:32].
2. Direct native CTA to test the product with our audience of ${profile.totalReach} (${profile.avgViewsPerReel} avg views per Reel).
3. Whitelisting / ad-usage rights for your performance marketing team.

We are locking in our production schedule for this Friday. Would you like to review the storyboard and lock in category exclusivity for this concept?

Best regards,
${profile.name}
${profile.handle} | ${profile.primaryPlatform}
Media Kit: https://trendpulse.ai/mediakit/${profile.id}`;
  };

  const pitchEmailText = generatePitchEmail(currentTrend, activeProfile);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="rounded-2xl bg-gradient-to-r from-purple-950/60 via-slate-900 to-indigo-950/60 border border-purple-500/20 p-6 shadow-xl relative overflow-hidden">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold mb-3">
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            <span>Monetization & Sponsorship Intelligence</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Trend-to-Brand Deal Opportunity Matrix
          </h1>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            Macro creators don't just chase views—they turn viral format moments into five-figure brand deals. Here is which sponsor categories are investing in each trending format, estimated rate cards, and pre-written pitch emails.
          </p>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Trend Selection List */}
        <div className="lg:col-span-1 space-y-3">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1">
            Active Trends & Deal Affinity:
          </div>

          <div className="space-y-2">
            {trends.map(t => {
              const sponsor = t.brandSponsors[0];
              const isSelected = t.id === selectedTrendId;

              return (
                <div
                  key={t.id}
                  onClick={() => setSelectedTrendId(t.id)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-purple-950/40 border-purple-500/60 shadow-lg shadow-purple-900/20'
                      : 'bg-slate-900/70 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-xs font-bold text-white truncate max-w-[70%]">
                      {t.title}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                      {sponsor ? sponsor.estimatedValue.split('-')[0] + '+' : '$8K+'}
                    </span>
                  </div>

                  <p className="text-[11px] text-slate-400 truncate">
                    {sponsor ? sponsor.category : 'General Tech'}
                  </p>

                  <div className="flex items-center gap-1.5 mt-2 text-[10px] text-purple-300">
                    <Building2 className="w-3 h-3 text-purple-400 shrink-0" />
                    <span className="truncate">
                      {sponsor?.typicalSponsors.slice(0, 2).join(', ')}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Detailed Deal Breakdown & Pitch Generator */}
        <div className="lg:col-span-2 space-y-5">
          {currentTrend.brandSponsors.map((deal, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-wider">
                    {currentTrend.title}
                  </span>
                  <h3 className="text-lg font-extrabold text-white mt-0.5">
                    {deal.category}
                  </h3>
                </div>

                <div className="bg-emerald-950/50 p-3 rounded-xl border border-emerald-800/50 text-right">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Estimated Deal Range</div>
                  <div className="text-lg font-mono font-extrabold text-emerald-400">
                    {deal.estimatedValue}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono">Based on {activeProfile.totalReach}</div>
                </div>
              </div>

              {/* Target Brand Sponsors */}
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Active Brand Advertisers in this Format:
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  {deal.typicalSponsors.map((b, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold text-slate-200"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </div>

              {/* Native Brand Integration Angle */}
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-800/30 text-xs text-purple-200">
                <strong className="text-purple-300 block mb-1">💡 High-Retention Integration Blueprint:</strong>
                {deal.pitchAngle}
              </div>

              {/* Pre-Written Pitch Email */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-purple-400" />
                    Turnkey Brand Pitch Email
                  </span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(pitchEmailText);
                      setCopiedPitch(true);
                      setTimeout(() => setCopiedPitch(false), 2000);
                    }}
                    className="flex items-center gap-1 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    {copiedPitch ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 font-bold">Copied Pitch</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Pitch Email</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono whitespace-pre-wrap leading-relaxed max-h-72 overflow-y-auto">
                  {pitchEmailText}
                </pre>
              </div>

              {/* Direct Actions */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => onSelectTrend(currentTrend)}
                  className="text-xs text-purple-400 hover:text-purple-300 font-semibold flex items-center gap-1"
                >
                  <span>Inspect Trend Metrics</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onForgeScript(currentTrend)}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Forge Script for this Sponsor</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
