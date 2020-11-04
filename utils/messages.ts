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
    .filter(({ timestamp_ms, content }) => {
      const msgDate = new Date(timestamp_ms)

      return (
        msgDate.getDate() === today.getDate() &&
        msgDate.getMonth() === today.getMonth()
      )
    })
    .reverse()
}

export const toHungarian = (text: string): string => {
  return text
    .replace(/\u00c5\u0091/g, 'ő')
    .replace(/\u00c3\u00b6/g, 'ö')
    .replace(/\u00c3\u00b3/g, 'ó')
    .replace(/\u00c3\u00a9/g, 'é')
    .replace(/\u00c3\u00a1/g, 'á')
    .replace(/\u00c3\u00ad/g, 'í')
    .replace(/\u00c3\u00ba/g, 'ú')
    .replace(/\u00c3\u00bc/g, 'ü')
    .replace(/\u00c5\u00b1/g, 'ű')
}
