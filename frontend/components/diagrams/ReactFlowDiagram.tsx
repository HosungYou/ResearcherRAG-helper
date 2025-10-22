'use client'

import { useCallback, useMemo } from 'react'
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  ConnectionLineType,
  MarkerType,
  BackgroundVariant,
  NodeTypes,
} from 'reactflow'
import dagre from '@dagrejs/dagre'
import 'reactflow/dist/style.css'

// Custom Group Node Component
function GroupNode({ data }: { data: { label: string; background: string; borderColor: string } }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        padding: '16px',
        background: data.background,
        border: `3px solid ${data.borderColor}`,
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      }}
    >
      <div style={{ fontWeight: 700, fontSize: '14px', color: '#333', marginBottom: '8px' }}>
        {data.label}
      </div>
    </div>
  )
}

const nodeTypes: NodeTypes = {
  group: GroupNode,
}

// Dagre layout configuration
const dagreGraph = new dagre.graphlib.Graph()
dagreGraph.setDefaultEdgeLabel(() => ({}))

const getLayoutedElements = (nodes: Node[], edges: Edge[]) => {
  dagreGraph.setGraph({
    rankdir: 'TB',  // Top to bottom
    nodesep: 80,    // Horizontal spacing between nodes
    ranksep: 100,   // Vertical spacing between ranks
    edgesep: 50,    // Spacing between edges
  })

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, {
      width: node.width || (node.style?.width as number) || 200,
      height: node.height || (node.style?.height as number) || 80,
    })
  })

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target)
  })

  dagre.layout(dagreGraph)

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id)
    const width = node.width || (node.style?.width as number) || 200
    const height = node.height || (node.style?.height as number) || 80

    return {
      ...node,
      position: {
        x: nodeWithPosition.x - width / 2,
        y: nodeWithPosition.y - height / 2,
      },
    }
  })

  return { nodes: layoutedNodes, edges }
}

