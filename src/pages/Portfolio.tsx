import { Helmet } from 'react-helmet-async';
import { Play, Filter, ExternalLink, Video, Users, Palette, TrendingUp, Briefcase, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Video', 'Reels', 'Influencer', 'Creatives', 'Strategy'];
  
  const projects = [
    {
      id: 1,
      title: "D2C Skincare Launch",
      subtitle: "AI Reels & Ads",
      category: "Reels",
      brief: "Launch a new skincare brand targeting Gen Z consumers with authentic, educational content.",
      approach: "Created AI-generated reels showcasing real results, user testimonials, and ingredient education using trending audio and visual styles.",
      deliverables: ["15 AI-generated reels", "5 paid ad variations", "Content calendar", "Hashtag strategy"],
      results: [
        { metric: "Reach", value: "2.8M views" },
        { metric: "Engagement", value: "+340%" },
        { metric: "Conversions", value: "+180%" },
        { metric: "ROAS", value: "4.2x" }
      ],
      image: "bg-gradient-to-br from-pink-500 to-rose-600"
    },
    {
      id: 2,
      title: "Fintech App Growth",
      subtitle: "Explainers + Paid Social",
      category: "Video",
      brief: "Increase app downloads and user engagement for a fintech startup targeting millennials.",
      approach: "Developed AI-powered explainer videos and social campaigns focusing on financial literacy and app benefits.",
      deliverables: ["3 explainer videos", "10 social ad creatives", "Landing page videos", "Email sequences"],
      results: [
        { metric: "App Downloads", value: "+250%" },
        { metric: "User Retention", value: "+120%" },
        { metric: "CPA Reduction", value: "45%" },
        { metric: "LTV Increase", value: "+190%" }
      ],
      image: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      id: 3,
      title: "EduTech Enrollment",
      subtitle: "Virtual Influencer Funnel",
      category: "Influencer",
      brief: "Drive course enrollments using a virtual AI influencer to build trust and authority.",
      approach: "Created a virtual AI influencer persona that shared educational content and student success stories across social platforms.",
      deliverables: ["AI influencer character", "20 posts/month", "Story campaigns", "Live Q&A sessions"],
      results: [
        { metric: "Enrollments", value: "+320%" },
        { metric: "Engagement Rate", value: "8.2%" },
        { metric: "Course Completion", value: "+85%" },
        { metric: "Referrals", value: "+150%" }
      ],
      image: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Fitness Wearables",
      subtitle: "UGC-style Ads at Scale",
      category: "Video",
      brief: "Create authentic user-generated content style advertisements for fitness wearables.",
      approach: "Used AI to generate realistic user testimonials and workout scenarios, maintaining authenticity while scaling production.",
      deliverables: ["25 UGC-style videos", "A/B test variants", "Platform adaptations", "Performance tracking"],
      results: [
        { metric: "CTR Improvement", value: "+280%" },
        { metric: "Conversion Rate", value: "+165%" },
        { metric: "Ad Spend Efficiency", value: "+220%" },
        { metric: "Brand Trust", value: "+140%" }
      ],
      image: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "SaaS Feature Launch",
      subtitle: "Motion Explainer",
      category: "Video",
      brief: "Explain complex software features through engaging motion graphics and AI voiceover.",
      approach: "Developed animated explainer videos with AI-generated scripts and voiceovers, breaking down complex features into digestible content.",
      deliverables: ["5 motion explainers", "Interactive demos", "Help center videos", "Social cutdowns"],
      results: [
        { metric: "Feature Adoption", value: "+380%" },
        { metric: "Support Tickets", value: "-65%" },
        { metric: "User Satisfaction", value: "+200%" },
        { metric: "Trial Conversions", value: "+145%" }
      ],
      image: "bg-gradient-to-br from-purple-500 to-violet-600"
    },
    {
      id: 6,
      title: "Restaurant Cloud Kitchen",
      subtitle: "Local Reels",
      category: "Reels",
      brief: "Drive local food orders through location-specific, appetite-appealing reel content.",
      approach: "Created AI-generated food photography and recipe reels optimized for local search and delivery platforms.",
      deliverables: ["30 food reels/month", "Local SEO content", "Menu highlights", "Seasonal campaigns"],
      results: [
        { metric: "Order Volume", value: "+290%" },
        { metric: "Local Reach", value: "+350%" },
        { metric: "Customer Acquisition", value: "+175%" },
        { metric: "Average Order Value", value: "+85%" }
      ],
      image: "bg-gradient-to-br from-yellow-500 to-orange-600"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Portfolio | ARTIFYLABS — Case Studies & Results</title>
        <meta name="description" content="See how AI‑powered content drives growth. Explore case studies across video, reels, influencers, and creatives." />
      </Helmet>
      <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-5xl lg:text-6xl mb-6">
            Our
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          <p className="font-body text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Real projects, real results. See how we've helped brands grow with AI-powered marketing campaigns.
          </p>
          <div className="inline-flex items-center bg-white/10 rounded-full p-1 backdrop-blur-sm">
            <span className="px-4 py-2 font-body text-sm text-foreground/70">
              Some projects are anonymised or mocked for confidentiality
            </span>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-body font-medium transition-all ${
                  activeFilter === filter
                    ? 'gradient-primary text-white shadow-lg'
                    : 'glass-strong hover:bg-white/20 text-foreground/80 hover:text-foreground'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="glass-strong rounded-3xl overflow-hidden hover-lift">
                {/* Project Visual */}
                <div className={`relative h-56 ${project.image} flex items-center justify-center`}>
                  <div className="text-white text-center">
                    <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                      <Play className="w-8 h-8" />
                    </div>
                    <div className="font-body text-sm opacity-80">
                      Reel/GIF Placeholder
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-white text-xs font-medium">
                    {project.category}
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8">
                  <h3 className="font-heading font-bold text-2xl mb-2">
                    {project.title}
                  </h3>
                  <p className="font-body text-primary font-medium mb-6">
                    {project.subtitle}
                  </p>

                   {/* Brief */}
                  <div>
                    <h4 className="font-heading font-semibold text-sm text-primary mb-2 flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      BRIEF
                    </h4>
                    <p className="font-body text-foreground/80 text-sm">
                      {project.brief}
                    </p>
                  </div>

        
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="font-body text-xl text-foreground/80 mb-8">
            Let's discuss how we can achieve similar results for your business.
          </p>
          <Button className="btn-primary text-lg px-8 py-4">
            Start Your Success Story
          </Button>
        </div>
      </section>
    </div>
    </>
  );
};

export default Portfolio;