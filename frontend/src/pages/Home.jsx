import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  const [problems, setProblems] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/problems/')
      .then(res => setProblems(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <h1>CrackCode Problems</h1>
      <ul>
        {problems.map(problem => (
          <li key={problem.id}>
            <strong>{problem.title}</strong> – {problem.difficulty}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
