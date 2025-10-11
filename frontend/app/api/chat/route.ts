/**
 * Chatbot API Route
 *
 * Handles chat requests with RAG-powered responses using Claude 3.5 Sonnet
 */

import { NextRequest, NextResponse } from 'next/server'
import { generateChatResponse, ChatMessage } from '@/lib/chatbot'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()
    const { messages } = body as { messages: ChatMessage[] }

    // Validate input
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Invalid request: messages array required' },
        { status: 400 }
      )
    }

    // Validate API key
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error('ANTHROPIC_API_KEY not set')
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      )
    }

    // Generate response
    const response = await generateChatResponse(messages, true)

    // Return response
    return NextResponse.json({
      message: response,
      timestamp: new Date().toISOString()
    })

  } catch (error: any) {
    console.error('Chat API error:', error)

    // Handle specific error types
    if (error?.status === 401) {
      return NextResponse.json(
        { error: 'Authentication failed - check API key' },
        { status: 401 }
      )
    }

    if (error?.status === 429) {
      return NextResponse.json(
        { error: 'Rate limit exceeded - please try again later' },
        { status: 429 }
      )
    }

    // Generic error
    return NextResponse.json(
      { error: 'Failed to generate response', details: error.message },
      { status: 500 }
    )
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
