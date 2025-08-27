import { Helmet } from 'react-helmet-async';
import { ArrowRight, Video, Users, TrendingUp, BarChart3, ChevronDown, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const serviceHighlights = [
    {
      icon: <Video className="w-6 h-6" />,
      title: "AI Advertisement Videos",
      description: "High-impact ads for YouTube, Instagram, Facebook."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Virtual AI Influencers",
      description: "Always-on, scalable brand ambassadors."
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "AI Reels & Shorts",
      description: "Trend-driven content optimised for engagement."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data-Driven Content Strategy",
      description: "Insights that guide winning campaigns."
    }
  ];

  const workSteps = [
    {
      number: "01",
      title: "Discover",
      description: "Goals, audience, offers."
    },
    {
      number: "02", 
      title: "Design",
      description: "Scripts, storyboards, creative direction."
    },
    {
      number: "03",
      title: "Deploy", 
      description: "Publish, iterate, scale with analytics."
    }
  ];

  const faqs = [
    {
      question: "Do you work with small businesses?",
      answer: "Yes. We have Starter and Growth plans designed for early-stage brands."
    },
    {
      question: "Can you use our existing footage?",
      answer: "Absolutely. We can repurpose existing assets and enhance them with AI."
    },
    {
      question: "How fast can we launch?",
      answer: "Typical turnaround is 7–14 days depending on scope."
    }
  ];

  const trustLogos = [ "D2C", "Cosmetcis"  ,"Edtech", "HealthCare"];

  return (
    <>
      <Helmet>
        <title>ARTIFYLABS | AI Marketing Studio for Video, Reels & Growth</title>
        <meta name="description" content="We blend AI + creativity to deliver ad videos, reels, influencers, and social media that convert. Book a free strategy call." />
      </Helmet>
      <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-heading font-bold text-5xl lg:text-7xl leading-tight mb-6">
                UNLEASH THE POWER OF
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  AI DRIVEN CONTENT 
                
                </span>
    
              </h1>
              <p className="font-body text-xl text-foreground/80 mb-8 max-w-lg">
                Smarter marketing. Faster results. Future-ready content.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
            className="btn-primary text-lg px-8 py-4"
            onClick={() => window.open('https://calendar.app.google/xARZTwP2Ee8hMo6a9', '_blank')}
          >
                  Book a Free Consultation  
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="btn-glass text-lg px-8 py-4">
                  Let's Build Your Campaign
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 glass rounded-3xl overflow-hidden float">
                <video 
                  className="w-full h-full object-cover rounded-3xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src="/videos/video.mp4" type="video/mp4" />
                  <source src="/videos/your-reel.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust/Proof Strip */}
      <section className="py-12 bg-surface/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="font-body text-foreground/60 text-sm uppercase tracking-wider">Trusted by</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {trustLogos.map((logo, index) => (
              <div key={index} className="text-center">
                <div className="h-12 glass-strong rounded-lg flex items-center justify-center">
                  <span className="font-heading font-semibold text-foreground/80">{logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Our AI-Powered Services
            </h2>
            <p className="font-body text-xl text-foreground/80 max-w-3xl mx-auto">
              Transform your brand with cutting-edge AI marketing solutions designed for the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceHighlights.map((service, index) => (
              <div key={index} className="glass-strong rounded-2xl p-8 hover-lift">
                <div className="w-12 h-12 gradient-primary rounded-xl flex items-center justify-center mb-6 text-white">
                  {service.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4">
                  {service.title}
                </h3>
                <p className="font-body text-foreground/80">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              How We Work
            </h2>
            <p className="font-body text-xl text-foreground/80">
              Our streamlined process delivers results in three focused phases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="font-heading font-bold text-2xl text-white">{step.number}</span>
                </div>
                <h3 className="font-heading font-semibold text-2xl mb-4">
                  {step.title}
                </h3>
                <p className="font-body text-foreground/80 text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Snapshot */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Results That Speak
            </h2>
            <p className="font-body text-xl text-foreground/80">
              Real metrics from our recent campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { metric: "+3.1×", label: "ROAS on paid social" },
              { metric: "42%", label: "higher reel engagement" },
              { metric: "27%", label: "lower CPA in 30 days" }
            ].map((result, index) => (
              <div key={index} className="text-center glass-strong rounded-2xl p-8">
                <div className="font-heading font-bold text-4xl lg:text-5xl text-primary mb-2">
                  {result.metric}
                </div>
                <div className="font-body text-foreground/80 text-lg">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-xl text-foreground/80">
              Get answers to common questions about our AI marketing services.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="glass-strong rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-surface/50 transition-colors"
                >
                  <h3 className="font-heading font-semibold text-lg pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === index && (
                  <div className="px-8 pb-6">
                    <p className="font-body text-foreground/80">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
            Ready to grow with AI?
          </h2>
          <p className="font-body text-xl text-foreground/80 mb-8">
            Book a free strategy call and get a custom roadmap for your brand.
          </p>
          <Button 
            className="btn-primary text-lg px-8 py-4"
            onClick={() => window.open('https://calendar.app.google/xARZTwP2Ee8hMo6a9', '_blank')}
          >
            Book a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </div>
    </>
  );
};

export default Home;