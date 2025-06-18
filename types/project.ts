export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: "Frontend" | "Full Stack" | "AI/ML";
  status: "completed" | "in-progress" | "planning";
  date: string; // ISO formatta: "2024-05-01"
  github: string;
  demo: string;
  featured?: boolean;
}
