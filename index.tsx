import React, { useState } from 'react';
import { TrendingUp, Target, Zap, Trophy, BarChart3, Activity, Clock, ThumbsUp, Eye, Share2, Crown, Calendar, ArrowUp, Sparkles, Gamepad2, Flame, Award, Users, Heart, Rocket, TrendingDown, Play, DollarSign, Star, AlertCircle, CheckCircle } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Area, AreaChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ComposedChart } from 'recharts';

const AnalyticsHub = () => {
  const [selectedTimeRange, setSelectedTimeRange] = useState('7days');
  const [selectedGame, setSelectedGame] = useState('all');
  const [activeTab, setActiveTab] = useState('overview');

  const performanceData = [
    { date: 'Mon', views: 12500, engagement: 8.2, revenue: 125, clips: 15 },
    { date: 'Tue', views: 15200, engagement: 9.1, revenue: 152, clips: 18 },
    { date: 'Wed', views: 18700, engagement: 11.5, revenue: 187, clips: 22 },
    { date: 'Thu', views: 14200, engagement: 7.8, revenue: 142, clips: 16 },
    { date: 'Fri', views: 21500, engagement: 13.2, revenue: 215, clips: 25 },
    { date: 'Sat', views: 28900, engagement: 15.8, revenue: 289, clips: 32 },
    { date: 'Sun', views: 25100, engagement: 14.1, revenue: 251, clips: 28 }
  ];

  const gamePerformance = [
    { name: 'Valorant', clips: 45, avgViews: 18500, trend: '+24%', engagement: 12.3, viral: 3 },
    { name: 'Apex Legends', clips: 32, avgViews: 15200, trend: '+12%', engagement: 9.8, viral: 2 },
    { name: 'COD Warzone', clips: 28, avgViews: 22100, trend: '+31%', engagement: 15.2, viral: 5 },
    { name: 'Fortnite', clips: 19, avgViews: 12800, trend: '-5%', engagement: 8.1, viral: 1 }
  ];

  const platformData = [
    { name: 'TikTok', value: 48, color: '#00f2ea', growth: '+34%', avgViews: 24500 },
    { name: 'YouTube', value: 32, color: '#ff0000', growth: '+18%', avgViews: 18200 },
    { name: 'Instagram', value: 20, color: '#E4405F', growth: '+12%', avgViews: 15800 }
  ];

  const contentTypeData = [
    { type: 'Clutch Plays', value: 85, count: 34, color: '#A855F7' },
    { type: 'Funny Moments', value: 72, count: 28, color: '#EC4899' },
    { type: 'Tutorials', value: 45, count: 12, color: '#06B6D4' },
    { type: 'Montages', value: 68, count: 21, color: '#F59E0B' },
    { type: 'Epic Fails', value: 58, count: 18, color: '#10B981' }
  ];

  const aiInsights = [
    {
      icon: Flame,
      title: 'HOT OPPORTUNITY',
      value: 'COD Warzone Trending',
      description: 'Your Warzone clips are getting 31% more views. Strike while the iron is hot!',
      action: 'Stream Warzone Tonight',
      impact: 'Critical',
      color: 'from-red-500 via-orange-500 to-yellow-500',
      potential: '+2.5K views'
    },
    {
      icon: Crown,
      title: 'WINNING FORMULA',
      value: 'Clutch Moments = Gold',
      description: 'Last-second wins get 3.2x engagement. Your audience loves the suspense.',
      action: 'Create More Clutches',
      impact: 'High',
      color: 'from-yellow-400 via-yellow-500 to-orange-500',
      potential: '+1.8K views'
    },
    {
      icon: Clock,
      title: 'PERFECT TIMING',
      value: 'Post Friday 7-9 PM',
      description: 'Your audience peaks on Friday evenings. Schedule posts for maximum reach.',
      action: 'Auto-Schedule Posts',
      impact: 'High',
      color: 'from-blue-500 via-cyan-500 to-teal-500',
      potential: '+40% engagement'
    },
    {
      icon: Target,
      title: 'CONTENT GAP',
      value: 'Missing: Tutorials',
      description: '127 viewers requested guides this week. Untapped audience waiting for you.',
      action: 'Create Tutorial Series',
      impact: 'Medium',
      color: 'from-purple-500 via-pink-500 to-rose-500',
      potential: '+1.2K subs'
    }
  ];

  const viralPredictions = [
    { 
      clipName: '5K ACE Clutch - Valorant Ranked', 
      viralScore: 96, 
      reasons: ['Insane clutch moment', 'Trending game', 'Peak posting time', 'Perfect audio reaction'],
      expectedViews: '250K-500K',
      confidence: 'Very High',
      thumbnail: '🎯'
    },
    { 
      clipName: '1v4 Impossible Comeback - Apex', 
      viralScore: 89, 
      reasons: ['High excitement', 'Underdog story', 'Great commentary'],
      expectedViews: '150K-300K',
      confidence: 'High',
      thumbnail: '⚡'
    },
    { 
      clipName: 'Epic Fail Compilation - Warzone', 
      viralScore: 82, 
      reasons: ['Comedic timing', 'Highly relatable', 'Shareable content'],
      expectedViews: '80K-150K',
      confidence: 'Medium-High',
      thumbnail: '😂'
    }
  ];

  const competitorBenchmark = [
    { metric: 'Post Frequency', you: 85, industry: 60 },
    { metric: 'Engagement', you: 92, industry: 65 },
    { metric: 'Quality', you: 88, industry: 70 },
    { metric: 'Consistency', you: 78, industry: 55 },
    { metric: 'Trending', you: 82, industry: 50 }
  ];

  const growthGoals = [
    { goal: '100K Total Views', current: 136100, target: 100000, status: 'achieved' },
    { goal: '50K Followers', current: 38200, target: 50000, status: 'in-progress' },
    { goal: '15 Viral Clips', current: 12, target: 15, status: 'in-progress' },
    { goal: '10% Engagement Rate', current: 11.4, target: 10, status: 'achieved' }
  ];

  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: 'Inter, -apple-system, system-ui, sans-serif' }}>
      
      {/* Hero Header - Eklipse Style */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700 opacity-90"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 backdrop-blur-lg rounded-2xl">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                    ANALYTICS HUB
                  </h1>
                  <p className="text-purple-100 text-sm md:text-base mt-2 font-medium">
                    AI-Powered Insights • Real-Time Data • Grow 10x Faster
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-3 mt-6">
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                  <span className="text-white text-sm font-bold">📈 +23.5% Growth</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                  <span className="text-white text-sm font-bold">🔥 12 Viral Clips</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/30">
                  <span className="text-white text-sm font-bold">⚡ AI-Optimized</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <select 
                value={selectedTimeRange}
                onChange={(e) => setSelectedTimeRange(e.target.value)}
                className="bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-xl px-4 py-3 text-white font-bold text-sm focus:outline-none focus:border-white hover:bg-white/20 transition-all"
              >
                <option value="7days" className="bg-gray-900">Last 7 Days</option>
                <option value="30days" className="bg-gray-900">Last 30 Days</option>
                <option value="90days" className="bg-gray-900">Last 90 Days</option>
              </select>
              
              <select 
                value={selectedGame}
                onChange={(e) => setSelectedGame(e.target.value)}
                className="bg-white/10 backdrop-blur-lg border-2 border-white/30 rounded-xl px-4 py-3 text-white font-bold text-sm focus:outline-none focus:border-white hover:bg-white/20 transition-all"
              >
                <option value="all" className="bg-gray-900">All Games</option>
                <option value="valorant" className="bg-gray-900">Valorant</option>
                <option value="apex" className="bg-gray-900">Apex Legends</option>
                <option value="cod" className="bg-gray-900">COD Warzone</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        
        {/* Key Metrics - Compact Row */}
        <div className="flex flex-wrap gap-3 mb-8">
          <CompactMetricCard 
            icon={Eye}
            label="TOTAL VIEWS"
            value="136.1K"
            change="+23.5%"
            gradient="from-blue-500 to-cyan-400"
          />
          <CompactMetricCard 
            icon={ThumbsUp}
            label="ENGAGEMENT"
            value="11.4%"
            change="+2.1%"
            gradient="from-green-500 to-emerald-400"
          />
          <CompactMetricCard 
            icon={Share2}
            label="SHARES"
            value="2,847"
            change="+18.7%"
            gradient="from-purple-500 to-pink-500"
          />
          <CompactMetricCard 
            icon={Trophy}
            label="VIRAL CLIPS"
            value="12"
            change="+5"
            gradient="from-yellow-500 to-orange-500"
          />
        </div>

        {/* AI Insights Section - PRIORITY */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight flex items-center gap-3">
                <Zap className="w-8 h-8 text-yellow-400" />
                AI-POWERED RECOMMENDATIONS
              </h2>
              <p className="text-gray-400 mt-1 font-medium">Take action on these insights to maximize your growth</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {aiInsights.map((insight, idx) => {
              const InsightIcon = insight.icon;
              return (
                <div 
                  key={idx}
                  className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  
                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 bg-gradient-to-br ${insight.color} rounded-xl shadow-lg`}>
                          <InsightIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-xs font-black text-gray-400 tracking-wider">{insight.title}</div>
                          <div className="text-xl font-black text-white mt-1">{insight.value}</div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className={`text-xs px-3 py-1 rounded-full font-black ${
                          insight.impact === 'Critical' ? 'bg-red-500/20 text-red-400 border border-red-500/50' :
                          insight.impact === 'High' ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/50' :
                          'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                        }`}>
                          {insight.impact.toUpperCase()}
                        </span>
                        <span className="text-xs font-bold text-green-400">{insight.potential}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed font-medium">{insight.description}</p>
                    
                    <button className={`w-full bg-gradient-to-r ${insight.color} hover:shadow-xl text-white font-black py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105`}>
                      <Rocket className="w-5 h-5" />
                      {insight.action}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Performance & Platform Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Performance Trend */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border-2 border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-black text-white flex items-center gap-2">
                  <Activity className="w-6 h-6 text-purple-400" />
                  PERFORMANCE TREND
                </h3>
                <p className="text-sm text-gray-400 mt-1 font-medium">Exponential growth detected 🚀</p>
              </div>
              <div className="flex gap-4 text-xs font-bold">
                <span className="flex items-center gap-2 px-3 py-2 bg-purple-500/20 rounded-lg border border-purple-500/50">
                  <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                  VIEWS
                </span>
                <span className="flex items-center gap-2 px-3 py-2 bg-pink-500/20 rounded-lg border border-pink-500/50">
                  <div className="w-3 h-3 rounded-full bg-pink-400"></div>
                  ENGAGEMENT
                </span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={performanceData}>
                <defs>
                  <linearGradient id="colorViews2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#A855F7" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#A855F7" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="date" stroke="#9CA3AF" style={{ fontSize: '12px', fontWeight: 'bold' }} />
                <YAxis yAxisId="left" stroke="#9CA3AF" style={{ fontSize: '12px', fontWeight: 'bold' }} />
                <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" style={{ fontSize: '12px', fontWeight: 'bold' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: '2px solid #A855F7', 
                    borderRadius: '12px',
                    fontWeight: 'bold'
                  }}
                />
                <Area yAxisId="left" type="monotone" dataKey="views" stroke="#A855F7" fill="url(#colorViews2)" strokeWidth={3} />
                <Line yAxisId="right" type="monotone" dataKey="engagement" stroke="#EC4899" strokeWidth={3} dot={{ fill: '#EC4899', r: 5 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Platform Performance - Enhanced */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border-2 border-gray-700">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
              <Target className="w-6 h-6 text-purple-400" />
              PLATFORM PERFORMANCE
            </h3>
            
            {/* Platform Cards */}
            <div className="space-y-4 mb-6">
              {platformData.map((platform, idx) => (
                <div key={platform.name} className="group relative overflow-hidden bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-purple-500 transition-all hover:scale-[1.02]">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" style={{ background: `linear-gradient(135deg, ${platform.color}, transparent)` }}></div>
                  
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg flex items-center justify-center font-black text-lg" style={{ backgroundColor: platform.color }}>
                          {idx === 0 ? '📱' : idx === 1 ? '▶️' : '📸'}
                        </div>
                        <div>
                          <div className="font-black text-white text-lg">{platform.name}</div>
                          <div className="text-xs font-bold text-gray-400">{platform.value}% of total traffic</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 px-3 py-1 bg-green-500/20 rounded-full border border-green-500/50 mb-1">
                          <ArrowUp className="w-3 h-3 text-green-400" />
                          <span className="text-sm font-black text-green-400">{platform.growth}</span>
                        </div>
                        <div className="text-xs font-bold text-gray-400">vs last period</div>
                      </div>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-3 mb-3">
                      <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                        <div className="text-xs font-bold text-gray-400 mb-1">Avg Views</div>
                        <div className="text-lg font-black text-white">{(platform.avgViews / 1000).toFixed(1)}K</div>
                      </div>
                      <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                        <div className="text-xs font-bold text-gray-400 mb-1">Engagement</div>
                        <div className="text-lg font-black text-white">{(platform.value * 0.23).toFixed(1)}%</div>
                      </div>
                      <div className="bg-gray-900/50 rounded-lg p-3 border border-gray-700">
                        <div className="text-xs font-bold text-gray-400 mb-1">Viral Rate</div>
                        <div className="text-lg font-black text-white">{idx === 0 ? '8.2%' : idx === 1 ? '5.7%' : '4.1%'}</div>
                      </div>
                    </div>
                    
                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="flex items-center justify-between text-xs font-bold text-gray-400 mb-2">
                        <span>Performance Score</span>
                        <span>{idx === 0 ? '94/100' : idx === 1 ? '87/100' : '78/100'}</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full transition-all duration-1000"
                          style={{ 
                            width: `${idx === 0 ? 94 : idx === 1 ? 87 : 78}%`,
                            background: `linear-gradient(90deg, ${platform.color}, ${platform.color}dd)`
                          }}
                        ></div>
                      </div>
                    </div>
                    
                    {/* Best Performing Content */}
                    <div className="mt-4 pt-4 border-t border-gray-700">
                      <div className="text-xs font-bold text-gray-400 mb-2">🔥 Top Content Type</div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-black text-white">
                          {idx === 0 ? 'Clutch Moments' : idx === 1 ? 'Tutorials' : 'Funny Clips'}
                        </span>
                        <span className="text-xs font-bold px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/50">
                          {idx === 0 ? '3.2x boost' : idx === 1 ? '2.8x boost' : '2.1x boost'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Platform Distribution Chart */}
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
              <div className="text-sm font-bold text-gray-400 mb-4 text-center">TRAFFIC DISTRIBUTION</div>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie
                    data={platformData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={70}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '2px solid #A855F7', borderRadius: '12px', fontWeight: 'bold' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-4 mt-4">
                {platformData.map((platform) => (
                  <div key={platform.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: platform.color }}></div>
                    <span className="text-xs font-bold text-gray-400">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Viral Predictor - Premium Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight">VIRAL POTENTIAL PREDICTOR</h2>
              <p className="text-gray-400 mt-1 font-medium">AI analyzes your clips and predicts which will go viral</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {viralPredictions.map((clip, idx) => (
              <div key={idx} className="group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border-2 border-gray-700 hover:border-yellow-500 transition-all hover:scale-105">
                <div className="absolute top-0 right-0 p-4">
                  <div className="text-5xl">{clip.thumbnail}</div>
                </div>
                
                <div className="relative p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-black text-gray-400 tracking-wider">VIRAL SCORE</span>
                      <div className="flex items-center gap-2">
                        <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">{clip.viralScore}</div>
                        <div className="text-xs text-gray-400 font-bold">/100</div>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-yellow-400 to-orange-500"
                        style={{ width: `${clip.viralScore}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  <h4 className="font-black text-white text-lg mb-2">{clip.clipName}</h4>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <Eye className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-bold text-gray-300">{clip.expectedViews} expected</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {clip.reasons.slice(0, 2).map((reason, ridx) => (
                      <span key={ridx} className="text-xs bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full font-bold border border-purple-500/50">
                        {reason}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black font-black py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-2xl flex items-center justify-center gap-2">
                    <Play className="w-5 h-5" />
                    OPTIMIZE & POST
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Game Performance & Content Types */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Game Rankings */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border-2 border-gray-700">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
              <Gamepad2 className="w-6 h-6 text-purple-400" />
              GAME PERFORMANCE
            </h3>
            <div className="space-y-4">
              {gamePerformance.map((game, idx) => (
                <div key={idx} className="relative group bg-gray-800 rounded-xl p-5 border border-gray-700 hover:border-purple-500 transition-all">
                  <div className="flex items-center gap-4 mb-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-xl ${
                      idx === 0 ? 'bg-gradient-to-br from-yellow-400 to-orange-500 text-black' :
                      idx === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-500 text-black' :
                      idx === 2 ? 'bg-gradient-to-br from-orange-600 to-orange-700 text-white' :
                      'bg-gray-700 text-gray-400'
                    }`}>
                      #{idx + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-black text-white text-lg">{game.name}</span>
                        <span className={`text-sm font-black flex items-center gap-1 ${game.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                          {game.trend.startsWith('+') ? '📈' : '📉'} {game.trend}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mt-2 text-sm">
                        <span className="text-gray-400 font-bold">{game.clips} clips</span>
                        <span className="text-gray-400 font-bold">{game.avgViews.toLocaleString()} avg views</span>
                        <span className="text-yellow-400 font-bold">🔥 {game.viral} viral</span>
                      </div>
                    </div>
                  </div>
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                      style={{ width: `${Math.min((game.avgViews / 25000) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content Type Performance */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border-2 border-gray-700">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-purple-400" />
              CONTENT TYPES
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={contentTypeData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis type="number" stroke="#9CA3AF" style={{ fontSize: '12px', fontWeight: 'bold' }} />
                <YAxis dataKey="type" type="category" stroke="#9CA3AF" width={120} style={{ fontSize: '12px', fontWeight: 'bold' }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: '2px solid #A855F7', borderRadius: '12px', fontWeight: 'bold' }}
                />
                <Bar dataKey="value" radius={[0, 8, 8, 0]}>
                  {contentTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Growth Goals & Competitor Benchmark */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          
          {/* Growth Goals */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border-2 border-gray-700">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-yellow-400" />
              GROWTH GOALS
            </h3>
            <div className="space-y-5">
              {growthGoals.map((item, idx) => {
                const progress = Math.min((item.current / item.target) * 100, 100);
                const isAchieved = item.status === 'achieved';
                return (
                  <div key={idx} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {isAchieved ? (
                          <CheckCircle className="w-5 h-5 text-green-400" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-yellow-400" />
                        )}
                        <span className="font-black text-white">{item.goal}</span>
                      </div>
                      <span className="text-sm font-bold text-gray-400">
                        {typeof item.current === 'number' && item.current > 1000 
                          ? `${(item.current / 1000).toFixed(1)}K` 
                          : item.current} / {typeof item.target === 'number' && item.target > 1000 
                          ? `${(item.target / 1000).toFixed(0)}K` 
                          : item.target}
                      </span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${isAchieved ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 'bg-gradient-to-r from-yellow-400 to-orange-500'} transition-all duration-1000`}
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                    <div className="text-xs font-bold text-gray-400 mt-1">
                      {isAchieved ? '✅ Achieved!' : `${(100 - progress).toFixed(0)}% to go`}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Competitor Benchmark - Enhanced */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border-2 border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-black text-white flex items-center gap-2">
                  <Users className="w-6 h-6 text-purple-400" />
                  VS INDUSTRY
                </h3>
                <p className="text-sm font-medium text-gray-400 mt-1">How you stack up against 10K+ creators</p>
              </div>
              <div className="text-right">
                <div className="px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl shadow-lg">
                  <div className="text-2xl font-black text-white">TOP 15%</div>
                  <div className="text-xs font-bold text-green-100">Global Ranking</div>
                </div>
              </div>
            </div>

            {/* Radar Chart */}
            <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 mb-6">
              <ResponsiveContainer width="100%" height={240}>
                <RadarChart data={competitorBenchmark}>
                  <PolarGrid stroke="#374151" strokeWidth={2} />
                  <PolarAngleAxis dataKey="metric" stroke="#9CA3AF" style={{ fontSize: '11px', fontWeight: 'bold' }} />
                  <PolarRadiusAxis stroke="#9CA3AF" domain={[0, 100]} />
                  <Radar name="You" dataKey="you" stroke="#A855F7" fill="#A855F7" fillOpacity={0.6} strokeWidth={3} />
                  <Radar name="Industry" dataKey="industry" stroke="#6B7280" fill="#6B7280" fillOpacity={0.3} strokeWidth={2} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: '2px solid #A855F7', borderRadius: '12px', fontWeight: 'bold' }}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Detailed Comparison */}
            <div className="space-y-3">
              {competitorBenchmark.map((item, idx) => {
                const diff = item.you - item.industry;
                const diffPercent = ((diff / item.industry) * 100).toFixed(0);
                const isWinning = diff > 0;
                
                return (
                  <div key={idx} className="bg-gray-800 rounded-xl p-4 border border-gray-700 hover:border-purple-500 transition-all group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {isWinning ? (
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                            <Trophy className="w-5 h-5 text-white" />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                            <Target className="w-5 h-5 text-white" />
                          </div>
                        )}
                        <div>
                          <div className="font-black text-white text-base">{item.metric}</div>
                          <div className="text-xs font-bold text-gray-400">
                            {isWinning ? `+${diffPercent}% ahead` : `${diffPercent}% behind`}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-gray-400">You:</span>
                          <span className="text-lg font-black text-white">{item.you}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-gray-400">Avg:</span>
                          <span className="text-sm font-bold text-gray-500">{item.industry}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Comparison Bar */}
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex-1 h-3 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full transition-all duration-1000 bg-gradient-to-r from-purple-500 to-pink-500"
                            style={{ width: `${item.you}%` }}
                          ></div>
                        </div>
                        <div className="flex-1 h-3 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-1000"
                            style={{ width: `${item.industry}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      {/* Legend */}
                      <div className="flex items-center justify-center gap-4 mb-2 text-xs font-bold">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                          <span className="text-purple-300">You</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
                          <span className="text-cyan-300">Industry Avg</span>
                        </div>
                      </div>
                      
                      {/* Action Suggestion */}
                      {isWinning ? (
                        <div className="text-xs font-bold text-green-400 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" />
                          Crushing it! Keep this momentum
                        </div>
                      ) : (
                        <div className="text-xs font-bold text-orange-400 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          Room for growth - focus here
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary Stats */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="text-xs font-bold text-gray-400 mb-1">Winning Metrics</div>
                <div className="text-3xl font-black text-green-400">4/5</div>
                <div className="text-xs font-medium text-gray-500 mt-1">Above industry average</div>
              </div>
              <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="text-xs font-bold text-gray-400 mb-1">Avg Performance</div>
                <div className="text-3xl font-black text-purple-400">+27%</div>
                <div className="text-xs font-medium text-gray-500 mt-1">Better than peers</div>
              </div>
            </div>

            {/* Motivational CTA */}
            <div className="mt-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-4 border border-purple-500/30">
              <div className="flex items-center gap-3">
                <div className="text-3xl">🏆</div>
                <div className="flex-1">
                  <div className="font-black text-white text-sm mb-1">You're Outperforming!</div>
                  <div className="text-xs text-gray-300 font-medium">You're in the top 15% of gaming creators worldwide. One more viral clip and you'll hit top 10%!</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Center - CTA */}
        <div className="relative overflow-hidden rounded-2xl mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600"></div>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}></div>
          
          <div className="relative p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4">
              READY TO DOMINATE YOUR NICHE?
            </h3>
            <p className="text-purple-100 text-lg mb-8 font-medium max-w-2xl mx-auto">
              Let AI create your personalized growth strategy. Optimize content, schedule posts, and grow 10x faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-black text-lg hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 flex items-center justify-center gap-2">
                <Rocket className="w-6 h-6" />
                CREATE CONTENT PLAN
              </button>
              <button className="bg-white/10 backdrop-blur-lg text-white px-8 py-4 rounded-xl font-black text-lg hover:bg-white/20 transition-all border-2 border-white/30 hover:scale-105 flex items-center justify-center gap-2">
                <BarChart3 className="w-6 h-6" />
                DOWNLOAD REPORT
              </button>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center text-gray-500 text-sm font-medium">
          <p>🤖 Powered by Eklipse AI • 📊 Updated in real-time • 🔄 Next refresh in 6 hours</p>
          <p className="mt-2 text-xs">Data analyzed from 136K+ views across TikTok, YouTube & Instagram</p>
        </div>
      </div>
    </div>
  );
};

const CompactMetricCard = ({ icon: Icon, label, value, change, gradient }) => (
  <div className={`group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl px-5 py-4 border-2 border-gray-700 hover:border-purple-500 transition-all hover:scale-105 cursor-pointer flex-1 min-w-[200px]`}>
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
    
    <div className="relative flex items-center gap-4">
      <div className={`p-2.5 bg-gradient-to-br ${gradient} rounded-lg shadow-lg group-hover:scale-110 transition-transform flex-shrink-0`}>
        <Icon className="w-5 h-5 text-white" />
      </div>
      
      <div className="flex-1 min-w-0">
        <div className="text-xs font-black text-gray-400 tracking-wider mb-1">{label}</div>
        <div className="flex items-baseline gap-2">
          <div className="text-2xl font-black text-white">{value}</div>
          <div className="flex items-center gap-1 px-2 py-0.5 bg-green-500/20 rounded-full border border-green-500/50">
            <ArrowUp className="w-3 h-3 text-green-400" />
            <span className="text-xs font-black text-green-400">{change}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MetricCard = ({ icon: Icon, label, value, change, subtitle, gradient }) => (
  <div className={`group relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border-2 border-gray-700 hover:border-purple-500 transition-all hover:scale-105 cursor-pointer`}>
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
    
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 bg-gradient-to-br ${gradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="flex items-center gap-1 px-3 py-1 bg-green-500/20 rounded-full border border-green-500/50">
          <ArrowUp className="w-4 h-4 text-green-400" />
          <span className="text-sm font-black text-green-400">{change}</span>
        </div>
      </div>
      
      <div className="text-4xl font-black text-white mb-2">{value}</div>
      <div className="text-sm font-black text-gray-400 tracking-wider mb-1">{label}</div>
      <div className="text-xs font-bold text-gray-500">{subtitle}</div>
    </div>
  </div>
);
