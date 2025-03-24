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

  const getDifficultyColor = (level) => {
    switch (level.toLowerCase()) {
      case 'easy':
        return 'text-green-600'
      case 'medium':
        return 'text-yellow-600'
      case 'hard':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">🧠 CrackCode Problems</h1>
      <ul className="space-y-3">
        {problems.map(problem => (
          <li
            key={problem.id}
            className="border px-4 py-3 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            <Link to={`/problems/${problem.id}`} className="block">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{problem.title}</span>
                <span className={`text-sm font-semibold ${getDifficultyColor(problem.difficulty)}`}>
                  {problem.difficulty}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Home
