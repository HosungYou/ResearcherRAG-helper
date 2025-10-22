'use client'

export default function FileDependencyDiagram() {
  return (
    <div className="w-full overflow-x-auto bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 p-8">
      <div className="min-w-[1400px] flex flex-col gap-8">

        {/* Row 1: User → Prompts → CLI */}
        <div className="flex items-center gap-4">
          <Node
            label="👤 User"
            sublabel="via Claude Code"
            color="blue"
            width="140px"
          />
          <Arrow label="1. Start project" />
          <Node
            label="📝 Stage 1"
            sublabel="01_research_domain_setup.md"
            color="yellow"
            width="240px"
          />
          <Arrow label="2. Initialize" />
          <Node
            label="⚙️ scholarag_cli.py"
            sublabel="Orchestrator"
            color="green"
            width="200px"
          />
          <Arrow label="3. Copy template" />
          <Node
            label="📄 config_base.yaml"
            sublabel="Template"
            color="yellow"
            width="180px"
          />
        </div>

        {/* Row 2: Config Updates */}
        <div className="flex items-center gap-4 pl-[580px]">
          <Arrow label="4. Create" direction="down" />
        </div>

        <div className="flex items-center gap-4 pl-[580px]">
          <Node
            label="🎯 config.yaml"
            sublabel="Single Source of Truth"
            color="green"
            width="280px"
            highlight
          />
        </div>

        {/* Row 3: Stage 2 & 3 Updates */}
        <div className="flex items-center gap-4">
          <Node
            label="📝 Stage 2"
            sublabel="02_query_strategy.md"
            color="yellow"
            width="240px"
          />
          <Arrow label="5. Add query" />
          <div className="w-[280px] text-center text-sm text-gray-500">
            Updates config.yaml
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Node
            label="📝 Stage 3"
            sublabel="03_prisma_configuration.md"
            color="yellow"
            width="240px"
          />
          <Arrow label="6. Add PRISMA rules" />
          <div className="w-[280px] text-center text-sm text-gray-500">
            Updates config.yaml
          </div>
        </div>

        {/* Divider */}
        <div className="border-t-2 border-dashed border-gray-300 dark:border-gray-600 my-4" />

        {/* Row 4: Script Execution Pipeline */}
        <div className="flex flex-col gap-4">
          <div className="text-lg font-bold text-center mb-2">
            🔧 Execution Pipeline (Automated)
          </div>

          <div className="flex items-center gap-4">
            <Node
              label="📥 01_fetch_papers.py"
              sublabel="Query databases"
              color="purple"
              width="220px"
            />
            <Arrow label="Papers CSV" />
            <Node
              label="💾 data/01_identification/"
              sublabel="*.csv"
              color="gray"
              width="240px"
            />
            <Arrow label="" />
            <Node
              label="🔄 02_deduplicate.py"
              sublabel="Remove duplicates"
              color="purple"
              width="220px"
            />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Arrow label="" direction="down" />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Node
              label="✅ 03_screen_papers.py"
              sublabel="PRISMA screening"
              color="red"
              width="240px"
              critical
            />
          </div>

          {/* Config connection */}
          <div className="flex items-center gap-4 pl-[300px]">
            <DashedLine label="project_type branching" />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Arrow label="Relevant papers" direction="down" />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Node
              label="💾 data/02_screening/"
              sublabel="relevant.csv"
              color="gray"
              width="240px"
            />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Arrow label="" direction="down" />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Node
              label="📄 04_download_pdfs.py"
              sublabel="Get full texts"
              color="purple"
              width="240px"
            />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Arrow label="PDFs" direction="down" />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Node
              label="💾 data/pdfs/"
              sublabel="*.pdf"
              color="gray"
              width="240px"
            />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Arrow label="" direction="down" />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Node
              label="🗄️ 05_build_rag.py"
              sublabel="Build vector DB"
              color="purple"
              width="240px"
            />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Arrow label="Embeddings" direction="down" />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Node
              label="💾 data/chroma/"
              sublabel="Vector DB"
              color="gray"
              width="240px"
            />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Arrow label="" direction="down" />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Node
              label="💬 06_query_rag.py"
              sublabel="Research queries"
              color="purple"
              width="240px"
            />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Arrow label="Answers + Citations" direction="down" />
          </div>

          <div className="flex items-center gap-4 pl-[490px]">
            <Node
              label="👤 User"
              sublabel="Research insights"
              color="blue"
              width="200px"
            />
          </div>

          {/* PRISMA Generation Branch */}
          <div className="border-t-2 border-dashed border-gray-300 dark:border-gray-600 my-4" />

          <div className="flex items-center gap-4">
            <Node
              label="📊 07_generate_prisma.py"
              sublabel="PRISMA diagram"
              color="red"
              width="240px"
              critical
            />
            <Arrow label="All data folders" />
            <Node
              label="💾 outputs/"
              sublabel="prisma_diagram.png"
              color="gray"
              width="220px"
            />
          </div>

          <div className="flex items-center gap-4 pl-[0px]">
            <DashedLine label="project_type: changes diagram title" />
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-8 pt-6 border-t border-gray-300 dark:border-gray-600">
        <div className="text-sm font-semibold mb-3">Legend:</div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-100 dark:bg-blue-900 border-2 border-blue-500" />
            <span>User Interaction</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-yellow-100 dark:bg-yellow-900 border-2 border-yellow-500" />
            <span>Conversation Prompts</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-100 dark:bg-green-900 border-2 border-green-600" />
            <span>Configuration</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-purple-100 dark:bg-purple-900 border-2 border-purple-500" />
            <span>Execution Scripts</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-100 dark:bg-red-900 border-2 border-red-600" />
            <span>Critical Branching</span>
          </div>
        </div>
      </div>
    </div>
  )
}

