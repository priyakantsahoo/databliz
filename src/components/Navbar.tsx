
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md py-4 border-b border-border">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-cerebrum-600 to-cerebrum-800 rounded-full flex items-center justify-center">
            <Brain className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-display font-bold text-foreground">Cerebrum</span>
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
          <Button variant="ghost" className="text-foreground">
            Log In
          </Button>
          <Button className="bg-cerebrum-600 hover:bg-cerebrum-700 text-white font-medium">
            Request Demo
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
              <Button variant="outline" className="w-full justify-center">
                Log In
              </Button>
              <Button className="w-full justify-center bg-cerebrum-600 hover:bg-cerebrum-700">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
