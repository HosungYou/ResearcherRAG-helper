"use client";

import React, { useState } from 'react';
import { ArrowDown, ArrowRight, CheckCircle2, Circle, AlertCircle } from 'lucide-react';

export default function WorkflowMapPage() {
  const [projectType, setProjectType] = useState<'knowledge_repository' | 'systematic_review'>('knowledge_repository');
  const [queryBreadth, setQueryBreadth] = useState<string>('comprehensive');
  const [humanReview, setHumanReview] = useState<boolean>(false);

  // Calculate estimates based on selections
  const getEstimates = () => {
    if (projectType === 'knowledge_repository') {
      return {
        setupTime: '30 minutes',
        automatedTime: queryBreadth === 'comprehensive' ? '3-4 hours' : '2-3 hours',
        totalTime: queryBreadth === 'comprehensive' ? '3.5-4.5 hours' : '2.5-3.5 hours',
        finalPapers: queryBreadth === 'comprehensive' ? '15,000-20,000' : '4,000-8,000',
        retentionRate: '80-90%',
        cost: '$20/month'
      };
    } else {
      let setupTime = '30 minutes';
      let automatedTime = '3-5 hours';
      let finalPapers = '50-300';

      if (queryBreadth === 'broad') {
        automatedTime = '4-6 hours';
        finalPapers = '100-300';
      } else if (queryBreadth === 'narrow') {
        automatedTime = '2-3 hours';
        finalPapers = '30-100';
      }

      if (humanReview) {
        automatedTime = automatedTime.replace(/(\d+)-(\d+)/, (_, p1, p2) =>
          `${parseInt(p1) + 2}-${parseInt(p2) + 3}`
        );
      }

      return {
        setupTime,
        automatedTime,
        totalTime: `${parseInt(setupTime) + parseInt(automatedTime.split('-')[0])}-${parseInt(setupTime) + parseInt(automatedTime.split('-')[1])} hours`,
        finalPapers,
        retentionRate: '2-10%',
        cost: '$20/month'
      };
    }
  };

  const estimates = getEstimates();

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">
          How Your Decisions Shape Your RAG System
        </h1>
        <p className="text-xl text-muted-foreground">
          Understanding the impact of each choice you make throughout the 7-stage workflow
        </p>
      </div>

      {/* Interactive Timeline Calculator */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg p-6 mb-12 border border-blue-200 dark:border-blue-800">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Circle className="w-6 h-6 fill-blue-500 text-blue-500" />
          Estimate Your Timeline
        </h2>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Project Type</label>
            <select
              value={projectType}
              onChange={(e) => setProjectType(e.target.value as any)}
              className="w-full p-2 border rounded-md bg-white dark:bg-gray-800"
            >
              <option value="knowledge_repository">Knowledge Repository</option>
              <option value="systematic_review">Systematic Review</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Query Breadth</label>
            <select
              value={queryBreadth}
              onChange={(e) => setQueryBreadth(e.target.value)}
              className="w-full p-2 border rounded-md bg-white dark:bg-gray-800"
            >
              {projectType === 'knowledge_repository' ? (
                <>
                  <option value="comprehensive">Comprehensive (20K-30K)</option>
                  <option value="moderate">Moderate (5K-10K)</option>
                </>
              ) : (
                <>
                  <option value="broad">Broad (1.5K-5K)</option>
                  <option value="balanced">Balanced (500-800)</option>
                  <option value="narrow">Narrow (100-300)</option>
                </>
              )}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Human Review</label>
            <select
              value={humanReview ? 'yes' : 'no'}
              onChange={(e) => setHumanReview(e.target.value === 'yes')}
              className="w-full p-2 border rounded-md bg-white dark:bg-gray-800"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 border-2 border-blue-300 dark:border-blue-700">
          <h3 className="font-bold text-lg mb-4 text-center">Estimated Results</h3>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{estimates.totalTime}</div>
              <div className="text-sm text-muted-foreground">Total Setup Time</div>
              <div className="text-xs text-muted-foreground mt-1">
                ({estimates.setupTime} active + {estimates.automatedTime} automated)
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400">{estimates.finalPapers}</div>
              <div className="text-sm text-muted-foreground">Final Papers in RAG</div>
              <div className="text-xs text-muted-foreground mt-1">
                ({estimates.retentionRate} retention)
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">{estimates.cost}</div>
              <div className="text-sm text-muted-foreground">Claude Pro</div>
              <div className="text-xs text-muted-foreground mt-1">
                (Haiku 4.5 sufficient)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decision Flow Visualization */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Your Decisions → Impact Map</h2>

        {/* Stage 1 */}
        <DecisionStage
          stageNumber={1}
          title="Choose Your Project Type"
          isDecisionPoint={true}
          expanded={true}
        >
          <div className="grid md:grid-cols-2 gap-4">
            <DecisionOption
              title="Knowledge Repository"
              icon="🗂️"
              selected={projectType === 'knowledge_repository'}
              onClick={() => setProjectType('knowledge_repository')}
            >
              <ul className="text-sm space-y-1 mt-2">
                <li>→ 20,000-30,000 papers fetched</li>
                <li>→ Minimal filtering (80-90% kept)</li>
                <li>→ No human review needed</li>
                <li>→ Great for domain exploration</li>
              </ul>
            </DecisionOption>

            <DecisionOption
              title="Systematic Review"
              icon="📄"
              selected={projectType === 'systematic_review'}
              onClick={() => setProjectType('systematic_review')}
            >
              <ul className="text-sm space-y-1 mt-2">
                <li>→ 1,000-5,000 papers fetched</li>
                <li>→ Strict PRISMA filtering (2-10% kept)</li>
                <li>→ Human review recommended</li>
                <li>→ Great for publications</li>
              </ul>
            </DecisionOption>
          </div>
        </DecisionStage>

        <StageConnector />

        {/* Stage 2 */}
        <DecisionStage
          stageNumber={2}
          title="Design Your Query"
          isDecisionPoint={true}
        >
          <div className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Based on your <strong>{projectType === 'knowledge_repository' ? 'Knowledge Repository' : 'Systematic Review'}</strong> choice:
            </p>

            {projectType === 'knowledge_repository' ? (
              <div className="space-y-2">
                <QueryOption
                  title="Comprehensive (20K-30K papers)"
                  recommended={true}
                  impact="Fetches maximum papers for complete domain coverage"
                />
                <QueryOption
                  title="Moderate (5K-10K papers)"
                  impact="Balanced scope for focused exploration"
                />
              </div>
            ) : (
              <div className="space-y-2">
                <QueryOption
                  title="Broad (1.5K-5K papers)"
                  impact="Comprehensive coverage, longer screening time"
                />
                <QueryOption
                  title="Balanced (500-800 papers)"
                  recommended={true}
                  impact="Good coverage, manageable screening (1 day)"
                />
                <QueryOption
                  title="Narrow (100-300 papers)"
                  impact="High precision, fast screening (2-3 hours)"
                />
              </div>
            )}
          </div>
        </DecisionStage>

        <StageConnector />

        {/* Stage 3 */}
        <DecisionStage
          stageNumber={3}
          title="Set Filtering Rules"
          isDecisionPoint={true}
        >
          <div className="space-y-3">
            {projectType === 'knowledge_repository' ? (
              <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border border-green-200 dark:border-green-800">
                <h4 className="font-semibold mb-2">Minimal Filtering (Knowledge Repository Mode)</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ Remove spam and duplicates only</li>
                  <li>✓ Keep 80-90% of papers</li>
                  <li>✓ No human review required</li>
                  <li>✓ AI screening threshold: 50% (lenient)</li>
                </ul>
              </div>
            ) : (
              <div className="bg-orange-50 dark:bg-orange-950 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
                <h4 className="font-semibold mb-2">Strict PRISMA Filtering (Systematic Review Mode)</h4>
                <ul className="text-sm space-y-1">
                  <li>✓ Detailed inclusion/exclusion criteria</li>
                  <li>✓ Keep 2-10% of papers</li>
                  <li>✓ Human review recommended</li>
                  <li>✓ AI screening threshold: 90% (strict)</li>
                </ul>
              </div>
            )}
          </div>
        </DecisionStage>

        <StageConnector />

        {/* Stage 4 */}
        <DecisionStage
          stageNumber={4}
          title="RAG Design"
          isDecisionPoint={true}
        >
          <p className="text-sm text-muted-foreground">
            Configure embedding model, chunk size, and LLM settings. These affect search quality and answer generation.
          </p>
        </DecisionStage>

        <StageConnector />

        {/* Stage 5 */}
        <DecisionStage
          stageNumber={5}
          title="Automated Execution"
          isDecisionPoint={false}
        >
          <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="font-semibold mb-2">⏳ No Decisions - Just Wait</p>
            <p className="text-sm mb-3">AI processes based on YOUR choices from Stages 1-4:</p>
            <ul className="text-sm space-y-1">
              <li>✓ Fetch papers (using your query)</li>
              <li>✓ Remove duplicates</li>
              <li>✓ Screen papers (using your filtering rules)</li>
              <li>✓ Download PDFs</li>
              <li>✓ Build RAG system</li>
              <li>✓ Generate PRISMA diagram</li>
            </ul>
          </div>
        </DecisionStage>

        <StageConnector />

        {/* Stage 6 */}
        <DecisionStage
          stageNumber={6}
          title="Research Q&A"
          isDecisionPoint={true}
        >
          <p className="text-sm text-muted-foreground mb-3">
            Ask questions to your RAG system. Quality of answers depends on:
          </p>
          <ul className="text-sm space-y-1">
            <li>→ Number of papers in your RAG ({estimates.finalPapers})</li>
            <li>→ Quality of papers (determined by Stage 3 filtering)</li>
            <li>→ Your query design skills</li>
          </ul>
        </DecisionStage>
      </div>

      {/* Decision Impact Matrix */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Decision Impact Matrix</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border p-3 text-left">Your Choice</th>
                <th className="border p-3 text-left">Affects</th>
                <th className="border p-3 text-left">Impact</th>
                <th className="border p-3 text-left">Example</th>
              </tr>
            </thead>
            <tbody>
              <ImpactRow
                choice="Stage 1: Project Type"
                affects="All stages"
                impact="CRITICAL"
                impactColor="red"
                example={`${projectType === 'knowledge_repository' ? '20K papers' : '300 papers'}`}
              />
              <ImpactRow
                choice="Stage 2: Query Breadth"
                affects="Paper count"
                impact="HIGH"
                impactColor="orange"
                example="Comprehensive → 20K, Narrow → 100"
              />
              <ImpactRow
                choice="Stage 3: Filtering Strictness"
                affects="Retention rate"
                impact="HIGH"
                impactColor="orange"
                example={`Lenient → 80%, Strict → 5%`}
              />
              <ImpactRow
                choice="Stage 4: Embedding Model"
                affects="Search quality"
                impact="MEDIUM"
                impactColor="yellow"
                example="Better model = better semantic search"
              />
              <ImpactRow
                choice="Stage 4: Chunk Size"
                affects="Answer length"
                impact="LOW"
                impactColor="green"
                example="Larger chunks = more context per answer"
              />
            </tbody>
          </table>
        </div>
      </div>

      {/* FAQ Scenarios */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Happens If... Scenarios</h2>
        <div className="space-y-4">
          <ScenarioCard
            question="What happens if I choose 'Broad' query but 'Strict' filtering?"
            answer={
              <>
                <p>→ You'll fetch 1,500-5,000 papers (Stage 2)</p>
                <p>→ But AI will filter down to 2-10% (Stage 3)</p>
                <p>→ Final: 50-300 papers</p>
                <p className="font-semibold mt-2">Trade-off: Time-consuming screening, but won't miss important papers</p>
              </>
            }
          />

          <ScenarioCard
            question="What happens if I skip human review?"
            answer={
              <>
                <p>→ Only suitable for Knowledge Repository mode</p>
                <p>→ Systematic Review mode needs human validation for PRISMA 2020 compliance</p>
                <p className="font-semibold mt-2">Impact: Faster pipeline, but less rigorous for publications</p>
              </>
            }
          />

          <ScenarioCard
            question="Can I change my mind after Stage 3?"
            answer={
              <>
                <p>→ Yes, but you'll need to re-run Stages 3-5</p>
                <p>→ Your query results (Stage 2) are saved and reusable</p>
                <p>→ Estimated time to redo: 1-2 hours</p>
                <p className="font-semibold mt-2">Tip: Test your filtering criteria on a small sample first</p>
              </>
            }
          />
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <h2 className="text-2xl font-bold mb-4">Ready to Start?</h2>
        <p className="mb-4">
          Now that you understand how your decisions shape the final RAG system, head to the Implementation guide to begin your project.
        </p>
        <a
          href="/guide/04-implementation"
          className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
        >
          Go to Implementation Guide →
        </a>
      </div>
    </div>
  );
}

// Component: Decision Stage
function DecisionStage({
  stageNumber,
  title,
  isDecisionPoint,
  children,
  expanded = false
}: {
  stageNumber: number;
  title: string;
  isDecisionPoint: boolean;
  children: React.ReactNode;
  expanded?: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(expanded);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-between"
      >
        <div className="flex items-center gap-3">
          {isDecisionPoint ? (
            <Circle className="w-6 h-6 text-blue-500 fill-blue-500" />
          ) : (
            <Circle className="w-6 h-6 text-gray-400" />
          )}
          <span className="font-bold">Stage {stageNumber}: {title}</span>
          {isDecisionPoint && (
            <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded">
              Your Decision
            </span>
          )}
        </div>
        <ArrowDown className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>

      {isExpanded && (
        <div className="p-4 bg-white dark:bg-gray-900">
          {children}
        </div>
      )}
    </div>
  );
}

// Component: Decision Option
function DecisionOption({
  title,
  icon,
  selected,
  onClick,
  children
}: {
  title: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-lg border-2 transition-all text-left ${
        selected
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-950'
          : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <span className="text-2xl">{icon}</span>
        <span className="font-semibold">{title}</span>
        {selected && <CheckCircle2 className="w-5 h-5 text-blue-500 ml-auto" />}
      </div>
      {children}
    </button>
  );
}

// Component: Query Option
function QueryOption({
  title,
  impact,
  recommended = false
}: {
  title: string;
  impact: string;
  recommended?: boolean;
}) {
  return (
    <div className={`p-3 rounded-lg border ${recommended ? 'border-green-500 bg-green-50 dark:bg-green-950' : 'border-gray-200 dark:border-gray-700'}`}>
      <div className="flex items-center gap-2">
        <ArrowRight className="w-4 h-4" />
        <span className="font-semibold">{title}</span>
        {recommended && (
          <span className="text-xs bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-2 py-0.5 rounded">
            Recommended
          </span>
        )}
      </div>
      <p className="text-sm text-muted-foreground mt-1 ml-6">{impact}</p>
    </div>
  );
}

// Component: Stage Connector
function StageConnector() {
  return (
    <div className="flex justify-center py-4">
      <ArrowDown className="w-6 h-6 text-gray-400" />
    </div>
  );
}

// Component: Impact Row
function ImpactRow({
  choice,
  affects,
  impact,
  impactColor,
  example
}: {
  choice: string;
  affects: string;
  impact: string;
  impactColor: 'red' | 'orange' | 'yellow' | 'green';
  example: string;
}) {
  const colorClasses = {
    red: 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300',
    orange: 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300',
    yellow: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300',
    green: 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
  };

  return (
    <tr className="border-b dark:border-gray-700">
      <td className="border p-3 font-semibold">{choice}</td>
      <td className="border p-3">{affects}</td>
      <td className="border p-3">
        <span className={`px-2 py-1 rounded text-sm font-semibold ${colorClasses[impactColor]}`}>
          {impact}
        </span>
      </td>
      <td className="border p-3 text-sm text-muted-foreground">{example}</td>
    </tr>
  );
}

// Component: Scenario Card
function ScenarioCard({
  question,
  answer
}: {
  question: string;
  answer: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-orange-500" />
          <span className="font-semibold">{question}</span>
        </div>
        <ArrowDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="p-4 bg-white dark:bg-gray-900 text-sm space-y-1">
          {answer}
        </div>
      )}
    </div>
  );
}
