"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Undergraduate Research – Collab Web",
    description:
      "Trained Google's Palm2 LLM on 10 years of Georgia Tech student records to build a chatbot for efficient data queries; organized data in MySQL and created 5 visualization tools.",
    tech: ["Python", "Aura", "Jupyter", "Neo4j", "Palm2"],
    href: "https://github.com/SurajGeddam/Collab-Web",
  },
  {
    title: "SeekNSpot",
    description:
      "Published a YouTube Chrome extension powered by Llama2 for quizzes, answers, and translations; integrated YouTube APIs to navigate to relevant timestamps.",
    tech: ["Python", "JavaScript", "Flask", "Streamlit", "Llama2"],
    href: "https://github.com/SurajGeddam/SeekNSpot",
  },
  {
    title: "VolunTrack",
    description:
      "Built a volunteer event sign-in and hour-logging app using QR code tech with Firebase & React; designed roles for organizers and volunteers to track hours.",
    tech: ["Firebase", "React", "Node.js"],
    href: "https://github.com/SurajGeddam/VolunTrack",
  },
];

const categories = ["All", "Python", "JavaScript", "AI", "Web", "React"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-heading mb-6">Projects</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === cat
                ? "bg-primary text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft"
          >
            <h3 className="text-xl font-heading mb-2">{p.title}</h3>
            <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-body hover:underline"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 