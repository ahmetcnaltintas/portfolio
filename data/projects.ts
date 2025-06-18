import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Kişisel Portfolyo",
    description: "Next.js, Tailwind ve Shadcn UI kullanarak oluşturulmuş modern bir portfolyo.",
    image: "/ahmet.webp",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    category: "Frontend",
    status: "completed",
    date: "2024-06-01",
    github: "https://github.com/kullanici/portfolio",
    demo: "https://portfolio.com",
    featured: true,
  },
  {
    id: 2,
    title: "Blog CMS",
    description: "Admin paneliyle yazı yayınlama, kategori yönetimi ve kullanıcı yorum sistemi.",
    image: "/ahmet.webp",
    tech: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
    status: "in-progress",
    date: "2024-05-15",
    github: "https://github.com/kullanici/blog-cms",
    demo: "https://blogcms.com",
  },
  {
    id: 3,
    title: "Yapay Zeka Sohbet Botu",
    description: "OpenAI API ile doğal dil işleyen ve kullanıcılarla konuşabilen bir chatbot.",
    image: "/ahmet.webp",
    tech: ["Python", "FastAPI", "OpenAI"],
    category: "AI/ML",
    status: "planning",
    date: "2024-07-01",
    github: "https://github.com/kullanici/ai-chatbot",
    demo: "https://aibot.com",
  },
  // Devamı...
];
