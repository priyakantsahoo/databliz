
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
                    <div className="flex-1 h-6 bg-white/20 rounded-md"></div>
                    <div className="ml-3 h-8 w-8 bg-white/20 rounded-full"></div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 flex-1">
                    <div className="bg-white/10 rounded-md col-span-1"></div>
                    <div className="col-span-3 grid grid-cols-3 gap-3">
                      <div className="bg-white/10 rounded-md aspect-video"></div>
                      <div className="bg-white/10 rounded-md aspect-video"></div>
                      <div className="bg-white/10 rounded-md aspect-video"></div>
                      <div className="bg-white/10 rounded-md aspect-video"></div>
                      <div className="bg-white/10 rounded-md aspect-video"></div>
                      <div className="bg-white/10 rounded-md aspect-video"></div>
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
