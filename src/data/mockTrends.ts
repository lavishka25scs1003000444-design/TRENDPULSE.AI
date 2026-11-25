import { TrendItem, MacroCreatorProfile } from '../types';

export const MOCK_PROFILES: MacroCreatorProfile[] = [
  {
    id: 'creator-alex',
    name: 'Alex Rivera',
    handle: '@alexrivera.tech',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
    niche: 'tech_ai',
    nicheLabel: 'Tech & Future Culture',
    primaryPlatform: 'Instagram Reels',
    totalReach: '1.45M Followers',
    avgViewsPerReel: '420K - 1.2M',
    targetAudience: 'Early adopters, tech enthusiasts, founders, 20-35 age bracket',
    contentPillars: ['AI Product Teardowns', 'Future Hardware', 'Creator Tech Setups', 'Hot Takes']
  },
  {
    id: 'creator-maya',
    name: 'Maya Chen',
    handle: '@mayachen.studio',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80',
    niche: 'lifestyle_luxury',
    nicheLabel: 'Luxury & Modern Aesthetic',
    primaryPlatform: 'Instagram Reels',
    totalReach: '890K Followers',
    avgViewsPerReel: '310K - 850K',
    targetAudience: 'High-income millennials, fashion & design conscious, aesthetic curators',
    contentPillars: ['Quiet Luxury', 'Architectural Living', 'Capsule Wardrobe', 'Paris/Tokyo Vlogs']
  },
  {
    id: 'creator-marcus',
    name: 'Dr. Marcus Vance',
    handle: '@marcusvance.bio',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80',
    niche: 'fitness_biohack',
    nicheLabel: 'Biohacking & Performance',
    primaryPlatform: 'YouTube Shorts',
    totalReach: '1.12M Followers',
    avgViewsPerReel: '550K - 1.8M',
    targetAudience: 'High-performance professionals, fitness athletes, longevity researchers',
    contentPillars: ['Sleep Architecture', 'Dopamine Fasting Protocols', 'Longevity Science', 'Routine Teardowns']
  },
  {
    id: 'creator-elena',
    name: 'Elena Rostova',
    handle: '@elena.capital',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
    niche: 'business_finance',
    nicheLabel: 'Venture & High Finance',
    primaryPlatform: 'Instagram Reels',
    totalReach: '670K Followers',
    avgViewsPerReel: '280K - 920K',
    targetAudience: 'Angel investors, tech operators, aspiring founders, Gen-Z wealth builders',
    contentPillars: ['Billion Dollar Teardowns', 'Hidden Market Arbitrage', 'Negotiation Tactics']
  }
];

