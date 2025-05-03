
import { 
  Database,
  Users,
  Search,
  Clock
} from "lucide-react";

const benefitItems = [
  {
    title: "Effortless Organization",
    description: "Manage files and folders with intuitive hierarchy, color-coding, tags, and custom views.",
    icon: Database,
  },
  {
    title: "Secure Collaboration",
    description: "Share securely with granular permissions, public links, and real-time collaboration features.",
    icon: Users,
  },
  {
    title: "Powerful Discovery",
    description: "Find anything instantly with global search, advanced filters, and typeahead suggestions.",
    icon: Search,
  },
  {
    title: "Streamlined Workflows",
    description: "Boost productivity with integrated task management and file requests.",
    icon: Clock,
  },
];

const Benefits = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Cerebrum?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our intelligent document management system is designed to transform how your business handles information.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitItems.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl p-6 border border-border shadow-soft hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-cerebrum-100 text-cerebrum-600 rounded-lg mb-4">
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
