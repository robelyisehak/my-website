// src/components/common/Button.jsx
import { cn } from "../../utils/helpers"; // we'll create this tiny helper in 2 seconds

export function Button({ children, variant = "default", className, ...props }) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-xl font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 disabled:pointer-events-none disabled:opacity-50",
        variant === "default" && "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:shadow-purple-600/30 hover:scale-105",
        variant === "outline" && "border-2 border-purple-500 text-purple-300 hover:bg-purple-500/20",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}