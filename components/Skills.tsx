"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Languages", "Frameworks", "Tools"];
const skills = [
  { name: "Java", category: "Languages", image: "/java.png" },
  { name: "Python", category: "Languages", image: "/python.jpeg" },
  { name: "C/C++", category: "Languages", image: "/c:c++.png" },
  { name: "SQL", category: "Languages", image: "/sql.png" },
  { name: "JavaScript", category: "Languages", image: "/javascript.png" },
  { name: "HTML/CSS", category: "Languages", image: "/html:css.jpeg" },
  { name: "Rust", category: "Languages", image: "/rust.png" },
  { name: "R", category: "Languages", image: "/r.jpeg" },
  { name: "React", category: "Frameworks", image: "/react.png" },
  { name: "Django", category: "Frameworks", image: "/django.png" },
  { name: "Angular", category: "Frameworks", image: "/angular.png" },
  { name: "Spring Boot", category: "Frameworks", image: "/springboot.png" },
  { name: "Git", category: "Tools", image: "/git.png" },
  { name: "Docker", category: "Tools", image: "/docker.png" },
  { name: "VS Code", category: "Tools", image: "/vscode.png" },
  { name: "IntelliJ", category: "Tools", image: "/intellij.png" },
  { name: "Neo4j", category: "Tools", image: "/neo4j.png" },
  { name: "Android Studio", category: "Tools", image: "/androidstudio.png" },
  { name: "Jupyter", category: "Tools", image: "/jupyter.png" },
  { name: "Postman", category: "Tools", image: "/postman.png" },
  { name: "Jira", category: "Tools", image: "/jira.jpeg" },
];

export default function Skills() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? skills : skills.filter(s => s.category === filter);

  return (
    <section className="max-w-5xl mx-auto py-16 px-4 bg-black text-white">
      <h2 className="text-3xl font-heading text-center mb-6">Skills &amp; Tools</h2>
      <div className="flex justify-center gap-4 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg font-body transition ${
              filter === cat
                ? "bg-white text-black"
                : "bg-black text-white border border-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 ml-2 sm:ml-0 justify-center"
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
              className="relative flex flex-col items-center justify-center bg-black rounded-full shadow-soft cursor-pointer min-w-[128px] min-h-[128px] w-32 h-32 group transition-transform hover:scale-110 border border-white"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              exit={{ opacity: 0, y: -20 }}
            >
              {skill.image ? (
                <span className="flex items-center justify-center w-44 h-44 bg-black rounded-full border border-white">
                  <img src={skill.image} alt={skill.name + ' icon'} className="object-contain w-36 h-24" />
                </span>
              ) : (
                <span className="text-sm font-body text-white">{skill.name}</span>
              )}
              {skill.image && (
                <span className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 text-black text-xl font-bold rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
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