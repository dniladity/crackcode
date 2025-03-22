import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import CodeMirror from '@uiw/react-codemirror'
import { python } from '@codemirror/lang-python'

function ProblemDetail() {
  const { id } = useParams()
  const [problem, setProblem] = useState(null)
  const [code, setCode] = useState('')
  const [submissionResult, setSubmissionResult] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:8000/api/problems/${id}/`)
      .then(res => setProblem(res.data))
      .catch(err => console.error(err))
  }, [id])

  const handleSubmit = () => {
    axios.post('http://localhost:8000/api/submit/', {
      user: 1,  // hardcoded for now
      problem: parseInt(id),
      code: code,
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

  if (!problem) return <div>Loading...</div>

  return (
    <div>
      <h2>{problem.title}</h2>
      <p><strong>Difficulty:</strong> {problem.difficulty}</p>
      <p>{problem.description}</p>

      <h3>Write your solution:</h3>
      <CodeMirror
        value={code}
        height="200px"
        extensions={[python()]}
        onChange={(value) => setCode(value)}
      />

      <button onClick={handleSubmit} style={{ marginTop: '10px' }}>
        Submit Code
      </button>

      {submissionResult && (
        <div style={{ marginTop: '10px' }}>
          <h4>Submission Status: {submissionResult.status}</h4>
          <pre>{JSON.stringify(submissionResult.result, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default ProblemDetail
