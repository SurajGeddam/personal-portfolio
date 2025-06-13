"use client";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern, responsive portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
    link: "https://personal-portfolio-nine-pearl.vercel.app/",
  },
  {
    title: "ML Research Toolkit",
    description: "A set of tools and notebooks for machine learning research and experimentation.",
    link: "https://github.com/SurajGeddam/ml-research-toolkit",
  },
  {
    title: "Open Source Contributions",
    description: "Contributions to open source projects in the AI/ML and web development space.",
    link: "https://github.com/SurajGeddam",
  },
];

export default function Projects() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-heading font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft hover:scale-105 transition-transform border border-transparent hover:border-primary"
          >
            <h3 className="text-xl font-heading font-semibold mb-2 text-primary">
              {project.title}
            </h3>
            <p className="text-body text-gray-700 dark:text-gray-300">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
} 