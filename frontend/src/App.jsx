// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProblemDetail from './pages/ProblemDetail'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/problems/:id" element={<ProblemDetail />} />
    </Routes>
  )
}

export default App
