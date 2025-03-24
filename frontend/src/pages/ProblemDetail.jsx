// -------------------- pages/ProblemDetail.jsx --------------------
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ProblemDescription from '../components/ProblemDescription'
import CodeEditor from '../components/CodeEditor'

export default function ProblemDetail() {
  const { id } = useParams()
  const [problem, setProblem] = useState(null)

  useEffect(() => {
    axios.get(`http://localhost:8000/api/problems/${id}/`)
      .then(res => setProblem(res.data))
      .catch(err => console.error("API Error:", err))
  }, [id])

  if (!problem) return <div className="p-6">Loading...</div>

  return (
    <div className="flex h-screen divide-x overflow-hidden">
      {/* Left Panel */}
      <div className="w-1/2 p-6 overflow-y-auto">
        <ProblemDescription problem={problem} />
      </div>

      {/* Right Panel */}
      <div className="w-1/2 p-6 overflow-y-auto">
        <CodeEditor problemId={id} />
      </div>
    </div>
  )
}