export const MOCK_TRENDS: TrendItem[] = [
  {
    id: 'trend-spatial-audio',
    title: 'Cinematic 3D Spatial Audio Reveal',
    hashtag: '#SpatialSoundHacks',
    category: 'tech_ai',
    stage: 'emerging',
    velocityScore: 94,
    viralityPotential: 96,
    saturationScore: 22,
    firstDetected: '3 days ago',
    peakPredictionDate: 'Est. Peak in 9-12 days',
    overview: 'Creators use binaural spatial audio panning where sound physically moves from left to right ear, pausing the video at 0:02 to tell viewers: "Put on headphones or this won\'t make sense". Instant 95%+ first 3-second retention.',
    whyItsTrending: 'Forces active auditory engagement. The algorithmic watch-time is exceptionally high because viewers either restart the clip to plug in headphones or replay it 3 times to experience the binaural immersion.',
    keyVisualPattern: 'Split frame / dark backdrop with oscillating soundwave graphic at the bottom, sudden zoom cut on sound impact.',
    audioName: 'Cyberpunk Binaural Sub-Bass Drop (432Hz Master)',
    audioGrowthDelta: '+412% daily uses',
    totalViewsEstimated: '14.2M',
    distinctCreatorsObserved: 340,
    macroSuitability: {
      macroSuitabilityScore: 96,
      categoryAuthorityPotential: 'High',
      riskOfAudienceFatigue: 'Low',
      recommendedWindowDays: 'Next 5-7 days (Ideal macro entry)',
      idealProductionFormat: 'Studio mic + 4K cinematic lighting, high-contrast headphone CTA',
      contrarianAngleAvailable: true,
      monetizationAffinity: ['Headphone Brands (Sony/Bose)', 'Noise-Canceling Tech', 'Mastering DAWs', 'Audio Subscriptions']
    },
    timeSeries: [
      { date: 'Nov 18', volume: 1.2, velocity: 15, engagementRate: 4.8, saturationIndex: 5, macroAdoptionRate: 2 },
      { date: 'Nov 20', volume: 3.5, velocity: 45, engagementRate: 6.2, saturationIndex: 9, macroAdoptionRate: 5 },
      { date: 'Nov 22', volume: 8.9, velocity: 78, engagementRate: 8.4, saturationIndex: 14, macroAdoptionRate: 11 },
      { date: 'Nov 24', volume: 17.4, velocity: 94, engagementRate: 9.8, saturationIndex: 22, macroAdoptionRate: 18 },
      { date: 'Nov 25', volume: 29.8, velocity: 110, engagementRate: 10.5, saturationIndex: 28, macroAdoptionRate: 26 },
    ],
    platformMetrics: {
      reelsShare: 45,
      tiktokShare: 38,
      shortsShare: 17,
      trendingAudio: 'Binaural Drift v3 (Original Sound)',
      avgWatchTimeSeconds: 26.4,
      retentionFirst3s: 91.2
    },
    topCreatorsActive: [
      { handle: '@mkbhd_fanatic', followers: '840K', views: '2.8M', formatTwist: 'Revealed secret Apple Spatial Audio easter egg' },
      { handle: '@audioforge.pro', followers: '320K', views: '1.4M', formatTwist: 'Blind testing $30 vs $4000 microphone binaural fidelity' }
    ],
    macroAngles: [
      {
        title: 'The High-Production Tech Teardown',
        type: 'Cinematic High-Production',
        hook: 'Put your headphones on right now. Because in 3 seconds, I will prove your phone speakers are lying to you.',
        storyOutline: 'Pan binaural sound left to right while demonstrating why current AI voice generation sounds synthetic on phone speakers but eerily human on Studio IEMs.',
        expectedRetentionBoost: '+44% over account median'
      },
      {
        title: 'Contrarian: Why Spatial Audio is a Marketing Gimmick',
        type: 'Contrarian',
        hook: 'Every tech creator is hyping spatial audio this week. Let me show you why 90% of it is fake software reverb.',
        storyOutline: 'Expose the DSP frequency curve and show viewers how simple stereo widening creates a placebo effect. Macro creators gain massive respect through truth-telling.',
        expectedRetentionBoost: '+62% comment debate volume'
      }
    ],
    brandSponsors: [
      {
        category: 'Audio Hardware & Studio Tech',
        estimatedValue: '$8,500 - $14,000 per Reel',
        typicalSponsors: ['Sony Audio', 'Sennheiser', 'Shure', 'Nothing Ear'],
        pitchAngle: 'Demonstrate active noise cancellation and spatial soundstage with native binaural demonstration.'
      }
    ]
  },
  {
    id: 'trend-contrarian-stop',
    title: 'The "Stop Doing [X]" Pattern Interrupt',
    hashtag: '#StopDoingThis',
    category: 'business_finance',
    stage: 'rising',
    velocityScore: 89,
    viralityPotential: 92,
    saturationScore: 39,
    firstDetected: '6 days ago',
    peakPredictionDate: 'Est. Peak in 5-8 days',
    overview: 'Creator walks directly toward camera with an urgent, deadpan expression, slap-cutting immediately to a visual chart or screenshot while declaring: "Stop doing [popular industry practice] in 2027. It is quietly killing your results."',
    whyItsTrending: 'Direct challenge to accepted wisdom triggers high emotional friction. Comment sections explode with defensive practitioners debating the stance.',
    keyVisualPattern: 'Dynamic forward dolly camera push, hard cut to an annotated document/dashboard with neon red highlighter.',
    audioName: 'Intense Hans Zimmer Style Rising Suspense Cello',
    audioGrowthDelta: '+285% weekly uses',
    totalViewsEstimated: '38.6M',
    distinctCreatorsObserved: 1120,
    macroSuitability: {
      macroSuitabilityScore: 92,
      categoryAuthorityPotential: 'High',
      riskOfAudienceFatigue: 'Moderate',
      recommendedWindowDays: 'Next 3-5 days',
      idealProductionFormat: 'Studio desk setup with multi-cam punch-in and teleprompter precision',
      contrarianAngleAvailable: true,
      monetizationAffinity: ['Fintech platforms', 'B2B SaaS', 'Productivity tools', 'Trading brokers']
    },
    timeSeries: [
      { date: 'Nov 16', volume: 4.1, velocity: 22, engagementRate: 5.1, saturationIndex: 12, macroAdoptionRate: 8 },
      { date: 'Nov 19', volume: 12.8, velocity: 58, engagementRate: 7.4, saturationIndex: 21, macroAdoptionRate: 19 },
      { date: 'Nov 22', volume: 31.4, velocity: 84, engagementRate: 9.1, saturationIndex: 32, macroAdoptionRate: 36 },
      { date: 'Nov 25', volume: 54.2, velocity: 92, engagementRate: 8.8, saturationIndex: 39, macroAdoptionRate: 48 },
    ],
    platformMetrics: {
      reelsShare: 52,
      tiktokShare: 31,
      shortsShare: 17,
      trendingAudio: 'Dark Cinematic Tension - Interstellar Motif',
      avgWatchTimeSeconds: 32.1,
      retentionFirst3s: 88.5
    },
    topCreatorsActive: [
      { handle: '@codaborowitz', followers: '1.2M', views: '4.5M', formatTwist: 'Stop saving in High Yield Savings Accounts' },
      { handle: '@founderclarity', followers: '490K', views: '1.9M', formatTwist: 'Stop hiring junior developers for AI wrappers' }
    ],
    macroAngles: [
      {
        title: 'The Elite Wealth Arbitrage Angle',
        type: 'Contrarian',
        hook: 'Stop buying index funds if your portfolio is under $100K. Here is the math Wall Street influencers won\'t show you.',
        storyOutline: 'Break down opportunity cost vs asymmetric leverage with custom motion graphics. End with a balanced disclaimer to preserve credibility.',
        expectedRetentionBoost: '+51% saves & shares'
      }
    ],
    brandSponsors: [
      {
        category: 'Wealth Management & Fintech',
        estimatedValue: '$12,000 - $20,000 per Reel',
        typicalSponsors: ['Interactive Brokers', 'Mercury', 'Ramp', 'Public.com'],
        pitchAngle: 'Position the sponsor as the modern alternative to the outdated industry practice being dismantled.'
      }
    ]
  },
  {
    id: 'trend-micro-habit-teardown',
    title: 'The 1% Micro-Habit Biometric Teardown',
    hashtag: '#BiometricTeardown',
    category: 'fitness_biohack',
    stage: 'rising',
    velocityScore: 86,
    viralityPotential: 88,
    saturationScore: 31,
    firstDetected: '5 days ago',
    peakPredictionDate: 'Est. Peak in 7-10 days',
    overview: 'Creators show raw Oura Ring / Whoop / Apple Health data before and after testing one obscure daily tweak (e.g., mouth taping, cold plunge timing, 10-minute morning light) for 30 consecutive days.',
    whyItsTrending: 'Audiences are cynical about vague fitness advice. Hard clinical data + screen recordings of biometric apps provide instant mathematical validation.',
    keyVisualPattern: 'Side-by-side comparison of deep sleep score graphs, rapid zoom into heart-rate variability (HRV) metrics.',
    audioName: 'Minimal Ambient Lo-Fi House Beat (Subtle Kick)',
    audioGrowthDelta: '+190% weekly uses',
    totalViewsEstimated: '24.1M',
    distinctCreatorsObserved: 640,
    macroSuitability: {
      macroSuitabilityScore: 94,
      categoryAuthorityPotential: 'High',
      riskOfAudienceFatigue: 'Low',
      recommendedWindowDays: 'Next 6-9 days',
      idealProductionFormat: 'Clean aesthetic b-roll of daily routine + high-res biometric chart overlays',
      contrarianAngleAvailable: true,
      monetizationAffinity: ['Wearable Tech', 'Electrolyte Brands', 'Cold Plunge Systems', 'Clean Supplement Labs']
    },
    timeSeries: [
      { date: 'Nov 17', volume: 2.4, velocity: 18, engagementRate: 5.9, saturationIndex: 10, macroAdoptionRate: 5 },
      { date: 'Nov 20', volume: 8.1, velocity: 48, engagementRate: 7.8, saturationIndex: 18, macroAdoptionRate: 14 },
      { date: 'Nov 23', volume: 19.5, velocity: 74, engagementRate: 9.3, saturationIndex: 26, macroAdoptionRate: 29 },
      { date: 'Nov 25', volume: 34.0, velocity: 86, engagementRate: 9.6, saturationIndex: 31, macroAdoptionRate: 42 },
    ],
    platformMetrics: {
      reelsShare: 42,
      tiktokShare: 35,
      shortsShare: 23,
      trendingAudio: 'Warm Analog Synth Tape Pulse',
      avgWatchTimeSeconds: 28.5,
      retentionFirst3s: 86.4
    },
    topCreatorsActive: [
      { handle: '@dr_huberman_clips', followers: '2.1M', views: '6.2M', formatTwist: 'Caffeine delay protocol HRV impact' },
      { handle: '@fitlongevity', followers: '620K', views: '2.1M', formatTwist: '30 days magnesium L-threonate EEG scan' }
    ],
    macroAngles: [
      {
        title: 'The Medical Skeptic Teardown',
        type: 'Contrarian',
        hook: 'I tracked my blood glucose and HRV for 30 days doing the viral morning hydration trend. The results made me furious.',
        storyOutline: 'Reveal that the trend did zero for HRV, but reveal the one unexpected metric that actually moved by 40%. High scientific integrity.',
        expectedRetentionBoost: '+48% average watch duration'
      }
    ],
    brandSponsors: [
      {
        category: 'Health & Performance Tech',
        estimatedValue: '$10,000 - $16,500 per Reel',
        typicalSponsors: ['Whoop', 'Eight Sleep', 'AG1', 'LMNT'],
        pitchAngle: 'Authentic 30-day tracking showing physiological baseline improvement.'
      }
    ]
  },
  {
    id: 'trend-lofi-flash-pov',
    title: 'Lo-Fi Flash POV Transition',
    hashtag: '#NightFlashAesthetic',
    category: 'lifestyle_luxury',
    stage: 'viral_peak',
    velocityScore: 98,
    viralityPotential: 81,
    saturationScore: 78,
    firstDetected: '14 days ago',
    peakPredictionDate: 'Currently at Peak (48h exit window)',
    overview: 'High-contrast direct flash photography with analog film grain, synced to a nostalgic 80s synth bass beat. Used for outfit transitions, luxury hotel reveals, and street aesthetic showcases.',
    whyItsTrending: 'Ultra-high visual contrast triggers instant thumb-stopping behavior on dark mode social apps. Aesthetic is easy to mimic.',
    keyVisualPattern: 'Harsh frontal flash in dimly lit urban street or brutalist interior; snap cuts on every beat drum.',
    audioName: 'Mareux - The Perfect Girl (Retro Synthwave Slowed)',
    audioGrowthDelta: '+12% (plateauing)',
    totalViewsEstimated: '92.4M',
    distinctCreatorsObserved: 4500,
    macroSuitability: {
      macroSuitabilityScore: 68,
      categoryAuthorityPotential: 'Low',
      riskOfAudienceFatigue: 'High',
      recommendedWindowDays: 'Next 24-48 hours ONLY (Must be high production)',
      idealProductionFormat: 'Super-16mm real film or Leica M11 direct flash to stand out from phone cameras',
      contrarianAngleAvailable: true,
      monetizationAffinity: ['Luxury Fashion Houses', 'Fragrance Brands', 'Designer Eyewear', 'Boutique Hotels']
    },
    timeSeries: [
      { date: 'Nov 12', volume: 15.0, velocity: 85, engagementRate: 11.2, saturationIndex: 25, macroAdoptionRate: 22 },
      { date: 'Nov 16', volume: 48.0, velocity: 110, engagementRate: 10.4, saturationIndex: 48, macroAdoptionRate: 64 },
      { date: 'Nov 20', volume: 88.0, velocity: 95, engagementRate: 8.9, saturationIndex: 68, macroAdoptionRate: 82 },
      { date: 'Nov 25', volume: 105.0, velocity: 32, engagementRate: 7.1, saturationIndex: 78, macroAdoptionRate: 91 },
    ],
    platformMetrics: {
      reelsShare: 58,
      tiktokShare: 32,
      shortsShare: 10,
      trendingAudio: 'The Perfect Girl - Retro Slowed Reverb',
      avgWatchTimeSeconds: 14.2,
      retentionFirst3s: 94.0
    },
    topCreatorsActive: [
      { handle: '@parisianchic', followers: '1.4M', views: '5.1M', formatTwist: 'Midnight Paris flash walk' },
      { handle: '@archivestyles', followers: '780K', views: '3.4M', formatTwist: 'Archive Helmut Lang runway flash showcase' }
    ],
    macroAngles: [
      {
        title: 'Macro Production Parody / Evolution',
        type: 'Interactive Challenge',
        hook: 'Everyone is using an iPhone flash to fake the 90s aesthetic. So I hired a cinema paparazzi crew to shoot my grocery run.',
        storyOutline: 'Take the overused aesthetic to its extreme absurd cinematic conclusion. Demonstrates self-awareness while harvesting massive views.',
        expectedRetentionBoost: '+70% shares to friends'
      }
    ],
    brandSponsors: [
      {
        category: 'Luxury Fashion & Eyewear',
        estimatedValue: '$15,000 - $25,000 per Reel',
        typicalSponsors: ['Gentle Monster', 'Acne Studios', 'YSL Beauty', 'SSENSE'],
        pitchAngle: 'Cinematic visual hero reel celebrating silhouette and material textures under flash.'
      }
    ]
  },
  {
    id: 'trend-ai-voice-clones',
    title: 'AI Persona Mirror Debate',
    hashtag: '#AIPersonaDebate',
    category: 'tech_ai',
    stage: 'rising',
    velocityScore: 91,
    viralityPotential: 95,
    saturationScore: 26,
    firstDetected: '4 days ago',
    peakPredictionDate: 'Est. Peak in 8-11 days',
    overview: 'Creator clones their own voice and generates a hyper-realistic AI avatar or twin. The creator then has a rapid-fire philosophical or technical argument with their clone on screen.',
    whyItsTrending: 'Uncanny valley intrigue + high dynamic comedic tension. Audiences stay until the end to see who wins the debate.',
    keyVisualPattern: 'Split screen with identical framing; one side subtly glitched with cybernetic overlay.',
    audioName: 'Sci-Fi Electronic Drone + Fast Clock Ticking',
    audioGrowthDelta: '+340% weekly uses',
    totalViewsEstimated: '19.8M',
    distinctCreatorsObserved: 410,
    macroSuitability: {
      macroSuitabilityScore: 95,
      categoryAuthorityPotential: 'High',
      riskOfAudienceFatigue: 'Low',
      recommendedWindowDays: 'Next 7-10 days',
      idealProductionFormat: 'Dual 4K cameras with synchronized motion tracking and ElevenLabs zero-shot clone',
      contrarianAngleAvailable: true,
      monetizationAffinity: ['AI SaaS Platforms', 'Cloud Infrastructure', 'Cybersecurity', 'Developer Tools']
    },
    timeSeries: [
      { date: 'Nov 18', volume: 1.8, velocity: 20, engagementRate: 6.4, saturationIndex: 6, macroAdoptionRate: 4 },
      { date: 'Nov 21', volume: 6.5, velocity: 65, engagementRate: 8.8, saturationIndex: 14, macroAdoptionRate: 12 },
      { date: 'Nov 24', volume: 18.2, velocity: 88, engagementRate: 10.2, saturationIndex: 22, macroAdoptionRate: 24 },
      { date: 'Nov 25', volume: 27.6, velocity: 95, engagementRate: 10.8, saturationIndex: 26, macroAdoptionRate: 31 },
    ],
    platformMetrics: {
      reelsShare: 46,
      tiktokShare: 40,
      shortsShare: 14,
      trendingAudio: 'Clockwork Synth Tension Loop',
      avgWatchTimeSeconds: 38.6,
      retentionFirst3s: 89.7
    },
    topCreatorsActive: [
      { handle: '@thefutureguy', followers: '950K', views: '3.9M', formatTwist: 'AI clone interviews the creator about being replaced' },
      { handle: '@techphilosophy', followers: '510K', views: '1.8M', formatTwist: 'Speed chess against my own AI voice clone' }
    ],
    macroAngles: [
      {
        title: 'The AI Reality Turing Test',
        type: 'Interactive Challenge',
        hook: 'One of the two people talking in this video is completely AI generated. In the next 30 seconds, see if you can spot which one is fake.',
        storyOutline: 'Deliver a mind-bending breakdown while keeping both figures speaking with identical pauses and cadence. Guaranteed 2000+ comment guesses.',
        expectedRetentionBoost: '+85% comment rate'
      }
    ],
    brandSponsors: [
      {
        category: 'Enterprise AI & Tech',
        estimatedValue: '$14,000 - $22,000 per Reel',
        typicalSponsors: ['Anthropic', 'ElevenLabs', 'Notion AI', 'Google Cloud'],
        pitchAngle: 'Showcase authentic human-AI collaboration and real-time inference speed.'
      }
    ]
  },
  {
    id: 'trend-fast-cut-asmr',
    title: 'Aggressive Fast-Cut 0.5s ASMR',
    hashtag: '#HyperlapseASMR',
    category: 'lifestyle_luxury',
    stage: 'saturating',
    velocityScore: 42,
    viralityPotential: 48,
    saturationScore: 84,
    firstDetected: '28 days ago',
    peakPredictionDate: 'Past Peak (Declining velocity)',
    overview: 'Morning routines, unboxings, or desk setups filmed with ultra-fast 0.3s-0.5s cuts with exaggerated clacking, pouring, and tapping sounds amplified by +12dB.',
    whyItsTrending: 'Sensory overload initially kept retention high, but audience fatigue has set in. Feed is flooded with identical coffee-grinding clips.',
    keyVisualPattern: 'Top-down flat-lay shot, macro camera lens on coffee machine switch, harsh slap edit.',
    audioName: 'Original Audio - Foley Soundboard Boosted',
    audioGrowthDelta: '-18% weekly uses',
    totalViewsEstimated: '145M',
    distinctCreatorsObserved: 12400,
    macroSuitability: {
      macroSuitabilityScore: 35,
      categoryAuthorityPotential: 'Low',
      riskOfAudienceFatigue: 'Severe',
      recommendedWindowDays: 'AVOID or Parody Only',
      idealProductionFormat: 'Do not produce genuine copies; audience perceives as lazy template content',
      contrarianAngleAvailable: true,
      monetizationAffinity: ['Coffee Machines', 'Keyboards', 'Skincare']
    },
    timeSeries: [
      { date: 'Nov 05', volume: 55.0, velocity: 120, engagementRate: 11.0, saturationIndex: 40, macroAdoptionRate: 65 },
      { date: 'Nov 12', volume: 120.0, velocity: 85, engagementRate: 8.5, saturationIndex: 68, macroAdoptionRate: 85 },
      { date: 'Nov 19', volume: 135.0, velocity: 20, engagementRate: 6.2, saturationIndex: 80, macroAdoptionRate: 92 },
      { date: 'Nov 25', volume: 115.0, velocity: -15, engagementRate: 4.8, saturationIndex: 84, macroAdoptionRate: 95 },
    ],
    platformMetrics: {
      reelsShare: 62,
      tiktokShare: 28,
      shortsShare: 10,
      trendingAudio: 'Hyper Foley Tap Tap Pop',
      avgWatchTimeSeconds: 11.2,
      retentionFirst3s: 72.0
    },
    topCreatorsActive: [
      { handle: '@deskroutine', followers: '820K', views: '1.2M', formatTwist: 'Standard morning coffee grind' }
    ],
    macroAngles: [
      {
        title: 'Anti-ASMR: The Chaotic Reality',
        type: 'Contrarian',
        hook: 'I am so sick of aesthetic morning ASMR videos. Here is what making coffee actually sounds like when you have 15 minutes before a Zoom call.',
        storyOutline: 'Spilling grounds, burnt toast, dog barking, mic clipping. Highly relatable antidote to over-curated content.',
        expectedRetentionBoost: '+90% shareability'
      }
    ],
    brandSponsors: [
      {
        category: 'Lifestyle Hardware',
        estimatedValue: '$6,000 - $9,000 per Reel',
        typicalSponsors: ['Breville', 'Fellow Products'],
        pitchAngle: 'Humorous real-life test showing the machine can survive real morning chaos.'
      }
    ]
  }
];

export const MOCK_SAMPLE_URLS = [
  {
    url: 'https://instagram.com/reel/C8x9Y21kLpQ',
    platform: 'Instagram Reels',
    label: 'Spatial Audio Tech Teardown (Alex Rivera sample)',
    stage: 'emerging' as const,
    matchedTrendId: 'trend-spatial-audio'
  },
  {
    url: 'https://instagram.com/reel/DF992kLkMz1',
    platform: 'Instagram Reels',
    label: 'The "Stop Doing Index Funds" Pattern Interrupt',
    stage: 'rising' as const,
    matchedTrendId: 'trend-contrarian-stop'
  },
  {
    url: 'https://instagram.com/reel/B7v0018aPqE',
    platform: 'Instagram Reels',
    label: 'Aggressive 0.4s Morning Coffee ASMR',
    stage: 'saturating' as const,
    matchedTrendId: 'trend-fast-cut-asmr'
  }
];
