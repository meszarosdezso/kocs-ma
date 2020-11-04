export type Message = {
  content?: string
  timestamp_ms: number
  sender_name: string
}

export const fetchToday = async () => {
  const response = await fetch('/messages.json')
  const { messages }: { messages: Message[] } = await response.json()

  const today = new Date(Date.now())

  return messages
    .filter(({ timestamp_ms }) => {
      const msgDate = new Date(timestamp_ms)

      return (
        msgDate.getDate() === today.getDate() &&
        msgDate.getMonth() === today.getMonth()
      )
    })
    .map(msg => ({
      ...msg,
      sender_name: decodeURIComponent(escape(msg.sender_name)),
      content: decodeURIComponent(escape(msg.content || '')),
    }))
    .reverse()
}
