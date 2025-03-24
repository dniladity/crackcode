import { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'
import axios from 'axios'

function CodeEditor({ problemId }) {
  const [code, setCode] = useState('')
  const [submissionResult, setSubmissionResult] = useState(null)

  const handleSubmit = () => {
    axios.post('http://localhost:8000/api/submit/', {
      user: 1,
      problem: parseInt(problemId),
      code,
      language: 'python'
    })
    .then(res => {
      setSubmissionResult(res.data)
      alert('Submitted successfully! 🚀')
    })
    .catch(err => {
      console.error(err)
      alert('Submission failed ❌')
    })
  }

  return (
    <div className="flex flex-col h-full">
      <h3 className="text-lg font-medium mb-2">Write your solution:</h3>
      <div className="flex-1 border rounded overflow-hidden">
        <CodeMirror
          value={code}
          height="300px"
          extensions={[python()]}
          onChange={(value) => setCode(value)}
        />
      </div>

      <button
        onClick={handleSubmit}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 self-start"
      >
        Submit Code
      </button>

      {submissionResult && (
        <div className="mt-4">
          <h4 className="font-medium">
            Submission Status: {submissionResult.status}
          </h4>
          <pre className="bg-zinc-100 dark:bg-zinc-800 p-3 rounded mt-2 text-sm overflow-auto">
            {JSON.stringify(submissionResult.result, null, 2)}
          </pre>
        </div>
      )}
    </div>
  )
}

export default CodeEditor
