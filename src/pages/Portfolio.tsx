import { Helmet } from 'react-helmet-async';
import { Play, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  
  const projects = [
    {
      id: 1,
      title: "D2C Skincare Launch",
      subtitle: "AI Reels & Ads",
      category: "Influencer",
      brief: "Showcase of AI-powered product launch reels & paid ads.",
      video: "/videos/project1.mp4",
      fallbackImage: "bg-gradient-to-br from-pink-500 to-rose-600"
    },
    {
      id: 2,
      title: "Electronic Brand Growth",
      subtitle: "Explainers + Paid Social",
      category: "Video",
      brief: "Engaging product explainers + performance-driven paid ads.",
      video: "/videos/project2.mp4",
      fallbackImage: "bg-gradient-to-br from-blue-500 to-indigo-600"
    },
    {
      id: 3,
      title: "Jewelry Brand Enrollment",
      subtitle: "Virtual Influencer Funnel",
      category: "Influencer",
      brief: "AI virtual influencer campaign for storytelling + sales funnel.",
      video: "/videos/project3.mp4",
      fallbackImage: "bg-gradient-to-br from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Footwear Brand Awareness",
      subtitle: "UGC-style Ads at Scale",
      category: "Ads",
      brief: "UGC-inspired AI reels to boost awareness and conversions.",
      video: "/videos/project4.mp4",
      fallbackImage: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "Recipe Cooking Series",
      subtitle: "Motion Explainer",
      category: "Video",
      brief: "Motion-style explainers showcasing cooking recipes.",
      video: "/videos/project5.mp4",
      fallbackImage: "bg-gradient-to-br from-purple-500 to-violet-600"
    },
    {
      id: 6,
      title: "Quick Commerce Reels",
      subtitle: "Local Reels",
      category: "Reels",
      brief: "Location-based AI reels to drive food delivery conversions.",
      video: "/videos/project6.mp4",
      fallbackImage: "bg-gradient-to-br from-yellow-500 to-orange-600"
    }
  ];

  
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

     {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div key={project.id} className="glass-strong rounded-3xl overflow-hidden hover-lift">
                {/* Project Visual */}
                <div className={`relative ${project.fallbackImage ? project.fallbackImage : ''} flex items-center justify-center`}>
                  {project.video ? (
                    <video
                      src={project.video}
                      controls
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-auto rounded-lg shadow-lg"
                      style={{ maxHeight: 400 }} // Optional: limit max height for layout consistency
                    />
                  ) : (
                    <div className="w-full h-80 flex items-center justify-center text-white text-2xl font-bold opacity-70">
                      No preview available
                    </div>
                  )}
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