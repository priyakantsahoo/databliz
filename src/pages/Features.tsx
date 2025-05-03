
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
  Database
} from "lucide-react";

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
        icon: Shield,
        title: "Privacy & Security Features",
        description: "Control public vs. private content, employ encryption capabilities, and track access with comprehensive logs and auditing."
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
        icon: Monitor,
        title: "User Interface",
        description: "Clean and modern UI with responsive layout, consistent visual language, visual indicators, and smooth loading states."
      },
      {
        icon: Palette,
        title: "Theme Support",
        description: "Switch between light and dark mode with customizable interface elements to match your preferences."
      }
    ]
  },
  {
    id: "technical",
    title: "Technical Highlights",
    description: "Built with modern technology for performance and scalability.",
    features: [
      {
        icon: Code,
        title: "Modern Architecture",
        description: "Built with React and TypeScript for a robust frontend experience with comprehensive type safety."
      },
      {
        icon: Database,
        title: "Powerful Backend",
        description: "Supabase integration with real-time database capabilities and efficient file storage and retrieval."
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

// For missing icons not imported from lucide-react
const Shield = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const Monitor = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);

const Code = ({ size = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
