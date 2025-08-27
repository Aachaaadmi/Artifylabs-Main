import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center pt-20">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 gradient-primary rounded-full mx-auto mb-8 flex items-center justify-center">
          <span className="font-heading font-bold text-4xl text-white">404</span>
        </div>
        <h1 className="font-heading font-bold text-4xl mb-4">Page Not Found</h1>
        <p className="font-body text-xl text-foreground/80 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="btn-primary inline-flex items-center px-6 py-3 rounded-xl font-medium text-white hover-lift"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
