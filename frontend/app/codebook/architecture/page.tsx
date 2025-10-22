import GuideLayout from '@/components/GuideLayout'
import Link from 'next/link'
import Mermaid from '@/components/Mermaid'
import ReactFlowDiagram from '@/components/diagrams/ReactFlowDiagram'

export default function ArchitecturePage() {
  return (
    <GuideLayout>
      <div className="max-w-5xl">
        <h1 className="text-4xl font-bold mb-6">System Architecture</h1>

        <div className="callout callout-info mb-8">
          <p className="font-semibold mb-2">🏗️ For Developers & Code Reviewers</p>
          <p className="mb-0">
            This page explains how all files in ScholaRAG connect and communicate.
            Essential reading for contributors, code reviewers, and AI assistants.
          </p>
        </div>

        {/* High-Level Architecture */}
        <section className="mb-12">
          <h2 id="overview">High-Level Architecture</h2>

          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg border mb-6">
            <pre className="text-sm overflow-x-auto">
{`User (via Claude Code)
    ↓
prompts/*.md (Stage 1-7 conversation flows)
    ↓
scholarag_cli.py (Orchestration & initialization)
    ↓
config.yaml (Project configuration)
    ↓
scripts/*.py (Automated pipeline execution)
    ↓
data/ (Processed results)
    ↓
outputs/ (Final RAG system + PRISMA diagram)`}
            </pre>
          </div>

          <p>
            ScholaRAG follows a <strong>layered architecture</strong> where each layer has a specific responsibility:
          </p>

          <ul>
            <li><strong>Conversation Layer</strong>: prompts/*.md guide users through decisions</li>
            <li><strong>Configuration Layer</strong>: config.yaml stores all project settings</li>
            <li><strong>Orchestration Layer</strong>: scholarag_cli.py coordinates script execution</li>
            <li><strong>Execution Layer</strong>: scripts/*.py process data</li>
            <li><strong>Data Layer</strong>: data/ folders store intermediate results</li>
          </ul>
        </section>

        {/* File Dependency Map */}
        <section className="mb-12">
          <h2 id="dependency-map">File Dependency Map</h2>

          <p className="mb-6">
            This diagram shows the complete file dependency flow in ScholaRAG, organized into 4 distinct layers.
            Each layer has a specific role in the automated research pipeline.
          </p>

          <Mermaid
            scale={1.3}
            chart={`graph TB
    %% ==========================================
    %% Layer 1: User & Conversation
    %% ==========================================
    User([👤 User via Claude Code])

    subgraph Layer1[" 🎯 LAYER 1: User & Conversation "]
        direction LR
        Stage1["📝 Stage 1<br/>Research Setup<br/><small>01_research_domain_setup.md</small>"]
        Stage2["📝 Stage 2<br/>Query Strategy<br/><small>02_query_strategy.md</small>"]
        Stage3["📝 Stage 3<br/>PRISMA Config<br/><small>03_prisma_configuration.md</small>"]
        CLI["⚙️ scholarag_cli.py<br/><small>Orchestrator</small>"]
        ConfigBase["📄 config_base.yaml<br/><small>Template</small>"]
    end

    %% ==========================================
    %% Layer 2: Configuration Hub
    %% ==========================================
    subgraph Layer2[" ⭐ LAYER 2: Configuration Hub "]
        Config["🎯 config.yaml<br/><strong>Single Source of Truth</strong><br/><small>Stores all project settings</small>"]
    end

    %% ==========================================
    %% Layer 3 & 4: Execution & Data (Side by Side)
    %% ==========================================
    subgraph Layer3[" 🔧 LAYER 3: Execution Pipeline "]
        direction TB
        S1["📥 01_fetch_papers.py<br/><small>Query APIs</small>"]
        S2["🔄 02_deduplicate.py<br/><small>Remove duplicates</small>"]
        S3["⚠️ 03_screen_papers.py<br/><small>AI Relevance Check</small><br/><span style='color:#c62828;font-weight:bold'>CRITICAL: project_type</span>"]
        S4["📄 04_download_pdfs.py<br/><small>PDF Retrieval</small>"]
        S5["🗄️ 05_build_rag.py<br/><small>Vector Embeddings</small>"]
        S6["💬 06_query_rag.py<br/><small>Literature Q&A</small>"]
        S7["⚠️ 07_generate_prisma.py<br/><small>PRISMA Diagram</small><br/><span style='color:#c62828;font-weight:bold'>CRITICAL: project_type</span>"]

        S1 --> S2
        S2 --> S3
        S3 --> S4
        S4 --> S5
        S5 --> S6
    end

    subgraph Layer4[" 💾 LAYER 4: Data Storage "]
        direction TB
        D1["💾 data/01_identification/<br/><small>Raw Papers CSV</small>"]
        D2["💾 data/02_screening/<br/><small>Relevant Papers</small>"]
        D3["💾 data/pdfs/<br/><small>PDF Files</small>"]
        D4["💾 data/chroma/<br/><small>Vector Database</small>"]
        D5["💾 outputs/<br/><small>prisma_diagram.png</small>"]
    end

    %% ==========================================
    %% Main Flow Connections
    %% ==========================================

    %% Layer 1 → Layer 2
    User -->|"1. Start"| Stage1
    Stage1 -->|"2. Initialize"| CLI
    CLI -->|"3. Copy template"| ConfigBase
    ConfigBase -->|"4. Create"| Config
    Stage2 -->|"5. Add query"| Config
    Stage3 -->|"6. PRISMA rules"| Config

    %% Layer 2 → Layer 3
    Config -->|"Reads config"| S1

    %% Layer 3 ↔ Layer 4 (Data Flow)
    S1 -.->|"Papers CSV"| D1
    D1 -.->|"Load"| S2
    S3 -.->|"Relevant only"| D2
    D2 -.->|"URLs"| S4
    S4 -.->|"PDFs"| D3
    D3 -.->|"Read PDFs"| S5
    S5 -.->|"Embeddings"| D4
    D4 -.->|"Vector search"| S6

    %% Critical Branching
    Config ==>|"<strong>project_type</strong><br/>50% vs 90%"| S3
    Config ==>|"<strong>project_type</strong><br/>Diagram title"| S7

    %% PRISMA Branch
    D1 & D2 & D3 -.-> S7
    S7 -.->|"PNG"| D5

    %% Final Output
    S6 -->|"Results"| User

    %% ==========================================
    %% Styling
    %% ==========================================

    %% Layer 1: Yellow theme
    classDef layer1Style fill:#FFF9E6,stroke:#F59E0B,stroke-width:4px,color:#000
    classDef userStyle fill:#E1F5FF,stroke:#01579B,stroke-width:3px,color:#000
    classDef promptStyle fill:#FFF9C4,stroke:#F57F17,stroke-width:2px,color:#000
    classDef configBaseStyle fill:#FFF9C4,stroke:#F57F17,stroke-width:2px,color:#000

    %% Layer 2: Green theme (highlighted)
    classDef layer2Style fill:#E8F5E9,stroke:#2E7D32,stroke-width:4px,color:#000
    classDef configStyle fill:#A5D6A7,stroke:#2E7D32,stroke-width:4px,color:#000,font-weight:bold

    %% Layer 3: Purple theme
    classDef layer3Style fill:#F3E5F5,stroke:#6A1B9A,stroke-width:4px,color:#000
    classDef scriptStyle fill:#E1BEE7,stroke:#6A1B9A,stroke-width:2px,color:#000
    classDef criticalStyle fill:#FFCDD2,stroke:#C62828,stroke-width:3px,color:#000,font-weight:bold

    %% Layer 4: Gray theme
    classDef layer4Style fill:#F5F5F5,stroke:#757575,stroke-width:4px,color:#000
    classDef dataStyle fill:#E0E0E0,stroke:#424242,stroke-width:2px,color:#000

    %% Apply styles
    class Layer1 layer1Style
    class Layer2 layer2Style
    class Layer3 layer3Style
    class Layer4 layer4Style

    class User userStyle
    class Stage1,Stage2,Stage3 promptStyle
    class CLI configBaseStyle
    class ConfigBase configBaseStyle
    class Config configStyle
    class S1,S2,S4,S5,S6 scriptStyle
    class S3,S7 criticalStyle
    class D1,D2,D3,D4,D5 dataStyle
`}
          />

          {/* Old Mermaid diagram - kept as comment for reference
          <Mermaid
            scale={1.2}
            chart={`graph LR
    %% User Layer
    User([👤 User<br/>via Claude Code])

    %% Conversation Layer
    subgraph Prompts[" 📝 Conversation Prompts "]
        P1["Stage 1<br/>01_research_domain_setup.md"]
        P2["Stage 2<br/>02_query_strategy.md"]
        P3["Stage 3<br/>03_prisma_configuration.md"]
    end

    %% Orchestration
    CLI["⚙️ scholarag_cli.py<br/>(Orchestrator)"]

    %% Configuration Hub
    subgraph Config[" 🎯 Configuration Hub "]
        TMPL["templates/<br/>config_base.yaml"]
        CONF["config.yaml<br/>(Single Source of Truth)"]
    end

    %% Execution Scripts
    subgraph Scripts[" 🔧 Execution Pipeline "]
        S1["📥 01_fetch_papers.py<br/>Query databases"]
        S2["🔄 02_deduplicate.py<br/>Remove duplicates"]
        S3["✅ 03_screen_papers.py<br/>PRISMA screening<br/><span style='color:red'>⚠️ project_type</span>"]
        S4["📄 04_download_pdfs.py<br/>Get full texts"]
        S5["🗄️ 05_build_rag.py<br/>Build vector DB"]
        S6["💬 06_query_rag.py<br/>Research queries"]
        S7["📊 07_generate_prisma.py<br/>PRISMA diagram<br/><span style='color:red'>⚠️ project_type</span>"]
    end

    %% Data Storage
    subgraph Data[" 💾 Data Storage "]
        D1["data/01_identification/<br/>*.csv"]
        D2["data/02_screening/<br/>relevant.csv"]
        D3["data/pdfs/<br/>*.pdf"]
        D4["data/chroma/<br/>Vector DB"]
        D5["outputs/<br/>prisma_diagram.png"]
    end

    %% Main Flow
    User -->|"1. Start project"| P1
    P1 -->|"2. Initialize"| CLI
    CLI -->|"3. Copy template"| TMPL
    TMPL -->|"4. Create"| CONF

    P2 -->|"5. Add search query"| CONF
    P3 -->|"6. Add PRISMA rules"| CONF

    CLI -->|"7. Execute Stage 1"| S1
    S1 -->|"Papers JSON/CSV"| D1
    D1 --> S2
    S2 -->|"Deduplicated"| S3

    CONF -.->|"project_type:<br/>knowledge_repository<br/>or systematic_review"| S3

    S3 -->|"Relevant papers"| D2
    D2 --> S4
    S4 -->|"PDFs"| D3
    D3 --> S5
    S5 -->|"Embeddings"| D4
    D4 --> S6
    S6 -->|"Answers + Citations"| User

    CONF -.->|"project_type:<br/>changes diagram title"| S7
    D1 & D2 & D3 --> S7
    S7 -->|"PRISMA flowchart"| D5

    %% Styling
    classDef userStyle fill:#e1f5ff,stroke:#01579b,stroke-width:3px
    classDef promptStyle fill:#fff9c4,stroke:#f57f17,stroke-width:2px
    classDef configStyle fill:#c8e6c9,stroke:#2e7d32,stroke-width:3px
    classDef scriptStyle fill:#f3e5f5,stroke:#6a1b9a,stroke-width:2px
    classDef criticalStyle fill:#ffcdd2,stroke:#c62828,stroke-width:3px
    classDef dataStyle fill:#e0e0e0,stroke:#424242,stroke-width:2px

    class User userStyle
    class P1,P2,P3 promptStyle
    class CONF configStyle
    class CLI configStyle
    class TMPL promptStyle
    class S1,S2,S4,S5,S6 scriptStyle
    class S3,S7 criticalStyle
    class D1,D2,D3,D4,D5 dataStyle
`} />
          */}

          <div className="callout callout-warning mt-6">
            <p className="font-semibold mb-2">🔴 Critical: project_type Branching</p>
            <p className="mb-2">
              Red nodes (03_screen_papers.py, 07_generate_prisma.py) read <code>project_type</code> from config.yaml
              and adjust their behavior accordingly. Thick red arrows (==&gt;) indicate critical branching points.
            </p>
            <ul className="text-sm space-y-1 mb-0">
              <li><strong>03_screen_papers.py</strong>: Sets screening threshold (50% for knowledge_repository, 90% for systematic_review)</li>
              <li><strong>07_generate_prisma.py</strong>: Changes PRISMA diagram title based on project type</li>
            </ul>
          </div>
        </section>

        {/* Configuration Hub */}
        <section className="mb-12">
          <h2 id="config-hub">config.yaml: The Central Hub</h2>

          <p>
            <code>config.yaml</code> is the <strong>single source of truth</strong> for all project settings.
            Every script reads from it, making it the most important file in the system.
          </p>

          <h3>Critical Fields by Script</h3>

          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border p-3 text-left">Script</th>
                <th className="border p-3 text-left">Reads From config.yaml</th>
                <th className="border p-3 text-left">Why It Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-mono text-sm">01_fetch_papers.py</td>
                <td className="border p-3 text-sm">
                  <code>search_query</code>, <code>databases</code>
                </td>
                <td className="border p-3 text-sm">Determines which databases to query and what keywords to use</td>
              </tr>
              <tr>
                <td className="border p-3 font-mono text-sm">03_screen_papers.py</td>
                <td className="border p-3 text-sm">
                  <code className="text-red-600 dark:text-red-400">project_type</code>,
                  <code>ai_prisma_rubric</code>
                </td>
                <td className="border p-3 text-sm">
                  <strong>Critical:</strong> Sets screening thresholds (50% for knowledge_repository, 90% for systematic_review)
                </td>
              </tr>
              <tr>
                <td className="border p-3 font-mono text-sm">05_build_rag.py</td>
                <td className="border p-3 text-sm">
                  <code>rag_settings.embedding_model</code>, <code>rag_settings.llm</code>
                </td>
                <td className="border p-3 text-sm">Determines quality and cost of RAG system</td>
              </tr>
              <tr>
                <td className="border p-3 font-mono text-sm">06_query_rag.py</td>
                <td className="border p-3 text-sm">
                  <code>rag_settings.llm</code>, <code>rag_settings.temperature</code>
                </td>
                <td className="border p-3 text-sm">Controls answer generation quality and randomness</td>
              </tr>
              <tr>
                <td className="border p-3 font-mono text-sm">07_generate_prisma.py</td>
                <td className="border p-3 text-sm">
                  <code className="text-red-600 dark:text-red-400">project_type</code>,
                  <code>project_name</code>
                </td>
                <td className="border p-3 text-sm">
                  <strong>Critical:</strong> Changes diagram title based on project type
                </td>
              </tr>
            </tbody>
          </table>

          <div className="callout callout-success">
            <p className="font-semibold mb-2">💡 Design Principle</p>
            <p className="mb-0">
              Scripts never hardcode values. Everything comes from config.yaml, making projects portable and reproducible.
            </p>
          </div>
        </section>

        {/* Data Flow */}
        <section className="mb-12">
          <h2 id="data-flow">Data Flow: Stage by Stage</h2>

          <div className="space-y-6">
            <DataFlowStage
              stageNumber={1}
              scriptName="01_fetch_papers.py"
              input="config.yaml (search_query, databases)"
              output="data/01_identification/*.csv"
              description="Fetches papers from Semantic Scholar, OpenAlex, arXiv using configured query"
            />

            <DataFlowStage
              stageNumber={2}
              scriptName="02_deduplicate.py"
              input="data/01_identification/*.csv"
              output="data/01_identification/deduplicated.csv"
              description="Removes duplicates by DOI, arXiv ID, and title similarity"
            />

            <DataFlowStage
              stageNumber={3}
              scriptName="03_screen_papers.py"
              input="deduplicated.csv + config.yaml (project_type)"
              output="data/02_screening/relevant.csv, excluded.csv"
              description="⚠️ CRITICAL: Adjusts screening threshold based on project_type"
              critical={true}
            />

            <DataFlowStage
              stageNumber={4}
              scriptName="04_download_pdfs.py"
              input="data/02_screening/relevant.csv"
              output="data/pdfs/*.pdf"
              description="Downloads PDFs from open_access URLs with retry logic"
            />

            <DataFlowStage
              stageNumber={5}
              scriptName="05_build_rag.py"
              input="data/pdfs/*.pdf + config.yaml (RAG settings)"
              output="data/chroma/ (ChromaDB)"
              description="Chunks PDFs, generates embeddings, stores in vector database"
            />

            <DataFlowStage
              stageNumber={6}
              scriptName="06_query_rag.py"
              input="data/chroma/ + config.yaml (LLM)"
              output="Interactive console output"
              description="Retrieves relevant chunks, generates answers with citations"
            />

            <DataFlowStage
              stageNumber={7}
              scriptName="07_generate_prisma.py"
              input="All data/ folders + config.yaml (project_type)"
              output="outputs/prisma_diagram.png"
              description="⚠️ CRITICAL: Title changes based on project_type"
              critical={true}
            />
          </div>
        </section>

        {/* Common Pitfalls */}
        <section className="mb-12">
          <h2 id="pitfalls">Common Pitfalls for Contributors</h2>

          <div className="space-y-4">
            <PitfallCard
              title="Adding a new field to config.yaml"
              problem="You add a field but forget to update documentation"
              solution={
                <ul className="text-sm space-y-1">
                  <li>1. Update <code>templates/config_base.yaml</code> with inline comments</li>
                  <li>2. Update relevant <code>prompts/*.md</code> to collect this field</li>
                  <li>3. Update relevant <code>scripts/*.py</code> to read this field</li>
                  <li>4. Update <code>ARCHITECTURE.md</code> to document dependencies</li>
                  <li>5. Update <code>RELEASE_NOTES_vX.X.X.md</code></li>
                </ul>
              }
            />

            <PitfallCard
              title="Changing project_type logic"
              problem="You modify thresholds but only update one script"
              solution={
                <ul className="text-sm space-y-1">
                  <li>Files to update: <code>03_screen_papers.py</code>, <code>07_generate_prisma.py</code></li>
                  <li>Prompts to update: <code>01_research_domain_setup.md</code>, <code>03_prisma_configuration.md</code></li>
                  <li>Template to update: <code>templates/config_base.yaml</code></li>
                  <li>Search for all occurrences: <code>grep -r "project_type" .</code></li>
                </ul>
              }
            />

            <PitfallCard
              title="Creating a new script"
              problem="Script reads config but doesn't validate required fields"
              solution={
                <ul className="text-sm space-y-1">
                  <li>1. Add <code>load_config()</code> method to validate required fields</li>
                  <li>2. Use <code>self.config.get('field', default_value)</code> with safe defaults</li>
                  <li>3. Print clear error messages: "❌ Missing required field: X"</li>
                  <li>4. Add script to dependency map in <code>ARCHITECTURE.md</code></li>
                </ul>
              }
            />
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-12">
          <h2 id="quick-reference">Quick Reference Tables</h2>

          <h3>Where is X defined?</h3>
          <table className="w-full border-collapse mb-6">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <th className="border p-3 text-left">What</th>
                <th className="border p-3 text-left">Defined In</th>
                <th className="border p-3 text-left">Used By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-mono text-sm">project_type</td>
                <td className="border p-3 text-sm">config.yaml (Stage 1)</td>
                <td className="border p-3 text-sm">03_screen_papers.py, 07_generate_prisma.py, all prompts</td>
              </tr>
              <tr>
                <td className="border p-3 font-mono text-sm">search_query</td>
                <td className="border p-3 text-sm">config.yaml (Stage 2)</td>
                <td className="border p-3 text-sm">01_fetch_papers.py</td>
              </tr>
              <tr>
                <td className="border p-3 font-mono text-sm">ai_prisma_rubric</td>
                <td className="border p-3 text-sm">config.yaml (Stage 3)</td>
                <td className="border p-3 text-sm">03_screen_papers.py</td>
              </tr>
              <tr>
                <td className="border p-3 font-mono text-sm">rag_settings</td>
                <td className="border p-3 text-sm">config.yaml (Stage 4)</td>
                <td className="border p-3 text-sm">05_build_rag.py, 06_query_rag.py</td>
              </tr>
              <tr>
                <td className="border p-3 font-mono text-sm">API keys</td>
                <td className="border p-3 text-sm">.env (Stage 5)</td>
                <td className="border p-3 text-sm">03_screen_papers.py, 05_build_rag.py, 06_query_rag.py</td>
              </tr>
            </tbody>
          </table>

          <h3>Script Execution Order</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg border text-sm font-mono">
            <div>1. 01_fetch_papers.py → data/01_identification/*.csv</div>
            <div>2. 02_deduplicate.py → data/01_identification/deduplicated.csv</div>
            <div>3. 03_screen_papers.py → data/02_screening/*.csv</div>
            <div>4. 04_download_pdfs.py → data/pdfs/*.pdf</div>
            <div>5. 05_build_rag.py → data/chroma/</div>
            <div>6. 06_query_rag.py → Interactive</div>
            <div>7. 07_generate_prisma.py → outputs/prisma_diagram.png</div>
          </div>
        </section>

        {/* Next Steps */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
          <h3 className="text-xl font-bold mb-3">Ready to Contribute?</h3>
          <p className="mb-4">
            Now that you understand the architecture, check out the detailed script documentation
            to see how each component works internally.
          </p>
          <Link
            href="/codebook/scripts"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            View Script Documentation →
          </Link>
        </div>
      </div>
    </GuideLayout>
  )
}

