import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Lock, 
  Key, 
  Eye, 
  Database, 
  Globe, 
  Clock, 
  Users, 
  Server, 
  CheckCircle,
  Zap,
  BarChart3,
  Fingerprint,
  AlertTriangle,
  ArrowRight,
  Building
} from "lucide-react";

const securityFeatures = [
  {
    icon: Shield,
    title: "Multi-Tenant Authentication",
    description: "Isolated user spaces per client application with enterprise-grade security boundaries.",
    features: ["Client isolation", "Secure tenant management", "Cross-tenant protection", "Scalable architecture"]
  },
  {
    icon: Key,
    title: "JWT-Based Security",
    description: "Stateless authentication with industry-standard JSON Web Tokens and configurable expiration.",
    features: ["HS512 algorithm", "1-hour token expiration", "Secure token rotation", "Stateless sessions"]
  },
  {
    icon: Lock,
    title: "Advanced Password Security",
    description: "BCrypt hashing with salt and configurable complexity requirements for maximum protection.",
    features: ["BCrypt encryption", "Salt-based hashing", "Password complexity rules", "Secure storage"]
  },
  {
    icon: Eye,
    title: "Comprehensive Audit Logging",
    description: "Full forensic data capture with geolocation tracking for complete security visibility.",
    features: ["Activity monitoring", "Geolocation tracking", "Forensic data capture", "Real-time logging"]
  },
  {
    icon: AlertTriangle,
    title: "Rate Limiting Protection",
    description: "Built-in brute force protection with configurable limits and automatic blocking.",
    features: ["5 attempts per 5 minutes", "IP-based blocking", "Client-level protection", "Automatic recovery"]
  },
  {
    icon: Database,
    title: "Session Management",
    description: "Active session tracking with secure deactivation and comprehensive session control.",
    features: ["Active session tracking", "Secure deactivation", "Session analytics", "Multi-device support"]
  }
];

const enterpriseFeatures = [
  {
    icon: Building,
    title: "Enterprise SSO Integration",
    description: "Seamlessly integrate with existing enterprise identity providers and directory services."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights into authentication patterns, security events, and user behavior analytics."
  },
  {
    icon: Globe,
    title: "Global Deployment",
    description: "Multi-region deployment capabilities with geo-redundancy and compliance support."
  },
  {
    icon: Fingerprint,
    title: "Biometric Authentication",
    description: "Modern authentication methods including fingerprint, face recognition, and hardware keys."
  }
];

const complianceStandards = [
  { name: "SOC 2 Type II", status: "Certified" },
  { name: "ISO 27001", status: "Compliant" },
  { name: "GDPR", status: "Compliant" },
  { name: "HIPAA", status: "Ready" },
  { name: "PCI DSS", status: "Certified" },
  { name: "FedRAMP", status: "In Progress" }
];

const Security = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-cerebrum-50 to-white">
          <div className="container mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-cerebrum-100 rounded-full mb-8">
              <Shield className="h-10 w-10 text-cerebrum-600" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise-Grade <span className="text-cerebrum-600">Security</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Datablize's Guardian Authentication Service provides comprehensive identity and security solutions 
              for enterprise applications with military-grade protection and compliance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex items-center px-4 py-2 bg-green-50 rounded-full border border-green-200">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                <span className="text-sm font-medium text-green-800">Zero-Trust Architecture</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                <Zap className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-800">Real-Time Monitoring</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-purple-50 rounded-full border border-purple-200">
                <Globe className="h-5 w-5 text-purple-600 mr-2" />
                <span className="text-sm font-medium text-purple-800">Global Compliance</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-cerebrum-600 hover:bg-cerebrum-700 text-white font-medium group">
                Schedule Security Assessment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-cerebrum-600 text-cerebrum-600 hover:bg-cerebrum-50">
                View Security Documentation
              </Button>
            </div>
          </div>
        </section>

        {/* Core Security Features */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Guardian Authentication Core</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built on proven security frameworks with enterprise-grade features that protect your most valuable data.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="h-full border-l-4 border-l-cerebrum-500 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-cerebrum-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-5 w-5 text-cerebrum-600" />
                      </div>
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </div>
                    <CardDescription className="text-sm leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Security Suite</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Advanced security capabilities designed for large-scale enterprise deployments.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {enterpriseFeatures.map((feature, index) => (
                <div key={index} className="flex gap-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-cerebrum-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-cerebrum-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Certifications */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance & Certifications</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the highest industry standards with comprehensive compliance coverage.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-cerebrum-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="h-6 w-6 text-cerebrum-600" />
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{standard.name}</h3>
                  <Badge 
                    variant={standard.status === 'Certified' ? 'default' : 'secondary'}
                    className="text-xs"
                  >
                    {standard.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture Overview */}
        <section className="py-16 px-4 bg-gradient-to-br from-cerebrum-900 to-cerebrum-800 text-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Security Architecture</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto">
                Built on a zero-trust architecture with multiple layers of protection and real-time monitoring.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Server className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Authentication Service</h3>
                <p className="text-white/70">Spring Boot-based service with JWT tokens and comprehensive security controls.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure Database</h3>
                <p className="text-white/70">PostgreSQL with encryption at rest, in transit, and comprehensive audit logging.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Admin Dashboard</h3>
                <p className="text-white/70">Real-time monitoring and management with role-based access controls.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Secure Your Enterprise?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join leading enterprises who trust Datablize's Guardian Authentication Service 
                to protect their most critical applications and data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-cerebrum-600 hover:bg-cerebrum-700 text-white font-medium group">
                  Start Security Assessment
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="border-cerebrum-600 text-cerebrum-600 hover:bg-cerebrum-50">
                  Contact Security Team
                </Button>
              </div>
              <div className="mt-8 text-sm text-muted-foreground">
                🔒 SOC 2 Type II Certified • 🛡️ Zero-Trust Architecture • 🌍 Global Compliance Ready
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Security;