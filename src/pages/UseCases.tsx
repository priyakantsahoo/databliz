
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Briefcase, User, Building, Brain, Zap, Database, FileSearch, Workflow } from "lucide-react";
import { ProjectIcon } from "@/components/icons/ProjectIcon";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const useCases = [
  {
    title: "Marketing Teams",
    icon: Briefcase,
    challenge: "Managing creative assets, sharing large files, and maintaining brand consistency across campaigns.",
    solution: "AI-powered asset organization, smart tagging, and predictive content recommendations that learn from your brand guidelines.",
    benefits: [
      "Automatically categorize and tag assets using visual AI recognition",
      "Generate AI-powered content insights from campaign performance",
      "Predict optimal asset usage based on historical engagement data",
      "Intelligent version control that proactively prevents brand inconsistencies"
    ],
    color: "bg-blue-50 border-blue-200",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80",
    alt: "Marketing team leveraging AI insights for campaign optimization",
    workflow: "Document → AI Analysis → Smart Categorization → Performance Insights → Automated Distribution"
  },
  {
    title: "HR Departments",
    icon: User,
    challenge: "Managing sensitive employee documentation, complicated onboarding processes, and compliance requirements.",
    solution: "Zero-touch document processing with AI-powered employee onboarding workflows and automated compliance monitoring.",
    benefits: [
      "Reduce onboarding document processing time by 87% with intelligent form extraction",
      "Automate compliance verification with regulatory AI that stays updated with law changes",
      "Smart employee documentation lifecycle management with zero manual intervention",
      "Predictive analytics for workforce planning based on document insights"
    ],
    color: "bg-amber-50 border-amber-200",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80",
    alt: "HR professional reviewing AI-generated insights from employee documentation",
    workflow: "Forms → Automated Extraction → Validation AI → Compliance Check → Digital Employee Record"
  },
  {
    title: "Project Teams",
    icon: ProjectIcon,
    challenge: "Collaborating across complex document sets, tracking critical deliverables, and maintaining comprehensive project history.",
    solution: "AI-powered project intelligence that automatically connects related documents, surfaces critical insights, and predicts potential bottlenecks.",
    benefits: [
      "Project Intelligence Dashboard with real-time document analytics",
      "Automated document dependency mapping with 98% accuracy",
      "Predictive bottleneck detection based on document flow patterns",
      "Intelligent knowledge extraction that transforms documents into actionable project insights"
    ],
    color: "bg-green-50 border-green-200",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80",
    alt: "Project team collaborating with AI-assisted document intelligence system",
    workflow: "Project Docs → Automated Analysis → Relationship Mapping → Insight Generation → Predictive Actions"
  },
  {
    title: "Small Businesses",
    icon: Building,
    challenge: "Limited resources for document management, time-consuming administrative tasks, and difficulty staying organized.",
    solution: "No-code AI automation that handles everything from invoice processing to customer documentation with minimal setup.",
    benefits: [
      "Reduce administrative workload by 76% through intelligent document automation",
      "AI-powered financial document processing that integrates with your accounting system",
      "Automatic customer insights generated from document interaction patterns",
      "Smart document organization that adapts to your business workflows"
    ],
    color: "bg-purple-50 border-purple-200",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80",
    alt: "Small business owner using AI document management system on a laptop",
    workflow: "Document Capture → Automated Processing → Integration → Business Intelligence → Actionable Insights"
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cerebrum-100 rounded-full mb-6">
              <FileSearch className="h-8 w-8 text-cerebrum-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Cerebrum AI for Your Business Workflow</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Transform Your Document Chaos into Order. A powerful cloud-based document management system designed for seamless business workflows, with built-in AI to create your digital knowledge verse.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex items-center px-4 py-2 bg-cerebrum-50 rounded-full border border-cerebrum-100">
                <Zap className="h-5 w-5 text-cerebrum-600 mr-2" />
                <span className="text-sm font-medium">Zero-touch Automation</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-cerebrum-50 rounded-full border border-cerebrum-100">
                <Brain className="h-5 w-5 text-cerebrum-600 mr-2" />
                <span className="text-sm font-medium">Intelligent Insights</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-cerebrum-50 rounded-full border border-cerebrum-100">
                <Workflow className="h-5 w-5 text-cerebrum-600 mr-2" />
                <span className="text-sm font-medium">Adaptive Workflows</span>
              </div>
              <div className="flex items-center px-4 py-2 bg-cerebrum-50 rounded-full border border-cerebrum-100">
                <Database className="h-5 w-5 text-cerebrum-600 mr-2" />
                <span className="text-sm font-medium">Knowledge Mining</span>
              </div>
            </div>
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
                    
                    <div className="mb-6">
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
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-2 text-cerebrum-600">Intelligent Workflow</h3>
                      <div className="bg-cerebrum-50 rounded-lg p-4 border border-cerebrum-100">
                        <div className="flex items-center text-sm text-cerebrum-800">
                          <Brain className="mr-2 h-4 w-4 text-cerebrum-600" />
                          <span className="font-medium">{useCase.workflow}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="bg-cerebrum-600 hover:bg-cerebrum-700">
                      Explore {useCase.title} Solutions
                    </Button>
                  </div>
                  
                  <div className="flex-1 w-full">
                    <div className={`rounded-xl overflow-hidden shadow-lg h-auto border ${useCase.color}`}>
                      <AspectRatio ratio={16/9} className="bg-muted">
                        <img 
                          src={useCase.image} 
                          alt={useCase.alt}
                          className="object-cover w-full h-full transition-all hover:scale-105 duration-500"
                          loading="lazy"
                        />
                      </AspectRatio>
                    </div>
                    
                    <div className="mt-4 bg-cerebrum-50 rounded-lg p-3 border border-cerebrum-100">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-cerebrum-600 text-white mr-3">
                          <Brain className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-sm">AI Insight</h4>
                          <p className="text-xs text-cerebrum-700">
                            Cerebrum detected {index % 2 === 0 ? "efficiency opportunities" : "process optimization patterns"} in your workflow
                          </p>
                        </div>
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
            <h2 className="text-3xl font-bold mb-4">Find Your Intelligent Solution</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Discover how Cerebrum's AI can transform your specific document workflows with zero-touch automation and predictive intelligence.
            </p>
            <Button size="lg" className="bg-cerebrum-600 hover:bg-cerebrum-700">
              Request a Personalized AI Demo
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UseCases;
