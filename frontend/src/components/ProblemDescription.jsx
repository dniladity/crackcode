function ProblemDescription({ problem }) {
    return (
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-white">
          {problem.title}
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Difficulty: <strong className="capitalize">{problem.difficulty}</strong>
        </p>
        <div className="whitespace-pre-wrap leading-relaxed text-zinc-700 dark:text-zinc-200">
          {problem.description}
        </div>
      </div>
    )
  }
  export default ProblemDescription
  