
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="pt-28 pb-16 md:pt-36 md:pb-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
              Transform Your Document <span className="text-cerebrum-600">Chaos</span> into <span className="text-cerebrum-600">Order</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              A powerful cloud-based document management system designed for seamless business workflows, with built-in AI to create your digital knowledge verse.
            </p>
            <div className="pt-2">
              <div className="flex flex-wrap gap-2 items-center text-sm text-muted-foreground mb-6">
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Enterprise-grade security
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  Unlimited storage
                </span>
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  24/7 support
                </span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="bg-cerebrum-600 hover:bg-cerebrum-700 text-white font-medium">
                Request a Demo
              </Button>
              <Button size="lg" variant="outline" className="border-cerebrum-600 text-cerebrum-600 hover:bg-cerebrum-50">
                Explore Features
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-xl border border-border">
              <div className="bg-gradient-to-br from-cerebrum-600/90 to-cerebrum-900 h-full w-full flex items-center justify-center">
                <div className="glass-card p-6 w-5/6 h-5/6 flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="w-8 h-8 bg-cerebrum-700 rounded flex items-center justify-center text-white mr-3">
                      <span className="font-display font-bold">C</span>
                    </div>
                    <div className="flex-1 flex gap-2">
                      <div className="h-6 bg-white/20 rounded-md px-3 py-1 text-xs text-white/90 flex items-center">Dashboard</div>
                      <div className="h-6 bg-white/10 rounded-md px-3 py-1 text-xs text-white/70 flex items-center">Documents</div>
                      <div className="h-6 bg-white/10 rounded-md px-3 py-1 text-xs text-white/70 flex items-center">Analytics</div>
                    </div>
                    <div className="ml-3 h-8 w-8 bg-white/20 rounded-full flex items-center justify-center text-white text-xs font-bold">JD</div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 flex-1">
                    <div className="bg-white/10 rounded-md col-span-1 p-3 flex flex-col gap-2">
                      <div className="text-white/90 text-xs font-medium mb-2">Folders</div>
                      <div className="bg-white/10 h-6 rounded"></div>
                      <div className="bg-white/20 h-6 rounded flex items-center px-2">
                        <div className="w-3 h-3 rounded bg-cerebrum-500 mr-2"></div>
                        <div className="text-white/80 text-xs">Marketing</div>
                      </div>
                      <div className="bg-white/10 h-6 rounded"></div>
                      <div className="bg-white/10 h-6 rounded"></div>
                    </div>
                    <div className="col-span-3 grid grid-cols-3 gap-3">
                      <div className="bg-white/10 rounded-md aspect-video p-2 flex flex-col">
                        <div className="text-white/80 text-xs truncate">Q1 Report.pdf</div>
                        <div className="mt-auto text-white/50 text-xs">Updated 2d ago</div>
                      </div>
                      <div className="bg-white/10 rounded-md aspect-video p-2 flex flex-col">
                        <div className="text-white/80 text-xs truncate">Marketing Plan.docx</div>
                        <div className="mt-auto text-white/50 text-xs">Updated 3h ago</div>
                      </div>
                      <div className="bg-white/10 rounded-md aspect-video p-2 flex flex-col">
                        <div className="text-white/80 text-xs truncate">Presentation.pptx</div>
                        <div className="mt-auto text-white/50 text-xs">Updated 1d ago</div>
                      </div>
                      <div className="bg-white/10 rounded-md aspect-video p-2 flex flex-col">
                        <div className="text-white/80 text-xs truncate">Budget_2025.xlsx</div>
                        <div className="mt-auto text-white/50 text-xs">Updated 4h ago</div>
                      </div>
                      <div className="bg-white/10 rounded-md aspect-video p-2 flex flex-col">
                        <div className="text-white/80 text-xs truncate">Product_Specs.pdf</div>
                        <div className="mt-auto text-white/50 text-xs">Updated 5d ago</div>
                      </div>
                      <div className="bg-cerebrum-500/30 rounded-md aspect-video p-2 flex flex-col border border-cerebrum-500/50">
                        <div className="text-white/90 text-xs truncate font-medium">Campaign_Results.pdf</div>
                        <div className="mt-auto text-white/60 text-xs">Updated just now</div>
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
                  <p className="text-sm font-medium">Insight detected</p>
                  <p className="text-xs text-muted-foreground">Project growth trends identified</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
