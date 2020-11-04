import { useEffect, useMemo, useState } from 'react'
import { fetchToday, Message } from '../utils/messages'
import { Clipboard } from 'react-feather'

const IndexPage = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [copied, setCopied] = useState<number>(0)

  useEffect(() => {
    fetchToday().then(setMessages)
  }, [])

  const today = useMemo(() => new Date(Date.now()), [])

  const copyMessage = async (text: string | undefined) => {
    if (!text) return
    await navigator.clipboard.writeText(text)
    console.log(await navigator.clipboard.readText())
  }

  return (
    <div id="IndexPage">
      <header>
        <h4 id="date">
          {today.toString().substring(3, 7)} {today.getDate()}
        </h4>

        <h1 id="title">kocsMa 🍻</h1>

        <p id="disclaimer">
          Másolj ki egy üzenetet, és keress rá messengerben a teljes élményért
          (:
        </p>
      </header>

      <ul id="messages">
        {messages.map(msg => (
          <li key={msg.timestamp_ms} className="message">
            <h3 className="sender">{msg.sender_name}</h3>
            <p className={msg.content ? 'body' : 'media'}>
              {msg.content || '[Media]'}
            </p>
            <Clipboard
              onClick={async _ => {
                await copyMessage(msg.content)
                setCopied(msg.timestamp_ms)
              }}
              color={msg.timestamp_ms === copied ? '#07de88' : 'black'}
              className="copy-icon"
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default IndexPage
