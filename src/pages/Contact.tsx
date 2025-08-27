import { Helmet } from 'react-helmet-async';
import { Mail, MessageSquare, Calendar, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    budget: '',
    goals: [],
    message: '',
    consent: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      if (e.target.name === 'goals') {
        const value = target.value;
        setFormData({
          ...formData,
          goals: target.checked 
            ? [...formData.goals, value]
            : formData.goals.filter(goal => goal !== value)
        });
      } else {
        setFormData({
          ...formData,
          [e.target.name]: target.checked
        });
      }
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await fetch("https://script.google.com/macros/s/AKfycbykREAGsTlKz9FKrXqm8yBS_ObGzGCjgOZFBMWemrpyJ2yQ41VpiMX7z9quuYmqqpE1Jw/exec", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    // With no-cors, we can't check res.ok, so just show success
    setIsSubmitted(true);
  } catch (err) {
    console.error(err);
    alert("Network error. Try again later.");
  }
};


  const budgetRanges = [
    "₹25,000 - ₹50,000/month",
    "₹50,000 - ₹1,00,000/month", 
    "₹1,00,000 - ₹2,50,000/month",
    "₹2,50,000+/month",
    "Project-based pricing"
  ];

  const goalOptions = [
    "Increase brand awareness",
    "Drive more sales/conversions", 
    "Improve social media engagement",
    "Create viral content",
    "Launch new product/service",
    "Build AI marketing infrastructure",
    "Other"
  ];

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-strong rounded-3xl p-12">
            <div className="w-20 h-20 gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Send className="w-10 h-10 text-white" />
            </div>
            <h1 className="font-heading font-bold text-4xl mb-6">
              Thanks! Our team will get back within 24 hours.
            </h1>
            <p className="font-body text-xl text-foreground/80 mb-8">
              We've received your message and will respond with a tailored plan soon.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Send Another Message
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact | ARTIFYLABS — Book a Free Consultation</title>
        <meta name="description" content="Tell us about your goals and get a tailored plan. Email, WhatsApp, or book a call." />
      </Helmet>
      <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading font-bold text-5xl lg:text-6xl mb-6">
            Let's build your
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Growth Engine
            </span>
          </h1>
          <p className="font-body text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
            Tell us about your goals and we'll send a tailored plan to grow your brand with AI.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-strong rounded-3xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block font-body font-medium text-foreground mb-2">
                        Work Email *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-body font-medium text-foreground mb-2">
                        Company/Brand *
                      </label>
                      <Input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block font-body font-medium text-foreground mb-2">
                        Website/Handle
                      </label>
                      <Input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="yourwebsite.com or @handle"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body font-medium text-foreground mb-2">
                      Budget Range *
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-input rounded-lg bg-background text-foreground"
                    >
                      <option value="">Select your budget range...</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-body font-medium text-foreground mb-3">
                      Goals (select all that apply) *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {goalOptions.map((goal, index) => (
                        <label key={index} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="goals"
                            value={goal}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-primary rounded border-input focus:ring-primary"
                          />
                          <span className="font-body text-sm text-foreground/80">
                            {goal}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block font-body font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full"
                      placeholder="Tell us about your current marketing challenges and what you'd like to achieve..."
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleInputChange}
                      required
                      className="w-4 h-4 text-primary rounded border-input focus:ring-primary mt-1"
                    />
                    <label className="font-body text-sm text-foreground/80">
                      I agree to receive communications from ARTIFYLABS and understand that I can unsubscribe at any time. *
                    </label>
                  </div>

                  <Button type="submit" className="btn-primary w-full text-lg py-4">
                    Send My Growth Plan Request
                    <Send className="ml-2 w-5 h-5" />
                  </Button>
                </form>
              </div>
            </div>

            {/* Side Panel */}
            <div className="space-y-6">
              <div className="glass-strong rounded-2xl p-6">
                <h3 className="font-heading font-bold text-xl mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-body font-medium">Email</div>
                      <div className="font-body text-sm text-foreground/70">artifylabs01@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-body font-medium">WhatsApp</div>
                      <a href="https://wa.me/+919998133006"  className="font-body text-sm text-primary hover:underline">
                        Chat with us instantly
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-strong rounded-2xl p-6">
              <h3 className="font-heading font-bold text-xl mb-4">
             Book a Call
            </h3>
            <p className="font-body text-foreground/80 text-sm mb-4">
            Schedule a 30-minute strategy call to discuss your marketing goals.
            </p>
            <a 
            href="https://calendar.app.google/xARZTwP2Ee8hMo6a9" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-full"
          >
            <Button className="btn-primary w-full">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Now
            </Button>
          </a>
        </div>


              <div className="glass rounded-2xl p-6">
                <h3 className="font-heading font-bold text-lg mb-3">
                  What happens next?
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="font-body text-foreground/80">
                      We analyze your brand and current marketing
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="font-body text-foreground/80">
                      Create a custom AI marketing roadmap
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 gradient-primary rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="font-body text-foreground/80">
                      Send you a detailed proposal within 24 hours
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Contact;