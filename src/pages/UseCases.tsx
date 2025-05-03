
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, User, Building } from "lucide-react";
import { ProjectIcon } from "@/components/icons/ProjectIcon";

const useCases = [
  {
    title: "Marketing Teams",
    icon: Briefcase,
    challenge: "Managing creative assets, sharing large files, and maintaining brand consistency.",
    solution: "Centralized storage, easy sharing, tag-based organization for campaigns, and version control for brand assets.",
    benefits: [
      "Organize all creative assets by campaign using tags and custom views",
      "Share files securely with external agencies and contractors",
      "Track all versions of marketing materials and brand assets",
      "Receive real-time notifications when assets are updated"
    ],
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "HR Departments",
    icon: User,
    challenge: "Securely storing sensitive employee records and managing the onboarding document process.",
    solution: "Role-based access control, privacy features, secure file requests for onboarding documents, and compliant document retention.",
    benefits: [
      "Keep employee files secure with granular permissions",
      "Streamline the onboarding document collection process",
      "Set document retention policies that comply with regulations",
      "Create custom views for different employee categories"
    ],
    color: "bg-amber-50 border-amber-200"
  },
  {
    title: "Project Teams",
    icon: ProjectIcon,
    challenge: "Collaborating on project documents, tracking tasks, and maintaining document version history.",
    solution: "Real-time collaboration, task management integrated with files, shared folders, and comprehensive version control.",
    benefits: [
      "Create project-specific workspaces with controlled access",
      "Track document changes and maintain version history",
      "Assign and manage document-related tasks within the platform",
      "Use AI-powered search to quickly find project information"
    ],
    color: "bg-green-50 border-green-200"
  },
  {
    title: "Small Businesses",
    icon: Building,
    challenge: "Centralizing all business documents, simple sharing, and managing limited IT resources.",
    solution: "Affordable plans, easy-to-use interface, secure storage and sharing, with minimal IT overhead.",
    benefits: [
      "Implement an enterprise-grade document system without IT expertise",
      "Secure all business-critical documents in one centralized location",
      "Share documents securely with clients and partners",
      "Scale your solution as your business grows"
    ],
    color: "bg-purple-50 border-purple-200"
  }
];

const UseCases = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-cerebrum-50 to-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cerebrum for Your Business Needs</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              See how different teams and industries leverage Cerebrum to transform their document management processes.
            </p>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="space-y-24">
              {useCases.map((useCase, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
                >
                  <div className="flex-1 max-w-xl">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-14 h-14 rounded-full flex items-center justify-center bg-cerebrum-100 text-cerebrum-600">
                        <useCase.icon size={28} />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold">{useCase.title}</h2>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2 text-red-600">The Challenge</h3>
                      <p className="text-lg text-gray-700">{useCase.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold mb-2 text-green-600">The Solution</h3>
                      <p className="text-lg text-gray-700">{useCase.solution}</p>
                    </div>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-2 text-cerebrum-600">Key Benefits</h3>
                      <ul className="space-y-2">
                        {useCase.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start">
                            <div className="mr-2 mt-1 text-cerebrum-600">•</div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button className="bg-cerebrum-600 hover:bg-cerebrum-700">
                      Learn More
                    </Button>
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className={`border rounded-xl overflow-hidden shadow-soft h-80 ${useCase.color} p-6 flex items-center justify-center`}>
                      <div className="text-center space-y-4">
                        <useCase.icon size={64} className="mx-auto text-cerebrum-600 opacity-50" />
                        <p className="text-gray-500">[Visual representation for {useCase.title}]</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Find Your Solution CTA */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Find Your Solution</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Not seeing your industry or use case? Contact us to discuss how Cerebrum can be tailored for your specific document management needs.
            </p>
            <Button size="lg" className="bg-cerebrum-600 hover:bg-cerebrum-700">
              Request a Customized Demo
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UseCases;
