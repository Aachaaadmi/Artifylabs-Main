import { Helmet } from 'react-helmet-async';

const Privacy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - ARTIFYLABS</title>
        <meta name="description" content="Privacy Policy for ARTIFYLABS - Learn how we collect, use, and protect your information." />
      </Helmet>
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="font-body text-xl text-foreground/80 max-w-2xl mx-auto">
              At ARTIFYLABS, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-2xl p-8 shadow-subtle border">
              <h2 className="font-heading font-semibold text-2xl mb-4 text-primary">1. Information We Collect</h2>
              <ul className="space-y-2 mb-6 font-body text-foreground/80">
                <li>Personal details (name, email, phone number) when you contact us or fill forms.</li>
                <li>Business/project details you share with us to provide services.</li>
                <li>Usage data (cookies, analytics) to improve website performance.</li>
              </ul>

              <h2 className="font-heading font-semibold text-2xl mb-4 text-primary">2. How We Use Your Information</h2>
              <ul className="space-y-2 mb-6 font-body text-foreground/80">
                <li>To deliver AI marketing, content, and social media services.</li>
                <li>To respond to inquiries and provide customer support.</li>
                <li>To send updates, offers, or marketing emails (you can unsubscribe anytime).</li>
                <li>To improve our services and website.</li>
              </ul>

              <h2 className="font-heading font-semibold text-2xl mb-4 text-primary">3. Sharing of Information</h2>
              <ul className="space-y-2 mb-6 font-body text-foreground/80">
                <li>We do not sell your data to third parties.</li>
                <li>We may share information with trusted service providers (e.g., hosting, analytics) strictly to operate our business.</li>
              </ul>

              <h2 className="font-heading font-semibold text-2xl mb-4 text-primary">4. Data Security</h2>
              <p className="mb-6 font-body text-foreground/80">
                We use reasonable security measures to protect your personal information.
              </p>

              <h2 className="font-heading font-semibold text-2xl mb-4 text-primary">5. Your Rights</h2>
              <p className="mb-6 font-body text-foreground/80">
                You can request access, correction, or deletion of your data at any time by contacting us.
              </p>

              <div className="bg-primary/10 rounded-lg p-6 mt-8">
                <p className="font-body text-foreground/80">
                  📧 For privacy questions, contact: <a href="mailto:artifylabs01@gmail.com" className="text-primary hover:underline">artifylabs01@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;