
import { Button } from "@/components/ui/button";
import { Tag, LayoutDashboard, Bell, Users, Brain, Zap, Database } from "lucide-react";

const features = [
  {
    title: "Intelligent Document Classification",
    description: "Our neural networks automatically categorize documents by content, intent, and business context—no more manual tagging. The system learns from your organization's patterns to continuously improve accuracy.",
    icon: Brain,
    color: "bg-purple-100 text-purple-600",
    preview: (
      <div className="w-full">
        <div className="mb-3 text-sm text-gray-500 text-left pl-1">AI Classification:</div>
        <div className="grid grid-cols-3 gap-3 w-full">
          <div className="bg-blue-100 h-12 rounded flex items-center justify-center text-blue-600 font-medium hover:bg-blue-200 transition-colors cursor-pointer shadow-sm">
            <Tag className="mr-2 h-4 w-4" />
            <span>Auto-tagged</span>
          </div>
          <div className="bg-green-100 h-12 rounded flex items-center justify-center text-green-600 font-medium hover:bg-green-200 transition-colors cursor-pointer shadow-sm">
            <Tag className="mr-2 h-4 w-4" />
            <span>97% Match</span>
          </div>
          <div className="bg-amber-100 h-12 rounded flex items-center justify-center text-amber-600 font-medium hover:bg-amber-200 transition-colors cursor-pointer shadow-sm">
            <Tag className="mr-2 h-4 w-4" />
            <span>Learning</span>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <div className="h-12 flex-1 rounded border border-dashed border-blue-300 flex items-center justify-center text-blue-500 text-sm">AI analyzing document content...</div>
        </div>
      </div>
    )
  },
  {
    title: "Adaptive Intelligence Dashboard",
    description: "Your personalized command center evolves with your work patterns. The AI analyzes how you interact with documents and automatically surfaces what matters most to you, when you need it.",
    icon: LayoutDashboard,
    color: "bg-amber-100 text-amber-600",
    preview: (
      <div className="w-full space-y-3">
        <div className="flex justify-between items-center bg-white p-2 rounded-md border border-gray-200">
          <div className="text-left">
            <div className="font-medium text-sm">AI Activity Summary</div>
            <div className="text-xs text-muted-foreground">Personalized for your role</div>
          </div>
          <div className="text-sm text-cerebrum-600 font-medium cursor-pointer hover:underline">Customize</div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="h-20 bg-white rounded border border-gray-200 p-3 flex flex-col justify-between">
            <div className="text-sm font-medium">Insights Generated</div>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold">47</div>
              <div className="text-xs text-green-600">+28% today</div>
            </div>
          </div>
          <div className="h-20 bg-white rounded border border-gray-200 p-3 flex flex-col justify-between">
            <div className="text-sm font-medium">Time Saved</div>
            <div className="flex items-end justify-between">
              <div className="text-2xl font-bold">12h</div>
              <div className="text-xs text-green-600">This week</div>
            </div>
          </div>
        </div>
        <div className="h-24 bg-white rounded border border-gray-200 p-3">
          <div className="text-sm font-medium mb-2">AI Processing Stats</div>
          <div className="flex items-center gap-2">
            <div className="h-4 bg-purple-500 rounded-sm w-1/2"></div>
            <div className="h-4 bg-amber-500 rounded-sm w-1/4"></div>
            <div className="h-4 bg-green-500 rounded-sm w-1/4"></div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="text-xs text-muted-foreground">Analyzed</div>
            <div className="text-xs text-muted-foreground">Processed</div>
            <div className="text-xs text-muted-foreground">Insights</div>
          </div>
        </div>
      </div>
    )
  },
  {
    title: "Predictive Document Intelligence",
    description: "Our algorithm doesn't just passively wait for commands—it proactively identifies patterns, flags anomalies, and alerts you to time-sensitive information across your document ecosystem.",
    icon: Zap,
    color: "bg-green-100 text-green-600",
    preview: (
      <div className="w-full space-y-2">
        <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 text-left hover:bg-gray-50 transition-colors cursor-pointer">
          <Bell size={20} className="text-cerebrum-600" />
          <div>
            <div className="font-medium text-sm">Anomaly detected in Q1 Financial Report</div>
            <div className="text-xs text-muted-foreground">AI found a 23% variance from forecasts - 5 minutes ago</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white rounded border border-cerebrum-200 text-left hover:bg-cerebrum-50 transition-colors cursor-pointer shadow-sm">
          <Brain size={20} className="text-blue-600" />
          <div>
            <div className="font-medium text-sm">Document cluster identified: Marketing Strategy 2025</div>
            <div className="text-xs text-muted-foreground">7 related documents found across departments</div>
          </div>
        </div>
        <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 text-left hover:bg-gray-50 transition-colors cursor-pointer">
          <Database size={20} className="text-amber-600" />
          <div>
            <div className="font-medium text-sm">Knowledge graph updated with recent contracts</div>
            <div className="text-xs text-muted-foreground">AI has mapped relationships to existing documentation</div>
          </div>
        </div>
      </div>
    )
  },
];

const FeatureHighlights = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-cerebrum-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Intelligence That Transforms Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI doesn't just store documents—it unlocks the knowledge trapped inside them and puts it to work for your organization.
          </p>
        </div>
        
        <div className="space-y-24 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
            >
              <div className="flex-1">
                <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.color} rounded-xl mb-4`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  {feature.description}
                </p>
                <Button variant="link" className="text-cerebrum-600 p-0 font-medium">
                  Explore intelligence capabilities →
                </Button>
              </div>
              <div className="flex-1">
                <div className="bg-white rounded-xl shadow-soft border border-border overflow-hidden">
                  <div className="h-8 bg-gray-50 border-b border-border flex items-center px-4">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                  <div className="p-6 h-64 bg-gray-50 flex items-center justify-center">
                    <div className="text-center text-muted-foreground w-full">
                      {feature.preview}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
