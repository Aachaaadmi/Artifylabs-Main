import { Helmet } from 'react-helmet-async';

const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Terms of Service - ARTIFYLABS</title>
        <meta name="description" content="Terms of Service for ARTIFYLABS - Learn about our service terms and conditions." />
      </Helmet>
      
      <div className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-heading font-bold text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="font-body text-xl text-foreground/80 max-w-2xl mx-auto">
              Welcome to ARTIFYLABS. By using our website and services, you agree to the following terms:
            </p>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-card rounded-2xl p-8 shadow-subtle border">
              <h2 className="font-heading font-semibold text-2xl mb-4 text-primary">1. Services</h2>
              <ul className="space-y-2 mb-6 font-body text-foreground/80">
                <li>ARTIFYLABS provides AI-powered marketing services, including video creation, influencer content, social media creatives, and strategy.</li>
                <li>Deliverables are defined per project or package agreed upon with the client.</li>
              </ul>

              <h2 className="font-heading font-semibold text-2xl mb-4 text-primary">2. Payments</h2>
              <ul className="space-y-2 mb-6 font-body text-foreground/80">
                <li>All payments are due as per agreed timelines.</li>
                <li>Add-on services will be charged separately.</li>
                <li>No refunds once a project or campaign has started.</li>
              </ul>

              <h2 className="font-heading font-semibold text-2xl mb-4 text-primary">3. Client Responsibilities</h2>
              <ul className="space-y-2 mb-6 font-body text-foreground/80">
                <li>Provide necessary brand assets, content, and approvals on time.</li>
                <li>Ensure all information shared is accurate and legally owned.</li>
              </ul>

              <h2 className="font-heading font-semibold text-2xl mb-4 text-primary">4. Intellectual Property</h2>
              <ul className="space-y-2 mb-6 font-body text-foreground/80">
                <li>Final deliverables created by ARTIFYLABS belong to the client once full payment is made.</li>
                <li>ARTIFYLABS may showcase completed work in its portfolio unless the client requests otherwise.</li>
              </ul>

              <h2 className="font-heading font-semibold text-2xl mb-4 text-primary">5. Limitation of Liability</h2>
              <ul className="space-y-2 mb-6 font-body text-foreground/80">
                <li>ARTIFYLABS is not responsible for indirect losses (e.g., sales drop, algorithm changes).</li>
                <li>Our responsibility is limited to the value of the service provided.</li>
              </ul>

              <h2 className="font-heading font-semibold text-2xl mb-4 text-primary">6. Changes to Terms</h2>
              <p className="mb-6 font-body text-foreground/80">
                We may update these Terms at any time. Continued use of our services means acceptance of updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;