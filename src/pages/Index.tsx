
import Hero from "@/components/Hero";
import ProblemSolution from "@/components/ProblemSolution";
import Benefits from "@/components/Benefits";
import FeatureHighlights from "@/components/FeatureHighlights";
import Testimonials from "@/components/Testimonials";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Brain, ArrowRight } from "lucide-react";

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
        <section className="py-16 px-4 bg-gradient-to-br from-cerebrum-600 to-cerebrum-800">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Document Ecosystem?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Join forward-thinking organizations using Datablize's AI to automate workflows, extract intelligence, and eliminate manual document processing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-cerebrum-600 hover:bg-gray-100 group" asChild>
                <a href="mailto:sales@databliz.com?subject=AI%20Demo%20Request%20-%20Datablize">
                  Contact Sales for Demo
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-cerebrum-700" asChild>
                <a href="mailto:sales@databliz.com?subject=Enterprise%20Solutions%20Inquiry%20-%20Datablize">
                  Explore Enterprise Solutions
                </a>
              </Button>
            </div>
            <div className="mt-8 text-white/70 text-sm">
              Start with a personalized AI workflow assessment. No commitment required.
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
