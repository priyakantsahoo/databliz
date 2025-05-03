
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Folder, 
  Tag, 
  Filter, 
  Bookmark, 
  Search, 
  Trash2, 
  LayoutDashboard,
  Share,
  FilePlus,
  Lock,
  Clock,
  Bell,
  BarChart2,
  Palette,
  Database,
  Brain,
  Workflow,
  Users,
  MessageSquare,
  Lightbulb,
  Sparkles,
  Smartphone,
  Wifi,
  Globe,
  Server,
  Cloud,
  Building,
  Shield
} from "lucide-react";
import { ShieldIcon, MonitorIcon, CodeIcon } from "@/components/icons/CustomIcons";

const featureSections = [
  {
    id: "organize",
    title: "Organize & Discover",
    description: "Keep your digital workspace clean and find what you need instantly.",
    features: [
      {
        icon: FileText,
        title: "File Management",
        description: "Upload, preview, download, and organize various file types with comprehensive metadata tracking and automatic information extraction."
      },
      {
        icon: Folder,
        title: "Folder Organization",
        description: "Create a hierarchical structure with unlimited nesting, color-coded folders, and organized parent-child relationships."
      },
      {
        icon: Tag,
        title: "Tag-Based Organization",
        description: "Apply custom labels to documents, organize and find files by tags, with support for multiple tags per document."
      },
      {
        icon: Filter,
        title: "Custom Views",
        description: "Create saved views based on tags, filter across folders, with public and private view options and a visual filtering interface."
      },
      {
        icon: Bookmark,
        title: "Bookmarks & Favorites",
        description: "Bookmark important content for quick access through a dedicated section."
      },
      {
        icon: Search,
        title: "Search Capabilities",
        description: "Global search with advanced filtering, typeahead suggestions, and an intuitive command palette."
      },
      {
        icon: Trash2,
        title: "Trash & Recovery",
        description: "Soft delete with restoration capabilities and options for permanent deletion when needed."
      },
      {
        icon: LayoutDashboard,
        title: "Dashboard & Navigation",
        description: "Comprehensive dashboard with activity overview, shared content section, and customizable sidebar navigation."
      }
    ]
  },
  {
    id: "ai-workflows",
    title: "AI & Automated Business Workflows",
    description: "Let our intelligent systems handle routine tasks while you focus on what matters most.",
    features: [
      {
        icon: Brain,
        title: "AI Document Analysis",
        description: "Our neural networks automatically analyze document content, extract key information, and classify documents based on content patterns."
      },
      {
        icon: Workflow,
        title: "Predictive Workflow Management",
        description: "AI-powered system that learns your workflow patterns and suggests optimized processes for maximum efficiency."
      },
      {
        icon: Sparkles,
        title: "Automated Processing Pipelines",
        description: "Create custom document processing workflows with conditional logic, approvals, notifications, and integrations with other business systems."
      },
      {
        icon: Lightbulb,
        title: "Intelligent Document Routing",
        description: "Smart routing capabilities that automatically direct documents to the right people based on content, metadata, and organizational structure."
      }
    ]
  },
  {
    id: "collaborate",
    title: "Collaborate & Share",
    description: "Work together seamlessly with controlled access to your documents.",
    features: [
      {
        icon: Share,
        title: "Sharing & Collaboration",
        description: "Share files and folders with customizable permissions, create public sharing links, and use real-time collaboration tools."
      },
      {
        icon: FilePlus,
        title: "File Requests",
        description: "Request files from internal or external users with integrated tracking and organization of received content."
      },
      {
        icon: MessageSquare,
        title: "Real-time AI Co-authoring Assistant",
        description: "Collaborate with an AI assistant that helps with drafting, editing, and improving document quality in real-time as you work."
      },
      {
        icon: Users,
        title: "Smart Content Recommendations",
        description: "AI-powered system that recommends relevant documents and content to team members based on their roles, projects, and past interactions."
      }
    ]
  },
  {
    id: "security",
    title: "Security & Control",
    description: "Keep your sensitive information protected and controlled.",
    features: [
      {
        icon: Lock,
        title: "Authentication & User Management",
        description: "Secure login/signup, detailed user profiles, role-based access control with department and organization settings."
      },
      {
        icon: ShieldIcon,
        title: "Privacy & Security Features",
        description: "Control public vs. private content, employ encryption capabilities, and track access with comprehensive logs and auditing."
      },
      {
        icon: Shield,
        title: "End-to-End Encryption",
        description: "Military-grade encryption ensures your data is for your eyes only, with complete encryption at rest and in transit. Your private keys mean even we can't access your sensitive information."
      }
    ]
  },
  {
    id: "productivity",
    title: "Productivity & Insights",
    description: "Get more done and gain valuable insights from your document usage.",
    features: [
      {
        icon: Clock,
        title: "Tasks Management",
        description: "Create and assign tasks with tracking capabilities, status updates, and direct task-to-file associations."
      },
      {
        icon: Bell,
        title: "Notifications System",
        description: "Receive real-time notifications for shared content, activity updates, and important system alerts."
      },
      {
        icon: BarChart2,
        title: "Statistics & Analytics",
        description: "Monitor storage usage, track download statistics, and analyze file sharing metrics across your organization."
      }
    ]
  },
  {
    id: "experience",
    title: "User Experience",
    description: "Enjoy a beautiful and intuitive interface designed for productivity.",
    features: [
      {
        icon: MonitorIcon,
        title: "User Interface",
        description: "Clean and modern UI with responsive layout, consistent visual language, visual indicators, and smooth loading states."
      },
      {
        icon: Palette,
        title: "Theme Support",
        description: "Switch between light and dark mode with customizable interface elements to match your preferences."
      },
      {
        icon: Smartphone,
        title: "Mobile Application",
        description: "Access your documents anywhere with our full-featured mobile app, allowing you to view, edit, and share documents from your smartphone or tablet."
      },
      {
        icon: Wifi,
        title: "Business Workflows on the Go",
        description: "Approve documents, participate in workflows, scan paper documents, and manage tasks from anywhere with full offline capabilities that sync when you reconnect."
      }
    ]
  },
  {
    id: "technical",
    title: "Technical Highlights",
    description: "Built with modern technology for performance and scalability.",
    features: [
      {
        icon: CodeIcon,
        title: "Modern Architecture",
        description: "Built with React and TypeScript for a robust frontend experience with comprehensive type safety."
      },
      {
        icon: Database,
        title: "Powerful Backend",
        description: "Supabase integration with real-time database capabilities and efficient file storage and retrieval."
      },
      {
        icon: Cloud,
        title: "Flexible Deployment Options",
        description: "Choose from cloud hosting, dedicated VPS, or on-premise deployment options depending on your organization's needs and regulatory requirements."
      },
      {
        icon: Server,
        title: "Enterprise Scalability",
        description: "Architecture designed to scale from small teams to enterprise organizations with thousands of users and millions of documents without performance degradation."
      }
    ]
  },
  {
    id: "deployment",
    title: "Deployment & Integration",
    description: "Adapt Cerebrum to your organization's specific infrastructure and security needs.",
    features: [
      {
        icon: Globe,
        title: "Cloud Hosting",
        description: "Fully-managed cloud deployment with automatic updates, backups, and scaling to handle any workload without infrastructure management overhead."
      },
      {
        icon: Building,
        title: "On-Premise Solutions",
        description: "Deploy behind your firewall for complete control over data sovereignty and compliance with the most stringent regulatory requirements."
      }
    ]
  }
];

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-cerebrum-50 to-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">All the Tools You Need for Complete Document Control</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Cerebrum offers a comprehensive suite of features designed to transform how your organization manages documents and knowledge.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {featureSections.map((section) => (
                <a 
                  key={section.id} 
                  href={`#${section.id}`}
                  className="bg-white px-4 py-2 rounded-full border border-border hover:border-cerebrum-300 hover:bg-cerebrum-50 transition-colors"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        {featureSections.map((section, sectionIndex) => (
          <section 
            id={section.id}
            key={section.id} 
            className={`py-16 px-4 ${sectionIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
          >
            <div className="container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">{section.title}</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  {section.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {section.features.map((feature, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-border shadow-soft hover:shadow-lg transition-all">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-cerebrum-100 text-cerebrum-600 rounded-lg mb-4">
                      <feature.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-cerebrum-600">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Experience Cerebrum?</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
              Join hundreds of businesses using Cerebrum to organize, secure, and extract intelligence from their documents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-cerebrum-600 hover:bg-gray-100">
                See Pricing
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-cerebrum-700">
                Request a Demo
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-cerebrum-700">
                Start Free Trial
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
