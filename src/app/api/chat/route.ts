import OpenAI from 'openai'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import { baserun } from 'baserun'

const openai = new OpenAI()

export const POST = async (req: any) => {
  await baserun.init()

  const stream = baserun.trace(async () => {
    const { messages } = await req.json()
    console.log({ messages })
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      stream: true,
      messages,
    })
    return OpenAIStream(response)
  }, 'chat route')

  return new StreamingTextResponse(await stream())
}
