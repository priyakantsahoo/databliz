
import { Check } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-12 px-4 bg-secondary">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Tired of searching for lost files? Worried about document security?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Document disorganization costs businesses countless hours and creates security vulnerabilities. 
          Cerebrum transforms how your organization manages critical business information.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-white rounded-xl p-6 shadow-soft">
            <h3 className="text-xl font-semibold mb-4">Common Challenges</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 text-red-500">✗</div>
                <span>Files scattered across email, drives, and devices</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 text-red-500">✗</div>
                <span>Version confusion leading to costly mistakes</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 text-red-500">✗</div>
                <span>Slow, frustrating searches for critical documents</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 text-red-500">✗</div>
                <span>Security risks from improper document sharing</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-cerebrum-600 to-cerebrum-700 text-white rounded-xl p-6 shadow-soft">
            <h3 className="text-xl font-semibold mb-4">The Cerebrum Solution</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Centralized repository with intuitive organization</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Version control and real-time collaboration</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>AI-powered search that understands what you need</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Enterprise-grade security with granular permissions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
