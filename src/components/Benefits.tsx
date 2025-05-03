
import { 
  Database,
  Users,
  Search,
  Clock,
  Brain,
  Zap,
  Shield,
  LayoutDashboard
} from "lucide-react";

const benefitItems = [
  {
    title: "Intelligent Document Analysis",
    description: "AI automatically classifies, extracts key information, and summarizes documents, reducing processing time by 93%.",
    icon: Brain,
    color: "bg-purple-100 text-purple-600",
  },
  {
    title: "Zero-Touch Workflows",
    description: "Automated processes route documents, notify stakeholders, and trigger actions based on content—without manual intervention.",
    icon: Zap,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Predictive Discovery",
    description: "AI anticipates document needs based on your behavior patterns and surfaces relevant content before you search.",
    icon: Search,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Adaptive Security",
    description: "Context-aware protection automatically adjusts access controls based on document sensitivity and user behavior.",
    icon: Shield,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Knowledge Network",
    description: "AI connects related documents across silos, exposing hidden relationships and building your organizational knowledge graph.",
    icon: Database,
    color: "bg-red-100 text-red-600",
  },
  {
    title: "Intelligent Collaboration",
    description: "Smart sharing suggests relevant collaborators and automatically manages permissions as projects evolve.",
    icon: Users,
    color: "bg-sky-100 text-sky-600",
  },
  {
    title: "Time Reclamation",
    description: "Automated processing gives teams back 15+ hours per week previously spent on document management tasks.",
    icon: Clock,
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    title: "Insight Analytics",
    description: "AI surfaces patterns and anomalies across your document corpus, revealing business trends you'd otherwise miss.",
    icon: LayoutDashboard,
    color: "bg-indigo-100 text-indigo-600",
  }
];

const Benefits = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Intelligent Document Revolution</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI-powered platform transforms static documents into dynamic knowledge assets that work for you—not the other way around.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitItems.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 border border-border shadow-soft hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 ${benefit.color} rounded-lg mb-4`}>
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
