import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [systemPrompt, setSystemPrompt] = useState(
    localStorage.getItem('systemPrompt') || ''
  )
  const [userPrompt, setUserPrompt] = useState(
    localStorage.getItem('userPrompt') || ''
  )
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    localStorage.setItem('systemPrompt', systemPrompt)
  }, [systemPrompt])

  useEffect(() => {
    localStorage.setItem('userPrompt', userPrompt)
  }, [userPrompt])

  const jsonObject: { systemPrompt?: string; userPrompt: string } = {
    userPrompt: userPrompt,
  }

  if (systemPrompt.trim() !== '') {
    jsonObject.systemPrompt = systemPrompt
  }

  const jsonString = JSON.stringify(jsonObject, null, 2)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(jsonString)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy!', err)
    }
  }

  const handleReset = () => {
    setSystemPrompt('')
    setUserPrompt('')
    localStorage.removeItem('systemPrompt')
    localStorage.removeItem('userPrompt')
  }

  return (
    <div className="container">
      <div className="left-panel">
        <div className="input-group">
          <label htmlFor="system-prompt">System Prompt (Optional)</label>
          <textarea
            id="system-prompt"
            placeholder="Enter system prompt..."
            value={systemPrompt}
            onChange={(e) => setSystemPrompt(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="user-prompt">User Prompt (Mandatory)</label>
          <textarea
            id="user-prompt"
            placeholder="Enter user prompt..."
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
          />
        </div>
      </div>
      <div className="right-panel">
        <div className="output-header">
          <h2>JSON Output</h2>
          <div className="button-group">
            <button className="reset-button" onClick={handleReset}>
              Reset
            </button>
            <button
              className={`copy-button ${copied ? 'copied' : ''}`}
              onClick={copyToClipboard}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
        <pre className="json-display">
          <code>{jsonString}</code>
        </pre>
      </div>
    </div>
  )
}

export default App
