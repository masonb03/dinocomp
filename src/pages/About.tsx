const About = () => {
  return (
    <div className="h-[calc(100vh-120px)] overflow-y-auto">
      <div className="max-w-2xl mx-auto p-8">

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white mb-3">About DinoComp</h1>
          <p className="text-neutral-400 leading-relaxed">
            DinoComp was built out of a personal interest in palaeontology and a frustration with how scattered dinosaur data is online. Most resources let you look up individual species, but there's no interactive tool for comparing multiple species side by side across physical attributes, time period, and geographic range. DinoComp fills that gap.
          </p>
        </div>

        <div className="bg-neutral-800 border border-neutral-600 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-white mb-4">Features</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-neutral-400">
              <i className="ti ti-search text-green-500 mt-0.5" aria-hidden="true"></i>
              Browse a database of 20+ dinosaur species with silhouette cards
            </li>
            <li className="flex items-start gap-3 text-neutral-400">
              <i className="ti ti-filter text-green-500 mt-0.5" aria-hidden="true"></i>
              Filter by period, diet, clade, and continent simultaneously
            </li>
            <li className="flex items-start gap-3 text-neutral-400">
              <i className="ti ti-letter-case text-green-500 mt-0.5" aria-hidden="true"></i>
              Search species by name in real time
            </li>
            <li className="flex items-start gap-3 text-neutral-400">
              <i className="ti ti-arrows-sort text-green-500 mt-0.5" aria-hidden="true"></i>
              Sort by name, length, or mass
            </li>
            <li className="flex items-start gap-3 text-neutral-400">
              <i className="ti ti-layout-columns text-green-500 mt-0.5" aria-hidden="true"></i>
              Compare up to 4 species side by side with color-highlighted numeric stats
            </li>
          </ul>
        </div>

        <div className="bg-neutral-800 border border-neutral-600 rounded-xl p-6 mb-6">
          <h2 className="text-lg font-bold text-white mb-4">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-3">
            {['React + TypeScript', 'Redux Toolkit', 'Firebase Firestore', 'Tailwind CSS', 'Vite', 'React Router'].map(tech => (
              <div key={tech} className="flex items-center gap-2 text-neutral-400">
                <i className="ti ti-check text-green-500" aria-hidden="true"></i>
                {tech}
              </div>
            ))}
          </div>
        </div>
        <a
          href="https://github.com/masonb03/dinocomp"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-neutral-600 hover:bg-neutral-800 transition text-white font-bold p-3 px-5 rounded-xl">
          <i className="ti ti-brand-github" aria-hidden="true"></i>
          View on GitHub
        </a>

      </div>
    </div>
  )
}

export default About