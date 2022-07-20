import { Handlers } from '$fresh/server.ts'

export const handler: Handlers = {
  GET() {
    const uuid = crypto.randomUUID()
    return new Response(uuid, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }
}