// Define all nodes with proper parent-child relationships
const initialNodes: Node[] = [
  // Layer 1 Group: User & Conversation
  {
    id: 'group-layer1',
    type: 'group',
    data: {
      label: '🎯 Layer 1: User & Conversation',
      background: '#FFF9E6',
      borderColor: '#F59E0B',
    },
    position: { x: 0, y: 0 },
    style: { width: 900, height: 280 },
  },
  {
    id: 'user-start',
    parentId: 'group-layer1',
    extent: 'parent' as const,
    position: { x: 20, y: 50 },
    data: { label: '👤 User via Claude Code' },
    style: {
      background: '#E1F5FF',
      border: '2px solid #01579B',
      borderRadius: '8px',
      padding: '12px',
      width: 160,
      height: 60,
      fontSize: '12px',
      fontWeight: '600',
      textAlign: 'center' as const,
    },
  },
  {
    id: 'stage1',
    parentId: 'group-layer1',
    extent: 'parent' as const,
    position: { x: 20, y: 140 },
    data: { label: '📝 Stage 1\nResearch Setup' },
    style: {
      background: '#FFF9C4',
      border: '2px solid #F57F17',
      borderRadius: '8px',
      padding: '10px',
      width: 140,
      height: 60,
      fontSize: '11px',
      fontWeight: '500',
      textAlign: 'center' as const,
    },
  },
  {
    id: 'stage2',
    parentId: 'group-layer1',
    extent: 'parent' as const,
    position: { x: 190, y: 140 },
    data: { label: '📝 Stage 2\nQuery Strategy' },
    style: {
      background: '#FFF9C4',
      border: '2px solid #F57F17',
      borderRadius: '8px',
      padding: '10px',
      width: 140,
      height: 60,
      fontSize: '11px',
      fontWeight: '500',
      textAlign: 'center' as const,
    },
  },
  {
    id: 'stage3',
    parentId: 'group-layer1',
    extent: 'parent' as const,
    position: { x: 360, y: 140 },
    data: { label: '📝 Stage 3\nPRISMA Config' },
    style: {
      background: '#FFF9C4',
      border: '2px solid #F57F17',
      borderRadius: '8px',
      padding: '10px',
      width: 140,
      height: 60,
      fontSize: '11px',
      fontWeight: '500',
      textAlign: 'center' as const,
    },
  },
  {
    id: 'cli',
    parentId: 'group-layer1',
    extent: 'parent' as const,
    position: { x: 220, y: 50 },
    data: { label: '⚙️ scholarag_cli.py\nOrchestrator' },
    style: {
      background: '#C8E6C9',
      border: '2px solid #2E7D32',
      borderRadius: '8px',
      padding: '10px',
      width: 160,
      height: 60,
      fontSize: '11px',
      fontWeight: '600',
      textAlign: 'center' as const,
    },
  },
  {
    id: 'config-base',
    parentId: 'group-layer1',
    extent: 'parent' as const,
    position: { x: 420, y: 50 },
    data: { label: '📄 config_base.yaml\nTemplate' },
    style: {
      background: '#FFF9C4',
      border: '2px solid #F57F17',
      borderRadius: '8px',
      padding: '10px',
      width: 160,
      height: 60,
      fontSize: '11px',
      fontWeight: '500',
      textAlign: 'center' as const,
    },
  },

  // Layer 2 Group: Configuration Hub
  {
    id: 'group-layer2',
    type: 'group',
    data: {
      label: '⚙️ Layer 2: Configuration Hub',
      background: '#E8F5E9',
      borderColor: '#2E7D32',
    },
    position: { x: 0, y: 320 },
    style: { width: 400, height: 150 },
  },
  {
    id: 'config-yaml',
    parentId: 'group-layer2',
    extent: 'parent' as const,
    position: { x: 80, y: 50 },
    data: { label: '⭐ config.yaml\nSingle Source of Truth' },
    style: {
      background: '#A5D6A7',
      border: '4px solid #2E7D32',
      borderRadius: '10px',
      padding: '14px',
      width: 220,
      height: 70,
      fontSize: '13px',
      fontWeight: '700',
      textAlign: 'center' as const,
      boxShadow: '0 6px 12px rgba(46, 125, 50, 0.3)',
    },
  },

  // Layer 3 Group: Execution Pipeline
  {
    id: 'group-layer3',
    type: 'group',
    data: {
      label: '🔧 Layer 3: Execution Pipeline',
      background: '#F3E5F5',
      borderColor: '#6A1B9A',
    },
    position: { x: 0, y: 510 },
    style: { width: 350, height: 850 },
  },
  {
    id: 'script-01',
    parentId: 'group-layer3',
    extent: 'parent' as const,
    position: { x: 20, y: 50 },
    data: { label: '📥 01_fetch_papers.py\nAPI Search' },
    style: {
      background: '#E1BEE7',
      border: '2px solid #6A1B9A',
      borderRadius: '8px',
      padding: '10px',
      width: 180,
      height: 60,
      fontSize: '11px',
      fontWeight: '500',
      textAlign: 'center' as const,
    },
  },
  {
    id: 'script-02',
    parentId: 'group-layer3',
    extent: 'parent' as const,
    position: { x: 20, y: 140 },
    data: { label: '🔄 02_deduplicate.py\nDOI/Title Match' },
    style: {
      background: '#E1BEE7',
      border: '2px solid #6A1B9A',
      borderRadius: '8px',
      padding: '10px',
      width: 180,
      height: 60,
      fontSize: '11px',
      fontWeight: '500',
      textAlign: 'center' as const,
    },
  },
  {
    id: 'script-03',
    parentId: 'group-layer3',
    extent: 'parent' as const,
    position: { x: 20, y: 230 },
    data: { label: '⚠️ 03_screen_papers.py\nAI Relevance Check' },
    style: {
      background: '#FFCDD2',
      border: '3px solid #C62828',
      borderRadius: '8px',
      padding: '10px',
      width: 180,
      height: 70,
      fontSize: '11px',
      fontWeight: '600',
      textAlign: 'center' as const,
    },
  },
  {
    id: 'script-04',
    parentId: 'group-layer3',
    extent: 'parent' as const,
    position: { x: 20, y: 330 },
    data: { label: '📄 04_download_pdfs.py\nPDF Retrieval' },
    style: {
      background: '#E1BEE7',
      border: '2px solid #6A1B9A',
      borderRadius: '8px',
      padding: '10px',
      width: 180,
      height: 60,
      fontSize: '11px',
      fontWeight: '500',
      textAlign: 'center' as const,
    },
  },
  {
    id: 'script-05',
    parentId: 'group-layer3',
    extent: 'parent' as const,
    position: { x: 20, y: 420 },
    data: { label: '🗄️ 05_build_rag.py\nVector Embeddings' },
    style: {
      background: '#E1BEE7',
      border: '2px solid #6A1B9A',
      borderRadius: '8px',
      padding: '10px',
      width: 180,
      height: 60,
      fontSize: '11px',
      fontWeight: '500',
      textAlign: 'center' as const,
    },
  },
  {
    id: 'script-06',
    parentId: 'group-layer3',
    extent: 'parent' as const,
    position: { x: 20, y: 510 },
    data: { label: '💬 06_query_rag.py\nLiterature Q&A' },
    style: {
      background: '#E1BEE7',
      border: '2px solid #6A1B9A',
      borderRadius: '8px',
      padding: '10px',
      width: 180,
      height: 60,
      fontSize: '11px',
      fontWeight: '500',
      textAlign: 'center' as const,
    },
  },
  {
    id: 'script-07',
    parentId: 'group-layer3',
    extent: 'parent' as const,
    position: { x: 20, y: 600 },
    data: { label: '⚠️ 07_generate_prisma.py\nDiagram Generator' },
    style: {
      background: '#FFCDD2',
      border: '3px solid #C62828',
      borderRadius: '8px',
      padding: '10px',
      width: 180,
      height: 70,
      fontSize: '11px',
      fontWeight: '600',
      textAlign: 'center' as const,
    },
  },

  // Layer 4 Group: Data Storage
  {
    id: 'group-layer4',
    type: 'group',
    data: {
      label: '💾 Layer 4: Data Storage',
      background: '#F5F5F5',
      borderColor: '#757575',
    },
    position: { x: 380, y: 510 },
    style: { width: 320, height: 850 },
  },
  {
    id: 'data-01',
    parentId: 'group-layer4',
    extent: 'parent' as const,
    position: { x: 20, y: 50 },
    data: { label: '💾 data/01_identification/\nRaw Papers CSV' },
    style: {
      background: '#E0E0E0',
      border: '2px solid #424242',
      borderRadius: '8px',
      padding: '10px',
      width: 180,
      height: 60,
      fontSize: '11px',
      fontWeight: '500',
      textAlign: 'center' as const,
    },
  },
  {
    id: 'data-02',
    parentId: 'group-layer4',
    extent: 'parent' as const,
    position: { x: 20, y: 230 },
    data: { label: '💾 data/02_screening/\nRelevant Papers' },
    style: {
      background: '#E0E0E0',
      border: '2px solid #424242',
      borderRadius: '8px',
      padding: '10px',
      width: 180,
      height: 60,
      fontSize: '11px',
      fontWeight: '500',
      textAlign: 'center' as const,
    },
  },
  {
    id: 'data-pdfs',
    parentId: 'group-layer4',
    extent: 'parent' as const,
    position: { x: 20, y: 330 },
    data: { label: '💾 data/pdfs/\nPDF Files' },
    style: {
      background: '#E0E0E0',
      border: '2px solid #424242',
      borderRadius: '8px',
      padding: '10px',
      width: 180,
      height: 60,
      fontSize: '11px',
      fontWeight: '500',
      textAlign: 'center' as const,
    },
  },
  {
    id: 'data-chroma',
    parentId: 'group-layer4',
    extent: 'parent' as const,
    position: { x: 20, y: 420 },
    data: { label: '💾 data/chroma/\nVector Database' },
    style: {
      background: '#E0E0E0',
      border: '2px solid #424242',
      borderRadius: '8px',
      padding: '10px',
      width: 180,
      height: 60,
      fontSize: '11px',
      fontWeight: '500',
      textAlign: 'center' as const,
    },
  },
  {
    id: 'output-prisma',
    parentId: 'group-layer4',
    extent: 'parent' as const,
    position: { x: 20, y: 600 },
    data: { label: '💾 outputs/\nprisma_diagram.png' },
    style: {
      background: '#E0E0E0',
      border: '2px solid #424242',
      borderRadius: '8px',
      padding: '10px',
      width: 180,
      height: 60,
      fontSize: '11px',
      fontWeight: '500',
      textAlign: 'center' as const,
    },
  },

  // User output (outside groups)
  {
    id: 'user-end',
    position: { x: 100, y: 1400 },
    data: { label: '👤 User Receives Results' },
    style: {
      background: '#E1F5FF',
      border: '2px solid #01579B',
      borderRadius: '8px',
      padding: '12px',
      width: 180,
      height: 60,
      fontSize: '12px',
      fontWeight: '600',
      textAlign: 'center' as const,
    },
  },
]

