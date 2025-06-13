"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Languages", "Frameworks", "Tools"];
const skills = [
  { name: "Java", category: "Languages", image: "/java.jpeg" },
  { name: "Python", category: "Languages", image: "/python.jpeg" },
  { name: "C/C++", category: "Languages", image: "/c-cpp.jpeg" },
  { name: "SQL", category: "Languages", image: "/sql.jpeg" },
  { name: "JavaScript", category: "Languages", image: "/javascript.jpeg" },
  { name: "HTML/CSS", category: "Languages" },
  { name: "Rust", category: "Languages" },
  { name: "R", category: "Languages" },
  { name: "React", category: "Frameworks" },
  { name: "Django", category: "Frameworks" },
  { name: "Angular", category: "Frameworks" },
  { name: "Flask", category: "Frameworks" },
  { name: "Spring Boot", category: "Frameworks" },
  { name: "Git", category: "Tools" },
  { name: "Docker", category: "Tools" },
  { name: "VS Code", category: "Tools" },
  { name: "IntelliJ", category: "Tools" },
  { name: "MySQLWorkbench", category: "Tools" },
  { name: "Neo4j", category: "Tools" },
  { name: "Android Studio", category: "Tools" },
  { name: "Jupyter", category: "Tools" },
  { name: "Postman", category: "Tools" },
  { name: "Aura", category: "Tools" },
  { name: "OCI", category: "Tools" },
  { name: "Jira", category: "Tools" },
];

export default function Skills() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? skills : skills.filter(s => s.category === filter);

  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-heading text-center mb-6">Skills &amp; Tools</h2>
      <div className="flex justify-center gap-4 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg font-body transition ${
              filter === cat
                ? "bg-primary text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.04 } }
        }}
      >
        <AnimatePresence>
          {filtered.map(skill => (
            <motion.span
              key={skill.name}
              className="relative flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-700 rounded-full shadow-soft cursor-pointer min-w-[96px] min-h-[96px] w-24 h-24 group transition-transform hover:scale-110"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              exit={{ opacity: 0, y: -20 }}
            >
              {skill.image ? (
                <img src={skill.image} alt={skill.name + ' icon'} className="w-24 h-24 object-contain rounded-full" />
              ) : (
                <span className="text-sm font-body text-gray-800 dark:text-gray-200">{skill.name}</span>
              )}
              {skill.image && (
                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 text-white text-lg font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  {skill.name}
                </span>
              )}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
} 