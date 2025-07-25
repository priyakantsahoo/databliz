import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Users,
  Building,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { useState } from "react";

const contactReasons = [
  { value: "demo", label: "Request a Demo", icon: Zap },
  { value: "pricing", label: "Pricing Information", icon: Building },
  { value: "security", label: "Security Inquiry", icon: Shield },
  { value: "enterprise", label: "Enterprise Solutions", icon: Users },
  { value: "support", label: "Technical Support", icon: MessageSquare },
  { value: "partnership", label: "Partnership Opportunities", icon: Building },
  { value: "other", label: "Other", icon: Mail }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    reason: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const generateEmailSubject = () => {
    const reasonLabel = contactReasons.find(r => r.value === formData.reason)?.label || "General Inquiry";
    return `${reasonLabel} - ${formData.company || "Datablize"}`;
  };

  const generateEmailBody = () => {
    return `Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Phone: ${formData.phone}
Inquiry Type: ${contactReasons.find(r => r.value === formData.reason)?.label || "General"}

Message:
${formData.message}

---
Sent from Datablize Contact Form`;
  };

  const handleSubmit = () => {
    const subject = encodeURIComponent(generateEmailSubject());
    const body = encodeURIComponent(generateEmailBody());
    window.location.href = `mailto:sales@datablize.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-cerebrum-50 to-white">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cerebrum-100 rounded-full mb-6">
              <Mail className="h-8 w-8 text-cerebrum-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get in <span className="text-cerebrum-600">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Ready to transform your document management with AI? Our team is here to help you get started 
              with Datablize's intelligent solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex items-center px-4 py-2 bg-green-50 rounded-full border border-green-200">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm font-medium text-green-800">Free Consultation</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                <Clock className="h-4 w-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-800">24-hour Response Time</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-purple-50 rounded-full border border-purple-200">
                <Users className="h-4 w-4 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-purple-800">Expert Support Team</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {/* Quick Contact */}
              <Card className="lg:col-span-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-cerebrum-600" />
                    Quick Contact
                  </CardTitle>
                  <CardDescription>
                    Get in touch directly for immediate assistance
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Mail className="h-5 w-5 text-cerebrum-600 mt-1" />
                    <div>
                      <p className="font-medium">Sales & General Inquiries</p>
                      <a 
                        href="mailto:sales@datablize.com" 
                        className="text-cerebrum-600 hover:text-cerebrum-700 text-sm"
                      >
                        sales@datablize.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <Clock className="h-5 w-5 text-cerebrum-600 mt-1" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-sm text-muted-foreground">Within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <MapPin className="h-5 w-5 text-cerebrum-600 mt-1" />
                    <div>
                      <p className="font-medium">Global Support</p>
                      <p className="text-sm text-muted-foreground">Available worldwide</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Form */}
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        placeholder="Acme Corporation"
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="space-y-2 mb-4">
                    <Label htmlFor="reason">How can we help you? *</Label>
                    <Select value={formData.reason} onValueChange={(value) => handleInputChange("reason", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        {contactReasons.map((reason) => (
                          <SelectItem key={reason.value} value={reason.value}>
                            <div className="flex items-center gap-2">
                              <reason.icon className="h-4 w-4" />
                              {reason.label}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2 mb-6">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your needs, current challenges, or questions..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>

                  <Button 
                    onClick={handleSubmit}
                    className="w-full bg-cerebrum-600 hover:bg-cerebrum-700 text-white font-medium group"
                    disabled={!formData.name || !formData.email || !formData.reason || !formData.message}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  
                  <p className="text-xs text-muted-foreground mt-2">
                    * Required fields. By submitting this form, you agree to our privacy policy.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Reasons */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Can We Help You With?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Our expert team is ready to assist with all your Datablize needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactReasons.slice(0, 6).map((reason, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer" 
                      onClick={() => handleInputChange("reason", reason.value)}>
                  <CardHeader className="text-center">
                    <div className="w-12 h-12 bg-cerebrum-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <reason.icon className="h-6 w-6 text-cerebrum-600" />
                    </div>
                    <CardTitle className="text-lg">{reason.label}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-sm text-muted-foreground">
                      {reason.value === "demo" && "See Datablize in action with a personalized demonstration"}
                      {reason.value === "pricing" && "Get detailed pricing information for your specific needs"}
                      {reason.value === "security" && "Learn about our enterprise-grade security features"}
                      {reason.value === "enterprise" && "Explore custom solutions for large organizations"}
                      {reason.value === "support" && "Get technical help and support for existing users"}
                      {reason.value === "partnership" && "Discuss integration and partnership opportunities"}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="text-left">
                <h3 className="font-semibold mb-2">How quickly will I hear back?</h3>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours during business days.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-2">Is there a free trial available?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes! Contact us to set up a free trial tailored to your needs.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-2">Do you offer enterprise pricing?</h3>
                <p className="text-sm text-muted-foreground">
                  Absolutely. We have custom pricing plans for enterprise customers.
                </p>
              </div>
              <div className="text-left">
                <h3 className="font-semibold mb-2">Can I schedule a demo?</h3>
                <p className="text-sm text-muted-foreground">
                  Yes, we offer personalized demos. Select "Request a Demo" in the form above.
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

export default Contact;