'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import { skills } from '@/data/skills';

const categories = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-purple-600',
    skillNames: ['HTML','CSS','Bootstrap','JavaScript', 'TypeScript', 'React', 'Next.js', 'Tailwind'],
  },
  {
    title: 'Mobil',
    color: 'from-green-500 to-emerald-600',
    skillNames: ['React Native CLI','Expo'],
  },
  {
    title: 'Backend',
    color: 'from-red-500 to-emerald-600',
    skillNames: ['Node.js', 'Laravel','Mysql'],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="mb-16">
      <div className="flex items-center mb-8">
        <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
          Teknolojiler & Yetenekler
        </h2>
        <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent ml-6" />
      </div>

      <div className="space-y-8">
        {categories.map((category, i) => {
          const filteredSkills = skills.filter((s) =>
            category.skillNames.includes(s.name)
          );

          return (
            <div key={i} className="space-y-4">
              <h3
                className={`text-xl font-semibold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredSkills.map((skill, index) => (
                  <Card
                    key={index}
                    className="group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      </div>
                      <h4 className="font-semibold text-slate-800 dark:text-white">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {skill.level}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Tüm Teknolojiler */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-6">
          Tüm Teknolojiler
        </h3>
        <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-3">
          {skills.map((skill, index) => (
            <Card key={index} className="text-center p-3">
              <CardContent className="p-2">
                <div className="w-8 h-8 bg-slate-100 dark:bg-slate-700 rounded-md flex items-center justify-center mx-auto mb-2">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <p className="text-xs font-medium text-slate-700 dark:text-slate-300">
                  {skill.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
