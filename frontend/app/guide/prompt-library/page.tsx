import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import { CodeBlock } from '@/components/CodeBlock'

export default function PromptLibraryPage() {
  const scenarios = [
    {
      id: 'overview',
      name: 'Context Scanning',
      icon: '🔍',
      description: 'Get high-level overview of literature themes, methods, and findings',
      useCase: 'Initial exploration, understanding corpus structure',
      href: '/guide/prompt-library/overview'
    },
    {
      id: 'hypothesis',
      name: 'Hypothesis Validation',
      icon: '🧪',
      description: 'Test hypothesis with supporting/refuting evidence and effect sizes',
      useCase: 'Validate research assumptions, build argument',
      href: '/guide/prompt-library/hypothesis'
    },
    {
      id: 'statistics',
      name: 'Statistical Extraction',
      icon: '📊',
      description: 'Extract quantitative data (effect sizes, sample sizes, measurement tools)',
      useCase: 'Meta-analysis preparation, data synthesis',
      href: '/guide/prompt-library/statistics'
    },
    {
      id: 'methods',
      name: 'Methodology Comparison',
      icon: '🔬',
      description: 'Compare RCT vs quasi-experimental vs mixed methods approaches',
      useCase: 'Understand methodological diversity, justify method choice',
      href: '/guide/prompt-library/methods'
    },
    {
      id: 'contradictions',
      name: 'Contradiction Detection',
      icon: '⚡',
      description: 'Identify conflicting results and analyze potential reasons',
      useCase: 'Critical analysis, identifying research needs',
      href: '/guide/prompt-library/contradictions'
    },
    {
      id: 'policy',
      name: 'Policy Translation',
      icon: '📋',
      description: 'Convert research findings into actionable policy recommendations',
      useCase: 'Policy briefs, practitioner guidance',
      href: '/guide/prompt-library/policy'
    },
    {
      id: 'grant',
      name: 'Future Research Design',
      icon: '🚀',
      description: 'Design follow-up studies based on identified research gaps',
      useCase: 'Grant proposals, dissertation planning',
      href: '/guide/prompt-library/grant'
    }
  ]

  return (
    <GuideLayout
      githubUrl="https://github.com/HosungYou/researcherRAG/blob/main/researcherrag_cli.py#L969-L1081"
      githubLabel="View CLI Source"
    >
      <h1>Prompt Library</h1>

      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
        Ready-to-use prompt templates for Stage 6 research conversations. Copy, customize, and paste these prompts into your RAG interface to efficiently extract insights from your literature database.
      </p>

      <div className="border border-gray-300 rounded-lg p-4 bg-white mb-8">
        <p className="font-semibold mb-2">💡 How to Use This Library</p>
        <ol className="text-sm space-y-2">
          <li><strong>1. Choose a scenario</strong> below that matches your research goal</li>
          <li><strong>2. Click to view</strong> the detailed prompt template</li>
          <li><strong>3. Copy the prompt</strong> and customize placeholders</li>
          <li><strong>4. Paste into your RAG interface</strong>:
            <CodeBlock language="bash" code="python scripts/06_query_rag.py" />
          </li>
        </ol>
      </div>

      <h2 id="scenarios">7 Research Scenarios</h2>

      <p className="mb-6">
        These prompts are optimized for systematic literature review workflows and follow PRISMA 2020 best practices. Each template includes specific instructions for citation format, evidence organization, and output structure.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
        {scenarios.map((scenario) => (
          <Link
            key={scenario.id}
            href={scenario.href}
            className="border-2 border-gray-300 hover:border-gray-900 rounded-lg p-5 transition-colors bg-white"
          >
            <div className="flex items-start gap-3">
              <span className="text-3xl">{scenario.icon}</span>
              <div className="flex-1">
                <h3 className="font-bold text-lg mb-1">{scenario.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{scenario.description}</p>
                <p className="text-xs text-gray-600">
                  <strong>Use case:</strong> {scenario.useCase}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <h2 id="cli-access">CLI Access</h2>

      <p>
        You can also access these prompts via the command line for quick copying:
      </p>

      <div className="space-y-3 my-6">
        <CodeBlock
          language="bash"
          code={`# List all available scenarios
researcherrag stage6-examples

# Copy a specific prompt
researcherrag stage6-prompt hypothesis
researcherrag stage6-prompt statistics
researcherrag stage6-prompt contradictions`}
        />
      </div>

      <h2 id="customization-tips">Customization Tips</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-2">✏️ Modify Placeholders</h4>
          <p className="text-sm text-muted-foreground">
            All prompts include <code>[placeholders]</code> for you to customize. Replace them with your specific research context, variables, or questions.
          </p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-2">🔗 Combine Prompts</h4>
          <p className="text-sm text-muted-foreground">
            Use multiple prompts in sequence. For example, start with "Context Scanning" then follow up with "Hypothesis Validation" for deeper analysis.
          </p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-2">📝 Add Constraints</h4>
          <p className="text-sm text-muted-foreground">
            Narrow results by adding filters like "Focus on studies from 2020-2024" or "Only include RCT studies" at the end of prompts.
          </p>
        </div>

        <div className="border border-gray-300 rounded-lg p-4 bg-white">
          <h4 className="font-semibold mb-2">🎯 Iterate & Refine</h4>
          <p className="text-sm text-muted-foreground">
            Start broad, then ask follow-up questions to dig deeper. Use initial responses to guide more targeted queries.
          </p>
        </div>
      </div>

      <h2 id="best-practices">Best Practices</h2>

      <div className="border-l-4 border-gray-900 bg-gray-50 p-4 my-6">
        <ul className="space-y-2 text-sm">
          <li><strong>✓ Always verify citations:</strong> Spot-check that cited papers actually exist in your database</li>
          <li><strong>✓ Document your sessions:</strong> Keep a log of prompts used and key findings</li>
          <li><strong>✓ Export results regularly:</strong> Save conversation outputs to markdown files</li>
          <li><strong>✓ Validate claims:</strong> Read original papers for critical findings before citing in your work</li>
          <li><strong>✓ Use interface scripts:</strong> Always run <code>python scripts/06_query_rag.py</code>, not direct Claude chat</li>
        </ul>
      </div>

      <h2 id="advanced-usage">Advanced Usage</h2>

      <p>
        For comprehensive guidance on Stage 6 research conversations, including iterative workflows, citation management, and session documentation, see:
      </p>

      <div className="my-6">
        <Link href="/guide/06-research-conversation" className="border border-gray-300 hover:border-gray-900 rounded-lg p-6 block transition-colors bg-white">
          <h3 className="font-semibold mb-2">📖 Chapter 6: Research Conversation & Analysis</h3>
          <p className="text-sm text-muted-foreground">
            Learn query strategies, iterative research workflows, citation management, and best practices for extracting insights from your RAG knowledge base.
          </p>
        </Link>
      </div>

      <div className="border border-gray-300 rounded-lg p-4 bg-gray-50 my-6">
        <p className="font-semibold mb-2">🎯 Ready to Start?</p>
        <p className="mb-0">
          Choose a scenario above, copy the prompt, and fire up your RAG interface. Remember: these are starting points—customize them to match your specific research questions!
        </p>
      </div>
    </GuideLayout>
  )
}
