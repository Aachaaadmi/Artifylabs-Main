import { Video, Play, Users, TrendingUp, BarChart3, Settings, MessageSquare, Image } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "AI Advertisement Video",
      description: "Smart, personalised ads built to convert.",
      benefits: ["Faster production", "Platform-native cutdowns", "Tested hooks"],
      whatYouGet: [
        "Script + AI voice or VO",
        "1x master (30–60s)",
        "3x cutdowns (6–15s)",
        "Captions",
        "Export pack (9:16, 1:1, 16:9)"
      ]
    },
    {
      icon: <Play className="w-8 h-8" />,
      title: "AI Marketing Video",
      description: "Explainers, promos, and brand stories powered by AI.",
      benefits: [],
      whatYouGet: [
        "Creative concept",
        "Storyboard",
        "60–90s video",
        "Thumbnail",
        "Subtitles"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Influencer",
      description: "Launch campaigns with a virtual AI influencer available 24/7.",
      benefits: [],
      whatYouGet: [
        "Character design",
        "8 posts/month",
        "4 stories/month",
        "2 short videos",
        "Usage rights for paid ads"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "AI Reels",
      description: "Trend-aligned reels for Insta/YouTube/TikTok.",
      benefits: [],
      whatYouGet: [
        "12 reels/month",
        "Hooks library",
        "Caption bank",
        "Hashtag sets",
        "Auto-subtitles"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Content Strategy",
      description: "AI-assisted research and messaging that targets the right audience.",
      benefits: [],
      whatYouGet: [
        "ICP + persona",
        "Messaging map",
        "90-day content calendar",
        "Channel plan"
      ]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Tailored Video Solutions",
      description: "Custom videos for launches, product demos, employer brand, UGC ads.",
      benefits: [],
      whatYouGet: [
        "Bespoke scope",
        "Motion graphics",
        "Voice, music licensing",
        "Deliverables mix"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Social Media Handling",
      description: "End-to-end management, posting, growth, and analytics.",
      benefits: [],
      whatYouGet: [
        "20 posts/month",
        "4 reels/month",
        "Comment moderation",
        "Monthly report"
      ]
    },
    {
      icon: <Image className="w-8 h-8" />,
      title: "Social Media Creatives",
      description: "Scroll-stopping graphics and carousels.",
      benefits: [],
      whatYouGet: [
        "12 static creatives/month",
        "Editable source files",
        "A/B variants for ads"
      ]
    }
  ];

  return (
    <>
      {/* Sticky CTA */}
      <div className="fixed bottom-4 right-4 z-50">
        <Link to="/contact">
          <Button className="btn-primary shadow-lg hover:shadow-xl transition-shadow">
            Get a Custom Proposal
          </Button>
        </Link>
      </div>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 gradient-hero">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="font-heading font-bold text-5xl lg:text-6xl mb-6">
              AI-Powered Marketing
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="font-body text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
              From AI advertisement videos to virtual influencers - we create future-ready content that converts.
            </p>
            <Button 
            className="btn-primary text-lg px-8 py-4"
            onClick={() => window.open('https://calendar.app.google/xARZTwP2Ee8hMo6a9', '_blank')}
          >
              Schedule Free Consultation
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="glass-strong rounded-2xl p-8 hover-lift">
                  <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-6 text-white">
                    {service.icon}
                  </div>
                  
                  <h3 className="font-heading font-semibold text-2xl mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="font-body text-foreground/80 mb-6">
                    {service.description}
                  </p>
                  
                  {/* Benefits */}
                  {service.benefits.length > 0 && (
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {service.benefits.map((benefit, idx) => (
                          <span key={idx} className="font-body text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* What You Get */}
                  <div className="mb-6">
                    <h4 className="font-heading font-semibold text-sm text-primary mb-3 uppercase tracking-wider">
                      What You Get
                    </h4>
                    <ul className="space-y-2">
                      {service.whatYouGet.map((item, idx) => (
                        <li key={idx} className="font-body text-sm text-foreground/70 flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/contact">
                    <Button variant="outline" className="btn-glass w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
                How We Deliver Results
              </h2>
              <p className="font-body text-xl text-foreground/80 max-w-3xl mx-auto">
                Our streamlined process ensures every project is executed with precision and creativity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", description: "We analyze your brand, audience, and goals to create the perfect strategy" },
                { step: "02", title: "Creative", description: "Our AI tools and creative team develop compelling content concepts" },
                { step: "03", title: "Production", description: "We produce high-quality videos, graphics, and campaigns using cutting-edge AI" },
                { step: "04", title: "Optimization", description: "Continuous monitoring and refinement to maximize engagement and ROI" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading font-bold text-white text-lg">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    {item.title}
                  </h3>
                  <p className="font-body text-foreground/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Ready to Scale with AI?
            </h2>
            <p className="font-body text-xl text-foreground/80 mb-8">
              Let's create a custom proposal tailored to your brand's needs and goals.
            </p>
            <Link to="/contact">
              <Button className="btn-primary text-lg px-8 py-4">
                Get a Custom Proposal
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;