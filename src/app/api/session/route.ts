import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { baserun } from 'baserun'

const openai = new OpenAI()

// const sessionId = 'eae6749f-3282-4de1-92f9-15a29d12d3b2'

export const POST = async (req: any) => {
  const { data } = await baserun.session({
    session() {
      return baserun.trace(async () => {
        const { messages } = await req.json()
        const response = await openai.chat.completions.create({
          model: 'gpt-4',
          stream: true,
          messages,
        })
        // might call some tools...
        const stream = OpenAIStream(response)
        return new StreamingTextResponse(stream)
      }, 'chat route')()
    },
    // sessionId,
    user: 'alice@bob.com',
  })

  return data
}
