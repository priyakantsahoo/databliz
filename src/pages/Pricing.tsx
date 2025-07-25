import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Wrench, 
  Mail, 
  Phone, 
  Calendar, 
  Sparkles, 
  Zap, 
  ArrowRight,
  Clock,
  Cog,
  Coffee,
  Lightbulb,
  Users,
  Building,
  Rocket
} from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-cerebrum-50 to-white">
          <div className="container mx-auto text-center">
            <div className="max-w-4xl mx-auto">
              {/* Animated Construction Icon */}
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-cerebrum-100 rounded-full mb-8">
                <Wrench className="h-12 w-12 text-cerebrum-600 animate-pulse" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="h-3 w-3 text-yellow-800" />
                </div>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-cerebrum-600">Pricing Plans</span> in Progress
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Our team is crafting the perfect pricing structure that delivers maximum value for your investment. 
                We're building something amazing — tailored solutions for every business size.
              </p>

              {/* Progress Indicators */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center px-4 py-2 bg-green-50 rounded-full border border-green-200">
                  <Clock className="h-4 w-4 text-green-600 mr-2" />
                  <span className="text-sm font-medium text-green-800">Market Research Complete</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                  <Cog className="h-4 w-4 text-blue-600 mr-2 animate-spin" />
                  <span className="text-sm font-medium text-blue-800">Pricing Models in Development</span>
                </div>
                <div className="flex items-center px-4 py-2 bg-yellow-50 rounded-full border border-yellow-200">
                  <Coffee className="h-4 w-4 text-yellow-600 mr-2" />
                  <span className="text-sm font-medium text-yellow-800">Late Nights & Hard Work</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Coming Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What We're Building</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A pricing structure that grows with you, from startup to enterprise scale.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Tier Preview */}
              <Card className="relative overflow-hidden border-2 border-dashed border-cerebrum-200 hover:border-cerebrum-400 transition-colors">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-cerebrum-100 rounded-full flex items-center justify-center">
                    <Lightbulb className="h-4 w-4 text-cerebrum-600" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Starter</CardTitle>
                  <CardDescription className="text-center">Perfect for small teams</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-4xl font-bold text-cerebrum-600">Coming Soon</div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>✨ Essential document management</p>
                    <p>🤖 Basic AI automation</p>
                    <p>👥 Team collaboration tools</p>
                    <p>📊 Standard analytics</p>
                  </div>
                </CardContent>
              </Card>

              {/* Professional Tier Preview */}
              <Card className="relative overflow-hidden border-2 border-dashed border-cerebrum-200 hover:border-cerebrum-400 transition-colors">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-cerebrum-100 rounded-full flex items-center justify-center">
                    <Users className="h-4 w-4 text-cerebrum-600" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Professional</CardTitle>
                  <CardDescription className="text-center">For growing businesses</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-4xl font-bold text-cerebrum-600">In Development</div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>🚀 Advanced AI workflows</p>
                    <p>🔒 Enhanced security features</p>
                    <p>📈 Advanced analytics & insights</p>
                    <p>🔗 Third-party integrations</p>
                  </div>
                </CardContent>
              </Card>

              {/* Enterprise Tier Preview */}
              <Card className="relative overflow-hidden border-2 border-dashed border-cerebrum-200 hover:border-cerebrum-400 transition-colors">
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-cerebrum-100 rounded-full flex items-center justify-center">
                    <Building className="h-4 w-4 text-cerebrum-600" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Enterprise</CardTitle>
                  <CardDescription className="text-center">Custom solutions at scale</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <div className="text-4xl font-bold text-cerebrum-600">Crafting Magic</div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>🏢 White-label solutions</p>
                    <p>🛡️ Enterprise-grade security</p>
                    <p>📞 Dedicated support team</p>
                    <p>⚙️ Custom integrations</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Sales Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-cerebrum-600 to-cerebrum-800 text-white">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Business?
              </h2>
              
              <p className="text-lg text-white/80 mb-8">
                Don't wait for the pricing page! Our sales team is ready to create a custom solution 
                that fits your needs and budget perfectly. Let's build something amazing together.
              </p>

              {/* Contact Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <Mail className="h-8 w-8 text-white mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Email Our Sales Team</h3>
                  <a 
                    href="mailto:sales@datablize.com" 
                    className="text-white/80 hover:text-white transition-colors break-all"
                  >
                    sales@datablize.com
                  </a>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <Calendar className="h-8 w-8 text-white mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Schedule a Demo</h3>
                  <p className="text-white/80 text-sm">
                    Book a personalized demo and get custom pricing
                  </p>
                </div>
                
                <div className="bg-white/10 rounded-xl p-6 hover:bg-white/20 transition-colors">
                  <Phone className="h-8 w-8 text-white mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Quick Consultation</h3>
                  <p className="text-white/80 text-sm">
                    15-minute call to discuss your needs
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-cerebrum-600 hover:bg-gray-100 font-medium group"
                  onClick={() => window.location.href = 'mailto:sales@datablize.com?subject=Pricing%20Inquiry%20-%20Datablize'}
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Sales Team
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-white border-white hover:bg-cerebrum-700"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Demo
                </Button>
              </div>

              <div className="mt-8 text-white/60 text-sm">
                💡 Pro tip: Mention your team size and use case for faster, more accurate pricing!
              </div>
            </div>
          </div>
        </section>

        {/* Behind the Scenes Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Behind the Scenes</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6">
                <div className="w-12 h-12 bg-cerebrum-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-cerebrum-600" />
                </div>
                <h3 className="font-semibold mb-2">Analyzing Competitors</h3>
                <p className="text-sm text-muted-foreground">
                  Studying the market to offer the best value proposition
                </p>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-cerebrum-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-cerebrum-600" />
                </div>
                <h3 className="font-semibold mb-2">Customer Interviews</h3>
                <p className="text-sm text-muted-foreground">
                  Understanding what pricing model works best for you
                </p>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-cerebrum-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cog className="h-6 w-6 text-cerebrum-600" />
                </div>
                <h3 className="font-semibold mb-2">Building Flexibility</h3>
                <p className="text-sm text-muted-foreground">
                  Creating plans that scale with your business growth
                </p>
              </div>
              
              <div className="p-6">
                <div className="w-12 h-12 bg-cerebrum-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-cerebrum-600" />
                </div>
                <h3 className="font-semibold mb-2">Adding Value</h3>
                <p className="text-sm text-muted-foreground">
                  Ensuring every dollar spent delivers maximum ROI
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;