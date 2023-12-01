import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { baserun } from 'baserun'

const openai = new OpenAI()

export const POST = baserun.trace(async (req) => {
  const { messages } = await req.json()
  console.log({ messages })
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    stream: true,
    messages,
  })
  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}, 'chat route') as any
