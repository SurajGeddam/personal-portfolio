"use client";
import {
  BriefcaseIcon,
  FolderIcon,
  AwardIcon,
} from "lucide-react";

const stats = [
  { icon: AwardIcon, label: "Awards", value: "3" },
  { icon: BriefcaseIcon, label: "Internships", value: "3+ Years" },
  { icon: FolderIcon, label: "Projects", value: "5+" },
  { icon: AwardIcon, label: "Certifications", value: "6" },
];

export default function Highlights() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4 bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ icon: Icon, label, value }, idx) => (
          <div
            key={label + idx}
            className="bg-black p-6 rounded-lg shadow-soft hover:scale-105 transition-transform border border-white"
          >
            <Icon size={32} className="text-white" />
            <h3 className="text-2xl font-heading mt-4">{value}</h3>
            <p className="text-body">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 