// src/components/common/Card.jsx

import { cn } from "../../utils/helpers";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-md border border-slate-700/50 shadow-2xl",
        className
      )}
      {...props}
    />
  );
}