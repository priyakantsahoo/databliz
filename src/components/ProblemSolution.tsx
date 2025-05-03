
import { Check, Zap, Shield, Brain } from "lucide-react";

const ProblemSolution = () => {
  return (
    <section className="py-12 px-4 bg-secondary">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Is your organization still drowning in manual document processing?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Every hour spent on document management is an hour lost on innovation. Cerebrum's AI engine 
          automatically processes documents, extracts insights, and streamlines workflows without human intervention.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          <div className="bg-white rounded-xl p-6 shadow-soft">
            <h3 className="text-xl font-semibold mb-4">Traditional Challenges</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 text-red-500">✗</div>
                <span>Manual document processing consuming 30% of staff time</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 text-red-500">✗</div>
                <span>Critical insights buried in unstructured documents</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 text-red-500">✗</div>
                <span>Average document retrieval time: 8+ minutes</span>
              </li>
              <li className="flex items-start">
                <div className="mr-3 mt-1 h-5 w-5 text-red-500">✗</div>
                <span>44% of companies report data loss from poor document management</span>
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-cerebrum-600 to-cerebrum-700 text-white rounded-xl p-6 shadow-soft">
            <h3 className="text-xl font-semibold mb-4">The Cerebrum AI Solution</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Brain className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>AI processes and categorizes documents in milliseconds</span>
              </li>
              <li className="flex items-start">
                <Zap className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Predictive document retrieval anticipates user needs</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Automated workflows eliminate 95% of manual processing</span>
              </li>
              <li className="flex items-start">
                <Shield className="mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Adaptive security automatically controls document access</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
