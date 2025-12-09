// src/components/skills/CategoryCard.jsx
import { Code2, Layers, Server, Wrench } from "lucide-react";

const icons = { Code2, Layers, Server, Wrench };

export default function CategoryCard({ category, onOpenCategory }) {
  const Icon = icons[category.icon];

  return (
    <div
      onClick={() => onOpenCategory(category)}
      className="group cursor-pointer p-8 rounded-3xl bg-gray-800/70 border border-gray-700 hover:border-cyan-500/70 
                 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 text-center"
    >
      <div className={`p-5 rounded-2xl bg-gradient-to-br ${category.color} inline-block mb-5 group-hover:scale-110 transition-transform`}>
        <Icon className="w-14 h-14 text-white" />
      </div>
      <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
        {category.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">{category.description}</p>
      <span className="inline-block mt-5 text-cyan-400 text-sm font-medium group-hover:underline">
        Explore →
      </span>
    </div>
  );
}