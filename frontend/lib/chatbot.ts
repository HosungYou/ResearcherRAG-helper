/**
 * Chatbot RAG Logic for ResearcherRAG Helper
 *
 * This module provides RAG (Retrieval-Augmented Generation) functionality
 * for the chatbot using ChromaDB vector search and Claude 3.5 Sonnet.
 */

import Anthropic from '@anthropic-ai/sdk'

// Initialize Anthropic client
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY!,
})

export interface ChatMessage {
  role: 'user' | 'assistant'
  content: string
}

export interface RAGContext {
  content: string
  metadata: {
    path: string
    filename: string
    chunk_index: number
  }
  similarity: number
}

/**
 * System prompt for the ResearcherRAG Helper chatbot
 */
const SYSTEM_PROMPT = `You are a helpful AI assistant for ResearcherRAG - a system that helps researchers build custom RAG systems for literature review.

Your role is to:
1. Answer questions about ResearcherRAG's 5-stage workflow
2. Explain PRISMA configuration and screening
3. Help with query design and search strategies
4. Troubleshoot common issues
5. Provide examples and code snippets
6. Guide users through the documentation

Guidelines:
- Be concise but thorough
- Use examples from the documentation
- Cite specific sections when relevant (e.g., "According to Stage 2: Query Strategy...")
- If you don't know something, suggest where to find the answer
- Use markdown formatting for code and structured content
- Be encouraging and supportive to researchers

When answering:
- First check if the retrieved context is relevant
- If context is relevant, use it to ground your answer
- If context is not relevant, use your general knowledge but acknowledge limitations
- Always be accurate about technical details (APIs, code, configurations)

Available documentation topics:
- CLAUDE.md (18,000-word implementation guide)
- 5-stage prompts (research setup, query strategy, PRISMA, RAG design, execution)
- Research profile templates (Education, Medicine, Social Science)
- Workshop hands-on guide (3-hour curriculum)
- Quick start guide
`

/**
 * Search ChromaDB for relevant documents (stub - will be replaced with actual implementation)
 *
 * In production, this would call a Python API or use a Node.js ChromaDB client.
 * For now, we'll implement a simple fallback that returns empty results.
 */
async function searchVectorDB(query: string, topK: number = 5): Promise<RAGContext[]> {
  // TODO: Implement actual ChromaDB search
  // Options:
  // 1. Call Python API (FastAPI endpoint)
  // 2. Use chromadb-client (Node.js package)
  // 3. Use HTTP API directly

  // For now, return empty (chatbot will work without RAG, using general knowledge)
  console.warn('Vector DB search not implemented - using general knowledge only')
  return []
}

/**
 * Generate chatbot response using Claude with RAG
 */
export async function generateChatResponse(
  messages: ChatMessage[],
  useRAG: boolean = true
): Promise<string> {
  try {
    let context = ''

    // Retrieve relevant context if RAG is enabled
    if (useRAG && messages.length > 0) {
      const lastUserMessage = messages
        .filter(m => m.role === 'user')
        .pop()

      if (lastUserMessage) {
        const ragResults = await searchVectorDB(lastUserMessage.content)

        if (ragResults.length > 0) {
          context = '\n\n**Retrieved Context:**\n\n'
          ragResults.forEach((result, i) => {
            context += `[${i + 1}] From ${result.metadata.filename}:\n${result.content}\n\n`
          })
        }
      }
    }

    // Build Claude messages
    const claudeMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }))

    // Add context to the last user message if available
    if (context && claudeMessages.length > 0) {
      const lastMsgIndex = claudeMessages.length - 1
      if (claudeMessages[lastMsgIndex].role === 'user') {
        claudeMessages[lastMsgIndex].content =
          claudeMessages[lastMsgIndex].content + context
      }
    }

    // Call Claude API
    const response = await anthropic.messages.create({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      messages: claudeMessages as any,
    })

    // Extract text from response
    const textContent = response.content.find(c => c.type === 'text')
    if (!textContent || textContent.type !== 'text') {
      throw new Error('No text content in response')
    }

    return textContent.text

  } catch (error) {
    console.error('Error generating chat response:', error)
    throw error
  }
}

/**
 * Stream chatbot response (for real-time UI updates)
 */
export async function streamChatResponse(
  messages: ChatMessage[],
  onChunk: (chunk: string) => void,
  useRAG: boolean = true
): Promise<void> {
  try {
    let context = ''

    // Retrieve relevant context
    if (useRAG && messages.length > 0) {
      const lastUserMessage = messages
        .filter(m => m.role === 'user')
        .pop()

      if (lastUserMessage) {
        const ragResults = await searchVectorDB(lastUserMessage.content)

        if (ragResults.length > 0) {
          context = '\n\n**Retrieved Context:**\n\n'
          ragResults.forEach((result, i) => {
            context += `[${i + 1}] From ${result.metadata.filename}:\n${result.content}\n\n`
          })
        }
      }
    }

    // Build Claude messages
    const claudeMessages = messages.map(msg => ({
      role: msg.role,
      content: msg.content
    }))

    // Add context
    if (context && claudeMessages.length > 0) {
      const lastMsgIndex = claudeMessages.length - 1
      if (claudeMessages[lastMsgIndex].role === 'user') {
        claudeMessages[lastMsgIndex].content =
          claudeMessages[lastMsgIndex].content + context
      }
    }

    // Stream response
    const stream = await anthropic.messages.stream({
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 2048,
      system: SYSTEM_PROMPT,
      messages: claudeMessages as any,
    })

    for await (const event of stream) {
      if (
        event.type === 'content_block_delta' &&
        event.delta.type === 'text_delta'
      ) {
        onChunk(event.delta.text)
      }
    }

  } catch (error) {
    console.error('Error streaming chat response:', error)
    throw error
  }
}
