interface FileTreeProps {
  structure: FileNode[]
}

interface FileNode {
  name: string
  type: 'file' | 'folder'
  description?: string
  children?: FileNode[]
  highlight?: boolean
}

function FileTreeNode({ node, depth = 0 }: { node: FileNode; depth?: number }) {
  const indent = depth * 20

  return (
    <div>
      <div
        className={`flex items-start gap-2 py-1 px-2 ${node.highlight ? 'bg-yellow-50 dark:bg-yellow-900/20 border-l-2 border-yellow-500' : ''}`}
        style={{ paddingLeft: `${indent + 8}px` }}
      >
        <span className="text-gray-500 mt-0.5">
          {node.type === 'folder' ? '📁' : '📄'}
        </span>
        <div className="flex-1">
          <span className={`font-mono text-sm ${node.highlight ? 'font-semibold' : ''}`}>
            {node.name}
          </span>
          {node.description && (
            <p className="text-xs text-muted-foreground mt-0.5">{node.description}</p>
          )}
        </div>
      </div>
      {node.children && (
        <div>
          {node.children.map((child, idx) => (
            <FileTreeNode key={idx} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export function FileTree({ structure }: FileTreeProps) {
  return (
    <div className="border rounded-lg bg-white dark:bg-gray-950 overflow-hidden">
      <div className="bg-gray-100 dark:bg-gray-900 px-4 py-2 border-b">
        <span className="text-sm font-semibold">Project Structure</span>
      </div>
      <div className="p-2">
        {structure.map((node, idx) => (
          <FileTreeNode key={idx} node={node} />
        ))}
      </div>
    </div>
  )
}