// Node Component
function Node({
  label,
  sublabel,
  color,
  width = '200px',
  highlight = false,
  critical = false
}: {
  label: string
  sublabel: string
  color: 'blue' | 'yellow' | 'green' | 'purple' | 'red' | 'gray'
  width?: string
  highlight?: boolean
  critical?: boolean
}) {
  const colorClasses = {
    blue: 'bg-blue-50 dark:bg-blue-950 border-blue-500',
    yellow: 'bg-yellow-50 dark:bg-yellow-950 border-yellow-500',
    green: 'bg-green-50 dark:bg-green-950 border-green-600',
    purple: 'bg-purple-50 dark:bg-purple-950 border-purple-500',
    red: 'bg-red-50 dark:bg-red-950 border-red-600',
    gray: 'bg-gray-100 dark:bg-gray-800 border-gray-400'
  }

  return (
    <div
      className={`${colorClasses[color]} ${
        highlight ? 'border-4 shadow-lg' : critical ? 'border-3 shadow-md' : 'border-2'
      } rounded-lg p-3 text-center transition-transform hover:scale-105`}
      style={{ width }}
    >
      <div className="font-semibold text-sm mb-1">{label}</div>
      <div className="text-xs text-gray-600 dark:text-gray-400">{sublabel}</div>
    </div>
  )
}

// Arrow Component
function Arrow({
  label = '',
  direction = 'right'
}: {
  label?: string
  direction?: 'right' | 'down'
}) {
  if (direction === 'down') {
    return (
      <div className="flex flex-col items-center gap-1">
        <div className="text-xs text-gray-500 whitespace-nowrap">{label}</div>
        <svg width="24" height="40" viewBox="0 0 24 40" className="text-gray-400">
          <line x1="12" y1="0" x2="12" y2="32" stroke="currentColor" strokeWidth="2" />
          <polygon points="12,40 8,32 16,32" fill="currentColor" />
        </svg>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-2">
      <div className="text-xs text-gray-500 whitespace-nowrap">{label}</div>
      <svg width="40" height="24" viewBox="0 0 40 24" className="text-gray-400">
        <line x1="0" y1="12" x2="32" y2="12" stroke="currentColor" strokeWidth="2" />
        <polygon points="40,12 32,8 32,16" fill="currentColor" />
      </svg>
    </div>
  )
}

// Dashed Line Component
function DashedLine({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2">
      <svg width="200" height="2" className="text-red-500">
        <line
          x1="0"
          y1="1"
          x2="200"
          y2="1"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="5,5"
        />
      </svg>
      <span className="text-xs text-red-600 dark:text-red-400 font-semibold whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}
