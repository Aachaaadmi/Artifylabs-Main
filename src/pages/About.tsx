import { Helmet } from 'react-helmet-async';
import { Target, Lightbulb, Award, Zap, Database, TestTube, TrendingUp, Star, Cpu, Palette, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {

  const differentiators = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "AI-first production pipeline",
      description: "Every piece of content is created using cutting-edge AI tools, ensuring speed and consistency."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Speed without sacrificing craft",
      description: "We deliver high-quality creative work in record time without compromising on excellence."
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Data-driven creative testing",
      description: "Every creative decision is backed by performance data and continuous A/B testing."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Full-funnel thinking",
      description: "From awareness to conversion, we optimize every touchpoint in your customer journey."
    }
  ];

  const process = [
    { step: "Discover", description: "Goals, audience, offers" },
    { step: "Research", description: "Market analysis & competitor insights" },
    { step: "Create", description: "AI-powered content production" },
    { step: "Launch", description: "Multi-platform campaign deployment" },
    { step: "Optimise", description: "Data-driven performance improvements" }
  ];

  return (
    <>
      <Helmet>
        <title>About | ARTIFYLABS — Next‑Gen AI Marketing Studio</title>
        <meta name="description" content="Meet ARTIFYLABS. We combine AI pipelines and creative strategy to ship content that performs." />
      </Helmet>
      <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-5xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Next-gen marketing,
            </span>
            <span className="block">powered by AI and human creativity</span>
          </h1>
          <p className="font-body text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            We combine artificial intelligence with creative expertise to deliver 
            marketing campaigns that perform across all platforms.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-8">
            Our Mission
          </h2>
          <p className="font-body text-2xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            To empower brands with future-ready storytelling that performs across platforms
          </p>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentiators.map((item, index) => (
              <div key={index} className="glass rounded-2xl p-8 hover-lift">
                <div className="w-16 h-16 gradient-primary rounded-xl flex items-center justify-center mb-6 text-white">
                  {item.icon}
                </div>
                <h3 className="font-heading font-bold text-xl mb-4">
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

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Our Process
            </h2>
            <p className="font-body text-xl text-foreground/80">
              A proven 5-step approach to AI marketing success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-heading font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">
                  {step.step}
                </h3>
                <p className="font-body text-sm text-foreground/70">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Social Proof Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl lg:text-5xl mb-6">
              Client Testimonials
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                company: "TechStart Inc.",
                rating: 5,
                testimonial: "ARTIFYLABS transformed our marketing completely. The AI-generated content performs 3x better than our previous campaigns."
              },
              {
                name: "Mike Chen",
                company: "Growth Corp",
                rating: 5,
                testimonial: "Incredible results in just 30 days. Their AI influencer strategy helped us reach millions of potential customers."
              },
              {
                name: "Emily Rodriguez",
                company: "D2C Brand",
                rating: 5,
                testimonial: "The quality and speed of their video production is unmatched. We've seen 400% increase in engagement."
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-strong rounded-2xl p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="font-body text-foreground/80 mb-4">
                  "{testimonial.testimonial}"
                </p>
                <div>
                  <div className="font-heading font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="font-body text-sm text-foreground/70">
                    {testimonial.company}
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
            Ready to Work Together?
          </h2>
          <p className="font-body text-xl text-foreground/80 mb-8">
            Let's discuss how our expertise can help transform your business.
          </p>
          <Button 
            className="btn-primary text-lg px-8 py-4"
            onClick={() => window.open('https://calendar.app.google/xARZTwP2Ee8hMo6a9', '_blank')}
          >
            Book a Free Consultation
          </Button>
        </div>
      </section>
    </div>
    </>
  );
};

export default About;