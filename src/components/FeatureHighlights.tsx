import { Button } from "@/components/ui/button";
import { Tag, LayoutDashboard, Bell, Users } from "lucide-react";

const features = [
  {
    title: "Visual Tag Filtering",
    description: "Organize documents visually with our intuitive tagging system. Create custom filters that make finding documents fast and intuitive.",
    icon: Tag,
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Clean Dashboard With Activity Tracking",
    description: "See what matters most with our customizable dashboard. Track file activity and recent changes all in one place.",
    icon: LayoutDashboard,
    color: "bg-amber-100 text-amber-600",
  },
  {
    title: "Real-time Notifications",
    description: "Stay informed with instant notifications about document changes, shares, and collaborator activity.",
    icon: Bell,
    color: "bg-green-100 text-green-600",
  },
];

const FeatureHighlights = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white to-cerebrum-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Cerebrum in Action</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore how our features bring order to your document management process.
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
                  Learn more →
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
                    <div className="text-center text-muted-foreground">
                      {index === 0 && (
                        <div className="grid grid-cols-3 gap-3 w-full">
                          <div className="bg-blue-100 h-12 rounded flex items-center justify-center text-blue-600 font-medium">Marketing</div>
                          <div className="bg-green-100 h-12 rounded flex items-center justify-center text-green-600 font-medium">Finance</div>
                          <div className="bg-amber-100 h-12 rounded flex items-center justify-center text-amber-600 font-medium">HR</div>
                        </div>
                      )}
                      
                      {index === 1 && (
                        <div className="w-full space-y-3">
                          <div className="flex justify-between items-center">
                            <div className="h-6 w-24 bg-gray-200 rounded"></div>
                            <div className="h-6 w-16 bg-gray-200 rounded"></div>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="h-16 bg-gray-200 rounded"></div>
                            <div className="h-16 bg-gray-200 rounded"></div>
                          </div>
                          <div className="h-24 bg-gray-200 rounded"></div>
                        </div>
                      )}
                      
                      {index === 2 && (
                        <div className="w-full space-y-2">
                          <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 text-left">
                            <Bell size={20} className="text-cerebrum-600" />
                            <div>
                              <div className="font-medium text-sm">New comment on Report.pdf</div>
                              <div className="text-xs text-muted-foreground">2 minutes ago</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-white rounded border border-gray-200 text-left">
                            <Users size={20} className="text-blue-600" />
                            <div>
                              <div className="font-medium text-sm">Marketing team shared Invoice.docx</div>
                              <div className="text-xs text-muted-foreground">15 minutes ago</div>
                            </div>
                          </div>
                        </div>
                      )}
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