// Define edges (connections between nodes)
const initialEdges: Edge[] = [
  // Layer 1 flows
  { id: 'e-user-stage1', source: 'user-start', target: 'stage1', animated: true, label: '1. Start', style: { stroke: '#666', strokeWidth: 2 } },
  { id: 'e-stage1-cli', source: 'stage1', target: 'cli', animated: true, label: '2. Init', style: { stroke: '#666', strokeWidth: 2 } },
  { id: 'e-cli-base', source: 'cli', target: 'config-base', animated: true, label: '3. Copy', style: { stroke: '#666', strokeWidth: 2 } },
  { id: 'e-base-config', source: 'config-base', target: 'config-yaml', animated: true, label: '4. Create', style: { stroke: '#666', strokeWidth: 2 } },

  // Configuration updates
  { id: 'e-stage2-config', source: 'stage2', target: 'config-yaml', animated: true, label: '5. Query', style: { stroke: '#666', strokeWidth: 2 } },
  { id: 'e-stage3-config', source: 'stage3', target: 'config-yaml', animated: true, label: '6. PRISMA', style: { stroke: '#666', strokeWidth: 2 } },

  // Execution pipeline
  { id: 'e-config-script01', source: 'config-yaml', target: 'script-01', label: 'Reads config', type: 'smoothstep' },
  { id: 'e-script01-data01', source: 'script-01', target: 'data-01', label: 'Papers CSV' },
  { id: 'e-script01-02', source: 'script-01', target: 'script-02', animated: true },

  { id: 'e-data01-02', source: 'data-01', target: 'script-02', label: 'Load', type: 'smoothstep' },
  { id: 'e-script02-03', source: 'script-02', target: 'script-03', animated: true },

  // Critical: project_type branching
  {
    id: 'e-config-script03',
    source: 'config-yaml',
    target: 'script-03',
    label: 'project_type ⚠️',
    type: 'smoothstep',
    style: { stroke: '#C62828', strokeWidth: 3, strokeDasharray: '5 5' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#C62828' },
  },

  { id: 'e-script03-data02', source: 'script-03', target: 'data-02', label: 'Relevant' },
  { id: 'e-script03-04', source: 'script-03', target: 'script-04', animated: true },

  { id: 'e-data02-04', source: 'data-02', target: 'script-04', label: 'URLs', type: 'smoothstep' },
  { id: 'e-script04-pdfs', source: 'script-04', target: 'data-pdfs', label: 'PDFs' },
  { id: 'e-script04-05', source: 'script-04', target: 'script-05', animated: true },

  { id: 'e-pdfs-05', source: 'data-pdfs', target: 'script-05', label: 'Read', type: 'smoothstep' },
  { id: 'e-script05-chroma', source: 'script-05', target: 'data-chroma', label: 'Embeddings' },
  { id: 'e-script05-06', source: 'script-05', target: 'script-06', animated: true },

  { id: 'e-chroma-06', source: 'data-chroma', target: 'script-06', label: 'Search', type: 'smoothstep' },
  { id: 'e-script06-user', source: 'script-06', target: 'user-end', animated: true, label: 'Results' },

  // PRISMA branch
  {
    id: 'e-config-script07',
    source: 'config-yaml',
    target: 'script-07',
    label: 'project_type ⚠️',
    type: 'smoothstep',
    style: { stroke: '#C62828', strokeWidth: 3, strokeDasharray: '5 5' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#C62828' },
  },
  { id: 'e-data01-07', source: 'data-01', target: 'script-07', type: 'smoothstep' },
  { id: 'e-data02-07', source: 'data-02', target: 'script-07', type: 'smoothstep' },
  { id: 'e-pdfs-07', source: 'data-pdfs', target: 'script-07', type: 'smoothstep' },
  { id: 'e-script07-output', source: 'script-07', target: 'output-prisma', label: 'PNG' },
]

export default function ReactFlowDiagram() {
  // Apply dagre layout - commented out for now since we're using manual positioning with groups
  // const { nodes: layoutedNodes, edges: layoutedEdges } = useMemo(
  //   () => getLayoutedElements(initialNodes, initialEdges),
  //   []
  // )

  return (
    <div className="w-full h-[1500px] border-2 border-gray-300 rounded-lg bg-gradient-to-br from-gray-50 to-white">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
        fitViewOptions={{ padding: 0.2 }}
        defaultEdgeOptions={{
          animated: false,
          style: { stroke: '#666', strokeWidth: 2 },
          markerEnd: { type: MarkerType.ArrowClosed },
        }}
      >
        <Background variant={BackgroundVariant.Dots} gap={16} size={1} color="#d1d5db" />
        <Controls />

        {/* Legend */}
        <div className="absolute bottom-10 left-4 bg-white p-4 rounded-lg shadow-lg border-2 border-gray-300 text-xs z-10">
          <div className="font-bold mb-2 text-sm">Legend</div>
          <div className="space-y-1.5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded" style={{ background: '#E1F5FF', border: '2px solid #01579B' }}></div>
              <span>User Interaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded" style={{ background: '#FFF9C4', border: '2px solid #F57F17' }}></div>
              <span>Conversation Prompts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded" style={{ background: '#C8E6C9', border: '2px solid #2E7D32' }}></div>
              <span>Configuration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded" style={{ background: '#E1BEE7', border: '2px solid #6A1B9A' }}></div>
              <span>Execution Scripts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded" style={{ background: '#FFCDD2', border: '3px solid #C62828' }}></div>
              <span>Critical Branching</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded" style={{ background: '#E0E0E0', border: '2px solid #424242' }}></div>
              <span>Data Storage</span>
            </div>
            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-300">
              <div className="w-8 h-0.5 bg-red-600" style={{ borderTop: '3px dashed #C62828' }}></div>
              <span className="text-red-600 font-semibold">project_type ⚠️</span>
            </div>
          </div>
        </div>
      </ReactFlow>
    </div>
  )
}
