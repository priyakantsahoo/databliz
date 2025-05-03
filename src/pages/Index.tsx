
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Benefits from "@/components/Benefits";
import FeatureHighlights from "@/components/FeatureHighlights";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <ProblemSolution />
        <Benefits />
        <FeatureHighlights />
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-cerebrum-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Document Management?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Join hundreds of businesses using Cerebrum to organize, secure, and extract intelligence from their documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-cerebrum-600 hover:bg-gray-100">
                Request a Demo
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-cerebrum-700">
                Explore Features
              </Button>
            </div>
            <div className="mt-8 text-white/70 text-sm">
              Get started with a free 14-day trial. No credit card required.
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
