
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
              <span className="text-cerebrum-600">AI-Powered</span> Document Intelligence for the Modern Enterprise
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Transform Your Document Chaos into Order. A powerful cloud-based document management system designed for seamless business workflows, with built-in AI to create your digital knowledge verse.
            </p>
            <div className="pt-2">
              <div className="flex flex-wrap gap-3 items-center text-sm text-muted-foreground mb-6">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-medium">Predictive analytics</span>
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-medium">Zero-touch automation</span>
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span className="font-medium">Adaptive learning</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-cerebrum-600 hover:bg-cerebrum-700 text-white font-medium group">
                Experience the AI Difference
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="border-cerebrum-600 text-cerebrum-600 hover:bg-cerebrum-50">
                Explore Intelligence Hub
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-border">
              <div className="bg-gradient-to-br from-cerebrum-600/90 to-cerebrum-900 h-full w-full flex items-center justify-center">
                <div className="glass-card p-6 w-5/6 h-5/6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-cerebrum-700 rounded flex items-center justify-center text-white mr-3">
                      <span className="font-display font-bold">D</span>
                    </div>
                    <div className="flex-1 flex gap-2">
                      <div className="h-6 bg-white/20 rounded-md px-3 py-1 text-xs text-white/90 flex items-center">Intelligence Hub</div>
                      <div className="h-6 bg-white/10 rounded-md px-3 py-1 text-xs text-white/70 flex items-center">Workflows</div>
                      <div className="h-6 bg-white/10 rounded-md px-3 py-1 text-xs text-white/70 flex items-center">Insights</div>
                    </div>
                    <div className="ml-3 h-8 w-8 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">JD</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 flex-1">
                    <div className="bg-white/10 rounded-md col-span-1 p-3 flex flex-col gap-2">
                      <div className="text-white/90 text-xs font-medium mb-2">Smart Folders</div>
                      <div className="bg-white/10 h-6 rounded"></div>
                      <div className="bg-white/20 h-6 rounded flex items-center px-2">
                        <div className="w-3 h-3 rounded bg-cerebrum-500 mr-2"></div>
                        <div className="text-white/80 text-xs">Marketing AI</div>
                      </div>
                      <div className="bg-white/10 h-6 rounded"></div>
                      <div className="bg-white/10 h-6 rounded"></div>
                    </div>
                    <div className="col-span-3 grid grid-cols-3 gap-3">
                      <div className="bg-white/10 rounded-md aspect-video p-2 flex flex-col">
                        <div className="text-white/80 text-xs truncate">Q1_Analytics.pdf</div>
                        <div className="mt-auto text-white/50 text-xs">AI processed</div>
                      </div>
                      <div className="bg-white/10 rounded-md aspect-video p-2 flex flex-col">
                        <div className="text-white/80 text-xs truncate">Campaign_Insights.docx</div>
                        <div className="mt-auto text-white/50 text-xs">Auto-categorized</div>
                      </div>
                      <div className="bg-white/10 rounded-md aspect-video p-2 flex flex-col">
                        <div className="text-white/80 text-xs truncate">AI_Strategy.pptx</div>
                        <div className="mt-auto text-white/50 text-xs">Insights ready</div>
                      </div>
                      <div className="bg-white/10 rounded-md aspect-video p-2 flex flex-col">
                        <div className="text-white/80 text-xs truncate">Forecast_2025.xlsx</div>
                        <div className="mt-auto text-white/50 text-xs">Predictive metrics</div>
                      </div>
                      <div className="bg-white/10 rounded-md aspect-video p-2 flex flex-col">
                        <div className="text-white/80 text-xs truncate">Product_Analysis.pdf</div>
                        <div className="mt-auto text-white/50 text-xs">Smart summary</div>
                      </div>
                      <div className="bg-cerebrum-500/30 rounded-md aspect-video p-2 flex flex-col border border-cerebrum-500/50">
                        <div className="text-white/90 text-xs truncate font-medium">Market_Insight.pdf</div>
                        <div className="mt-auto text-white/60 text-xs">AI processing...</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-cerebrum-50 rounded-lg p-3 border border-cerebrum-200 shadow-soft hidden md:block">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-cerebrum-600 flex items-center justify-center text-white font-bold">
                  AI
                </div>
                <div>
                  <p className="text-sm font-medium">AI Insight Detected</p>
                  <p className="text-xs text-cerebrum-600">Document anomaly pattern identified</p>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 bg-cerebrum-600 rounded-lg p-2 border border-cerebrum-700 shadow-md hidden md:flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center text-white">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 8.5V6C21 4.89543 20.1046 4 19 4H5C3.89543 4 3 4.89543 3 6V8.5M21 8.5V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V8.5M21 8.5H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="13" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16.5 7.5V7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-white text-xs font-medium">Processing 5 docs/sec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
