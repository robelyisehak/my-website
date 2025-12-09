// src/utils/helpers.js
export function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}