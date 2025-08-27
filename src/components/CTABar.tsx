import { X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const CTABar = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 glass-strong border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-body font-medium text-foreground">
              Ready to grow with AI? Book a Free Consultation
            </span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button 
              className="btn-primary"
              onClick={() => window.open('https://calendar.app.google/xARZTwP2Ee8hMo6a9', '_blank')}
            >

              Get Started
            </Button>
            <button
              onClick={() => setIsVisible(false)}
              className="p-2 hover:bg-surface rounded-lg transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTABar;