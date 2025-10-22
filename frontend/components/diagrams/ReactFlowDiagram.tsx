'use client'

import { useCallback } from 'react'
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  ConnectionLineType,
  MarkerType,
  BackgroundVariant,
} from 'reactflow'
import 'reactflow/dist/style.css'

// Custom node styles
const nodeStyles = {
  user: {
    background: '#E1F5FF',
    border: '2px solid #01579B',
    borderRadius: '8px',
    padding: '12px 16px',
    fontSize: '13px',
    fontWeight: '500',
    minWidth: '140px',
    textAlign: 'center' as const,
  },
  prompt: {
    background: '#FFF9C4',
    border: '2px solid #F57F17',
    borderRadius: '8px',
    padding: '10px 14px',
    fontSize: '12px',
    fontWeight: '500',
    minWidth: '160px',
    textAlign: 'center' as const,
  },
  config: {
    background: '#C8E6C9',
    border: '3px solid #2E7D32',
    borderRadius: '8px',
    padding: '14px 18px',
    fontSize: '13px',
    fontWeight: '600',
    minWidth: '180px',
    textAlign: 'center' as const,
    boxShadow: '0 4px 8px rgba(46, 125, 50, 0.2)',
  },
  configHub: {
    background: '#A5D6A7',
    border: '4px solid #2E7D32',
    borderRadius: '10px',
    padding: '16px 20px',
    fontSize: '14px',
    fontWeight: '700',
    minWidth: '200px',
    textAlign: 'center' as const,
    boxShadow: '0 6px 12px rgba(46, 125, 50, 0.3)',
  },
  script: {
    background: '#E1BEE7',
    border: '2px solid #6A1B9A',
    borderRadius: '8px',
    padding: '10px 14px',
    fontSize: '12px',
    fontWeight: '500',
    minWidth: '170px',
    textAlign: 'center' as const,
  },
  criticalScript: {
    background: '#FFCDD2',
    border: '3px solid #C62828',
    borderRadius: '8px',
    padding: '10px 14px',
    fontSize: '12px',
    fontWeight: '600',
    minWidth: '170px',
    textAlign: 'center' as const,
  },
  data: {
    background: '#E0E0E0',
    border: '2px solid #424242',
    borderRadius: '8px',
    padding: '10px 14px',
    fontSize: '12px',
    fontWeight: '500',
    minWidth: '160px',
    textAlign: 'center' as const,
  },
  groupLabel: {
    background: 'transparent',
    border: 'none',
    fontSize: '16px',
    fontWeight: '700',
    padding: '8px',
    color: '#333',
  },
}

// Define nodes
const initialNodes: Node[] = [
  // Layer Labels
  {
    id: 'label-layer1',
    type: 'default',
    position: { x: 50, y: 20 },
    data: { label: '🎯 Layer 1: User & Conversation' },
    style: nodeStyles.groupLabel,
    draggable: false,
  },
  {
    id: 'label-layer2',
    type: 'default',
    position: { x: 420, y: 280 },
    data: { label: '⚙️ Layer 2: Configuration Hub' },
    style: nodeStyles.groupLabel,
    draggable: false,
  },
  {
    id: 'label-layer3',
    type: 'default',
    position: { x: 50, y: 540 },
    data: { label: '🔧 Layer 3: Execution Pipeline' },
    style: nodeStyles.groupLabel,
    draggable: false,
  },
  {
    id: 'label-layer4',
    type: 'default',
    position: { x: 820, y: 540 },
    data: { label: '💾 Layer 4: Data Storage' },
    style: nodeStyles.groupLabel,
    draggable: false,
  },

  // Layer 1: User & Conversation
  {
    id: 'user-start',
    type: 'input',
    position: { x: 50, y: 70 },
    data: { label: '👤 User\nvia Claude Code' },
    style: nodeStyles.user,
  },
  {
    id: 'stage1',
    position: { x: 50, y: 170 },
    data: { label: '📝 Stage 1\nResearch Setup' },
    style: nodeStyles.prompt,
  },
  {
    id: 'stage2',
    position: { x: 240, y: 170 },
    data: { label: '📝 Stage 2\nQuery Strategy' },
    style: nodeStyles.prompt,
  },
  {
    id: 'stage3',
    position: { x: 430, y: 170 },
    data: { label: '📝 Stage 3\nPRISMA Config' },
    style: nodeStyles.prompt,
  },
  {
    id: 'cli',
    position: { x: 240, y: 70 },
    data: { label: '⚙️ scholarag_cli.py\nOrchestrator' },
    style: nodeStyles.config,
  },
  {
    id: 'config-base',
    position: { x: 440, y: 70 },
    data: { label: '📄 config_base.yaml\nTemplate' },
    style: nodeStyles.prompt,
  },

  // Layer 2: Configuration Hub
  {
    id: 'config-yaml',
    position: { x: 400, y: 340 },
    data: { label: '⭐ config.yaml\nSingle Source of Truth' },
    style: nodeStyles.configHub,
  },

  // Layer 3: Execution Pipeline
  {
    id: 'script-01',
    position: { x: 50, y: 590 },
    data: { label: '📥 01_fetch_papers.py\nAPI Search' },
    style: nodeStyles.script,
  },
  {
    id: 'script-02',
    position: { x: 50, y: 680 },
    data: { label: '🔄 02_deduplicate.py\nDOI/Title Match' },
    style: nodeStyles.script,
  },
  {
    id: 'script-03',
    position: { x: 50, y: 770 },
    data: { label: '⚠️ 03_screen_papers.py\nAI Relevance Check' },
    style: nodeStyles.criticalScript,
  },
  {
    id: 'script-04',
    position: { x: 50, y: 860 },
    data: { label: '📄 04_download_pdfs.py\nPDF Retrieval' },
    style: nodeStyles.script,
  },
  {
    id: 'script-05',
    position: { x: 50, y: 950 },
    data: { label: '🗄️ 05_build_rag.py\nVector Embeddings' },
    style: nodeStyles.script,
  },
  {
    id: 'script-06',
    position: { x: 50, y: 1040 },
    data: { label: '💬 06_query_rag.py\nLiterature Q&A' },
    style: nodeStyles.script,
  },
  {
    id: 'script-07',
    position: { x: 300, y: 950 },
    data: { label: '⚠️ 07_generate_prisma.py\nDiagram Generator' },
    style: nodeStyles.criticalScript,
  },

  // Layer 4: Data Storage
  {
    id: 'data-01',
    position: { x: 820, y: 590 },
    data: { label: '💾 data/01_identification/\nRaw Papers CSV' },
    style: nodeStyles.data,
  },
  {
    id: 'data-02',
    position: { x: 820, y: 770 },
    data: { label: '💾 data/02_screening/\nRelevant Papers' },
    style: nodeStyles.data,
  },
  {
    id: 'data-pdfs',
    position: { x: 820, y: 860 },
    data: { label: '💾 data/pdfs/\nPDF Files' },
    style: nodeStyles.data,
  },
  {
    id: 'data-chroma',
    position: { x: 820, y: 950 },
    data: { label: '💾 data/chroma/\nVector Database' },
    style: nodeStyles.data,
  },
  {
    id: 'output-prisma',
    position: { x: 570, y: 950 },
    data: { label: '💾 outputs/prisma_diagram.png' },
    style: nodeStyles.data,
  },

  // User output
  {
    id: 'user-end',
    type: 'output',
    position: { x: 50, y: 1140 },
    data: { label: '👤 User\nReceives Results' },
    style: nodeStyles.user,
  },
]

// Define edges (connections)
const initialEdges: Edge[] = [
  // Layer 1 flows
  { id: 'e-user-stage1', source: 'user-start', target: 'stage1', animated: true, label: '1. Start' },
  { id: 'e-stage1-cli', source: 'stage1', target: 'cli', animated: true, label: '2. Initialize' },
  { id: 'e-cli-base', source: 'cli', target: 'config-base', animated: true, label: '3. Copy' },
  { id: 'e-base-config', source: 'config-base', target: 'config-yaml', animated: true, label: '4. Create' },

  // Configuration updates
  { id: 'e-stage2-config', source: 'stage2', target: 'config-yaml', animated: true, label: '5. Add query' },
  { id: 'e-stage3-config', source: 'stage3', target: 'config-yaml', animated: true, label: '6. PRISMA rules' },

  // Execution pipeline
  { id: 'e-config-script01', source: 'config-yaml', target: 'script-01', label: 'Reads config', type: 'smoothstep' },
  { id: 'e-script01-data01', source: 'script-01', target: 'data-01', label: 'Papers CSV' },
  { id: 'e-script01-02', source: 'script-01', target: 'script-02', animated: true },

  { id: 'e-data01-02', source: 'data-01', target: 'script-02', label: 'Load papers', type: 'smoothstep' },
  { id: 'e-script02-03', source: 'script-02', target: 'script-03', animated: true },

  // Critical: project_type branching
  {
    id: 'e-config-script03',
    source: 'config-yaml',
    target: 'script-03',
    label: 'project_type',
    type: 'smoothstep',
    style: { stroke: '#C62828', strokeWidth: 2, strokeDasharray: '5 5' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#C62828' },
  },

  { id: 'e-script03-data02', source: 'script-03', target: 'data-02', label: 'Relevant only' },
  { id: 'e-script03-04', source: 'script-03', target: 'script-04', animated: true },

  { id: 'e-data02-04', source: 'data-02', target: 'script-04', label: 'Paper URLs', type: 'smoothstep' },
  { id: 'e-script04-pdfs', source: 'script-04', target: 'data-pdfs', label: 'PDFs' },
  { id: 'e-script04-05', source: 'script-04', target: 'script-05', animated: true },

  { id: 'e-pdfs-05', source: 'data-pdfs', target: 'script-05', label: 'Read PDFs', type: 'smoothstep' },
  { id: 'e-script05-chroma', source: 'script-05', target: 'data-chroma', label: 'Embeddings' },
  { id: 'e-script05-06', source: 'script-05', target: 'script-06', animated: true },

  { id: 'e-chroma-06', source: 'data-chroma', target: 'script-06', label: 'Vector search', type: 'smoothstep' },
  { id: 'e-script06-user', source: 'script-06', target: 'user-end', animated: true, label: 'Results' },

  // PRISMA branch
  {
    id: 'e-config-script07',
    source: 'config-yaml',
    target: 'script-07',
    label: 'project_type',
    type: 'smoothstep',
    style: { stroke: '#C62828', strokeWidth: 2, strokeDasharray: '5 5' },
    markerEnd: { type: MarkerType.ArrowClosed, color: '#C62828' },
  },
  { id: 'e-data01-07', source: 'data-01', target: 'script-07', type: 'smoothstep' },
  { id: 'e-data02-07', source: 'data-02', target: 'script-07', type: 'smoothstep' },
  { id: 'e-pdfs-07', source: 'data-pdfs', target: 'script-07', type: 'smoothstep' },
  { id: 'e-script07-output', source: 'script-07', target: 'output-prisma', label: 'PNG diagram' },
]

export default function ReactFlowDiagram() {
  return (
    <div className="w-full h-[1400px] border-2 border-gray-200 rounded-lg bg-white">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        connectionLineType={ConnectionLineType.SmoothStep}
        fitView
        attributionPosition="bottom-right"
        defaultEdgeOptions={{
          animated: false,
          style: { stroke: '#666', strokeWidth: 2 },
          markerEnd: { type: MarkerType.ArrowClosed },
        }}
      >
        <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#e5e5e5" />
        <Controls />

        {/* Legend */}
        <div className="absolute bottom-10 left-4 bg-white p-4 rounded-lg shadow-lg border-2 border-gray-300 text-xs">
          <div className="font-bold mb-2 text-sm">Legend</div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ background: '#E1F5FF', border: '2px solid #01579B' }}></div>
              <span>User Interaction</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ background: '#FFF9C4', border: '2px solid #F57F17' }}></div>
              <span>Conversation Prompts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ background: '#C8E6C9', border: '2px solid #2E7D32' }}></div>
              <span>Configuration</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ background: '#E1BEE7', border: '2px solid #6A1B9A' }}></div>
              <span>Execution Scripts</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ background: '#FFCDD2', border: '2px solid #C62828' }}></div>
              <span>Critical Branching</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ background: '#E0E0E0', border: '2px solid #424242' }}></div>
              <span>Data Storage</span>
            </div>
            <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-300">
              <div className="w-6 h-0.5 bg-red-600" style={{ borderTop: '2px dashed #C62828' }}></div>
              <span className="text-red-600 font-semibold">project_type branching</span>
            </div>
          </div>
        </div>
      </ReactFlow>
    </div>
  )
}
