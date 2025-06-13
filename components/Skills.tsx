"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiPython, SiJava, SiCplusplus, SiJavascript, SiHtml5, SiRust, SiR, SiReact, SiNodedotjs, SiDjango, SiAngular, SiFlask, SiSpring, SiSpringboot, SiGit, SiDocker, SiVisualstudiocode, SiIntellijidea, SiMysql, SiNeo4J, SiAndroidstudio, SiJupyter, SiPostman, SiOracle, SiJira } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const categories = ["All", "Languages", "Frameworks", "Tools"];
const skills = [
  { name: "Java", category: "Languages", icon: <SiJava size={32} /> },
  { name: "Python", category: "Languages", icon: <SiPython size={32} /> },
  { name: "C/C++", category: "Languages", icon: <SiCplusplus size={32} /> },
  { name: "SQL", category: "Languages", icon: <FaDatabase size={32} /> },
  { name: "JavaScript", category: "Languages", icon: <SiJavascript size={32} /> },
  { name: "HTML/CSS", category: "Languages", icon: <SiHtml5 size={32} /> },
  { name: "Rust", category: "Languages", icon: <SiRust size={32} /> },
  { name: "R", category: "Languages", icon: <SiR size={32} /> },
  { name: "React", category: "Frameworks", icon: <SiReact size={32} /> },
  { name: "Node.js", category: "Frameworks", icon: <SiNodedotjs size={32} /> },
  { name: "Django", category: "Frameworks", icon: <SiDjango size={32} /> },
  { name: "Angular", category: "Frameworks", icon: <SiAngular size={32} /> },
  { name: "Flask", category: "Frameworks", icon: <SiFlask size={32} /> },
  { name: "Spring", category: "Frameworks", icon: <SiSpring size={32} /> },
  { name: "Spring Boot", category: "Frameworks", icon: <SiSpringboot size={32} /> },
  { name: "Git", category: "Tools", icon: <SiGit size={32} /> },
  { name: "Docker", category: "Tools", icon: <SiDocker size={32} /> },
  { name: "VS Code", category: "Tools", icon: <SiVisualstudiocode size={32} /> },
  { name: "IntelliJ", category: "Tools", icon: <SiIntellijidea size={32} /> },
  { name: "MySQLWorkbench", category: "Tools", icon: <SiMysql size={32} /> },
  { name: "Neo4j", category: "Tools", icon: <SiNeo4J size={32} /> },
  { name: "Android Studio", category: "Tools", icon: <SiAndroidstudio size={32} /> },
  { name: "Jupyter", category: "Tools", icon: <SiJupyter size={32} /> },
  { name: "Postman", category: "Tools", icon: <SiPostman size={32} /> },
  { name: "Aura", category: "Tools", icon: <SiOracle size={32} /> },
  { name: "OCI", category: "Tools", icon: <SiOracle size={32} /> },
  { name: "Jira", category: "Tools", icon: <SiJira size={32} /> },
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
              className="flex flex-col items-center px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full font-body text-sm shadow-soft cursor-default min-w-[80px]"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ scale: 1.1 }}
            >
              {skill.icon}
              <span className="mt-1">{skill.name}</span>
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
} 