// Component: Data Flow Stage
function DataFlowStage({
  stageNumber,
  scriptName,
  input,
  output,
  description,
  critical = false
}: {
  stageNumber: number;
  scriptName: string;
  input: string;
  output: string;
  description: string;
  critical?: boolean;
}) {
  return (
    <div className={`border rounded-lg p-4 ${critical ? 'border-red-500 bg-red-50 dark:bg-red-950' : 'border-gray-200 dark:border-gray-700'}`}>
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold ${
          critical ? 'bg-red-500 text-white' : 'bg-gray-200 dark:bg-gray-700'
        }`}>
          {stageNumber}
        </div>
        <div className="flex-1">
          <h4 className="font-bold text-lg mb-1">
            <code className="text-sm">{scriptName}</code>
          </h4>
          <p className="text-sm text-muted-foreground mb-2">{description}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">Input:</span>
              <div className="font-mono text-xs mt-1">{input}</div>
            </div>
            <div>
              <span className="font-semibold">Output:</span>
              <div className="font-mono text-xs mt-1">{output}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component: Pitfall Card
function PitfallCard({
  title,
  problem,
  solution
}: {
  title: string;
  problem: string;
  solution: React.ReactNode;
}) {
  return (
    <div className="border border-orange-300 dark:border-orange-700 bg-orange-50 dark:bg-orange-950 rounded-lg p-4">
      <h4 className="font-bold text-lg mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground mb-3">
        <span className="font-semibold">❌ Problem:</span> {problem}
      </p>
      <div>
        <span className="font-semibold">✅ Solution:</span>
        <div className="mt-2">{solution}</div>
      </div>
    </div>
  );
}
