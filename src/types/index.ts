export type LifecycleStage = 
  | 'emerging' 
  | 'rising' 
  | 'viral_peak' 
  | 'saturating' 
  | 'declining' 
  | 'dormant';

export type ContentNiche = 
  | 'all'
  | 'tech_ai' 
  | 'lifestyle_luxury' 
  | 'fitness_biohack' 
  | 'business_finance' 
  | 'comedy_culture' 
  | 'education_explainers';

export interface TimeSeriesPoint {
  date: string;
  volume: number; // Daily post volume in k
  velocity: number; // % day-over-day
  engagementRate: number; // %
  saturationIndex: number; // 0-100%
  macroAdoptionRate: number; // % of top creators who posted
}

export interface PlatformMetrics {
  reelsShare: number; // %
  tiktokShare: number;
  shortsShare: number;
  trendingAudio: string;
  avgWatchTimeSeconds: number;
  retentionFirst3s: number; // % retention at 3s
}

export interface MacroCreatorAnalysis {
  macroSuitabilityScore: number; // 0-100 (Is this trend worthy of a 500k+ creator's brand?)
  categoryAuthorityPotential: 'High' | 'Medium' | 'Low';
  riskOfAudienceFatigue: 'Low' | 'Moderate' | 'High' | 'Severe';
  recommendedWindowDays: string;
  idealProductionFormat: string;
  contrarianAngleAvailable: boolean;
  monetizationAffinity: string[];
}

export interface TrendItem {
  id: string;
  title: string;
  hashtag: string;
  category: ContentNiche;
  stage: LifecycleStage;
  velocityScore: number; // 0 - 100
  viralityPotential: number; // 0 - 100
  saturationScore: number; // 0 - 100
  firstDetected: string;
  peakPredictionDate: string;
  overview: string;
  whyItsTrending: string;
  keyVisualPattern: string;
  audioName: string;
  audioGrowthDelta: string;
  totalViewsEstimated: string;
  distinctCreatorsObserved: number;
  macroSuitability: MacroCreatorAnalysis;
  timeSeries: TimeSeriesPoint[];
  platformMetrics: PlatformMetrics;
  topCreatorsActive: {
    handle: string;
    followers: string;
    views: string;
    formatTwist: string;
  }[];
  macroAngles: {
    title: string;
    type: 'Contrarian' | 'Cinematic High-Production' | 'Explainer / Value' | 'Interactive Challenge';
    hook: string;
    storyOutline: string;
    expectedRetentionBoost: string;
  }[];
  brandSponsors: {
    category: string;
    estimatedValue: string;
    typicalSponsors: string[];
    pitchAngle: string;
  }[];
  isSaved?: boolean;
}

export interface MacroCreatorProfile {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  niche: ContentNiche;
  nicheLabel: string;
  primaryPlatform: 'Instagram Reels' | 'YouTube Shorts' | 'TikTok';
  totalReach: string;
  avgViewsPerReel: string;
  targetAudience: string;
  contentPillars: string[];
}

export interface GeneratedScript {
  id: string;
  trendId: string;
  trendTitle: string;
  angleType: string;
  targetDuration: string;
  estimatedHookRetention: string;
  hookOptions: {
    visualCue: string;
    spokenLine: string;
    onScreenText: string;
    psychologicalTrigger: string;
  }[];
  timeline: {
    timestamp: string;
    section: 'HOOK' | 'RE-HOOK & FRAME' | 'BUILD & PROOF' | 'CLIMAX / VALUE DROP' | 'ALGORITHMIC COMMENT ENGINE';
    visualDirection: string;
    spokenScript: string;
    soundFxMusic: string;
    directorTip: string;
  }[];
  commentBaitFormula: {
    promptQuestion: string;
    whyItWorks: string;
    pinnedCommentIdea: string;
  };
  audioRecommendation: {
    title: string;
    timingCue: string;
    tempoBpm: number;
  };
  thumbnailConcept: {
    facialExpression: string;
    overlayText: string;
    contrastColors: string;
  };
}

export interface ReelAnalysisResult {
  url: string;
  platform: 'Instagram Reels' | 'TikTok' | 'YouTube Shorts';
  scannedAt: string;
  detectedFormat: string;
  identifiedTrendMatch: string;
  trendMatchConfidence: number;
  lifecycleStage: LifecycleStage;
  hookAudit: {
    score: number; // /100
    first3SecondsRating: 'Elite (Top 2%)' | 'Strong' | 'Average' | 'Drop-off Risk';
    visualHookEffectiveness: number;
    audioPacingScore: number;
    curiosityGapStrength: number;
    verdict: string;
  };
  pacingAudit: {
    cutFrequency: string; // e.g. "Every 1.2s"
    energyCurve: string;
    audioSyncScore: number;
  };
  macroAudienceResonance: {
    verdict: string;
    fatigueRisk: 'Low' | 'Medium' | 'High' | 'Over-saturated';
    howMacroCreatorsShouldPivot: string;
  };
  contrarianTwistSuggestion: string;
}
