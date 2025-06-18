"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Zap, Calendar, Github, ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import { projects } from "../../data/projects";
import type { Project } from "../../types/project";

export type CategoryName = "Full Stack" | "Frontend" | "AI/ML";

const statusMap: Record<Project["status"], { label: string; className: string }> = {
  completed: {
    label: "Tamamlandı",
    className:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
  },
  "in-progress": {
    label: "Devam Ediyor",
    className: "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
  },
  planning: {
    label: "Planlanıyor",
    className:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300",
  },
};

export default function ProjectsSection() {
  const [selected, setSelected] = useState<"all" | Project["category"]>("all");

  const categories = useMemo(
    () => [
      { name: "all", label: "Tümü", count: projects.length },
      ...["Full Stack", "Frontend", "AI/ML"].map((cat) => ({
        name: cat as Project["category"],
        label: cat,
        count: projects.filter((p) => p.category === cat).length,
      })),
    ],
    []
  );

  const filtered =
    selected === "all" ? projects : projects.filter((p) => p.category === selected);

  const StatusBadge = ({ status }: { status: Project["status"] }) => (
    <Badge
      variant="secondary"
      className={cn("rounded-full px-2 py-1 text-xs font-medium", statusMap[status].className)}
    >
      {statusMap[status].label}
    </Badge>
  );

  return (
    <section className="mb-16">
      {/* Başlık */}
      <div className="flex items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
          Projeler Showroom
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-slate-300 dark:from-slate-700 to-transparent ml-6" />
      </div>

      {/* Kategori Butonları */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <Button
            key={cat.name}
            variant={selected === cat.name ? "default" : "outline"}
            onClick={() => setSelected(cat.name as CategoryName)}
            className="rounded-full"
          >
            {cat.label} ({cat.count})
          </Button>
        ))}
      </div>

      {/* Öne Çıkan Projeler */}
      <div className="mb-12 space-y-6">
        <div className="flex items-center text-xl font-semibold text-slate-800 dark:text-white mb-4">
          <Zap className="w-5 h-5 mr-2 text-yellow-500" />
          Öne Çıkan Projeler
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects
            .filter((p) => p.featured && (selected === "all" || p.category === selected))
            .map((project) => (
              <Card
                key={project.id}
                className="group overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 p-0 pb-4"
              >
                {/* Görsel */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://images.unsplash.com/photo-${1460925895917 + project.id}?w=600&h=400&fit=crop`;
                    }}
                  />
                  {/* Durum */}
                  <div className="absolute top-4 right-4">
                    <StatusBadge status={project.status} />
                  </div>
                  {/* Hover Aksiyonları */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="sm"
                      variant="secondary"
                      asChild
                      className="backdrop-blur-sm bg-white/20 text-white border-white/30"
                    >
                      <a href={project.github} target="_blank" rel="noopener">
                        <Github className="w-4 h-4 mr-2" /> GitHub
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      asChild
                      className="backdrop-blur-sm bg-white/20 text-white border-white/30"
                    >
                      <a href={project.demo} target="_blank" rel="noopener">
                        <ExternalLink className="w-4 h-4 mr-2" /> Demo
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Başlık & Açıklama */}
                <CardHeader className="space-y-1">
                  <CardTitle className="flex items-center justify-between">
                    <span>{project.title}</span>
                    <span className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(project.date).toLocaleDateString("tr-TR")}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <Badge variant="outline" key={idx}>
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="secondary">
                        +{project.tech.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* Tüm Projeler */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filtered
          .filter((p) => !p.featured)
          .map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden shadow-lg hover:shadow-2xl transition-transform hover:-translate-y-1 p-0 pb-4"
            >
              {/* Görsel */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.unsplash.com/photo-${1460925895917 + project.id}?w=600&h=400&fit=crop`;
                  }}
                />
                <div className="absolute top-3 right-3">
                  <StatusBadge status={project.status} />
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  {project.title}
                  <span className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(project.date).toLocaleDateString("tr-TR")}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-300 text-sm mb-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, idx) => (
                    <Badge variant="outline" key={idx} className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.tech.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.tech.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex justify-between">
                  <Button variant="link" asChild className="p-0 h-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center space-x-1 text-sm"
                    >
                      <Github className="w-4 h-4" /> <span>GitHub</span>
                    </a>
                  </Button>
                  <Button variant="link" asChild className="p-0 h-auto">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener"
                      className="flex items-center space-x-1 text-sm"
                    >
                      <ExternalLink className="w-4 h-4" /> <span>Demo</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>
    </section>
  );
}
