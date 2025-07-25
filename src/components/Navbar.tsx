
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md py-4 border-b border-border">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/datablize-logo.svg" 
            alt="Datablize Logo" 
            className="w-10 h-10"
          />
          <span className="text-2xl font-display font-bold text-foreground">Datablize</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/features" className="text-foreground hover:text-cerebrum-700 font-medium transition-colors">
            Features
          </Link>
          <Link to="/use-cases" className="text-foreground hover:text-cerebrum-700 font-medium transition-colors">
            Use Cases
          </Link>
          <Link to="/pricing" className="text-foreground hover:text-cerebrum-700 font-medium transition-colors">
            Pricing
          </Link>
          <Link to="/security" className="text-foreground hover:text-cerebrum-700 font-medium transition-colors">
            Security
          </Link>
          <Button className="bg-cerebrum-600 hover:bg-cerebrum-700 text-white font-medium">
            <a href="mailto:sales@databliz.com?subject=Demo%20Request%20-%20Datablize" className="text-white no-underline">
              Contact Sales
            </a>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2" aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border shadow-md animate-fade-in">
          <div className="flex flex-col p-4 gap-4">
            <Link 
              to="/features" 
              className="p-2 text-foreground hover:text-cerebrum-700 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              to="/use-cases" 
              className="p-2 text-foreground hover:text-cerebrum-700 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Use Cases
            </Link>
            <Link 
              to="/pricing" 
              className="p-2 text-foreground hover:text-cerebrum-700 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/security" 
              className="p-2 text-foreground hover:text-cerebrum-700 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Security
            </Link>
            <div className="flex flex-col gap-2 mt-2 border-t border-border pt-4">
              <Button className="w-full justify-center bg-cerebrum-600 hover:bg-cerebrum-700">
                <a href="mailto:sales@databliz.com?subject=Demo%20Request%20-%20Datablize" className="text-white no-underline">
                  Contact Sales
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
