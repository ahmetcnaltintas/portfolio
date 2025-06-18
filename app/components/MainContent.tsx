'use client';

import React from 'react';
import SkillsSection from './SkillsSection';
import GithubSection from './GithubSection';
import ProjectsSection from './ProjectsSection';

interface MainContentProps {
  activeSection: string;
}

const MainContent: React.FC<MainContentProps> = () => {
  return (
    <div className="flex-1 min-w-0 lg:ml-[33.333333%] xl:ml-[25%]">
      <div className="p-4 sm:p-6 md:p-8">
        
        {/* Hoş Geldin Mesajı */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-white mb-4">
            Merhaba!
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
            Ben <span className="font-semibold text-blue-600 dark:text-blue-400">Ahmet Can Altıntaş</span>, 
            Teknolojiye tutkuyla bağlı, öğrenmeye istekli ve sürekli kendini geliştirmeye çalışan bir geliştiriciyim.
            Yeni projelerle deneyim kazanmayı ve her gün bir adım daha ileri gitmeyi hedefliyorum.
          </p>
        </div>

        {/* Teknolojiler Bölümü */}
        <SkillsSection />

        {/* GitHub Repoları Bölümü */}
        <GithubSection />

        {/* Projeler Bölümü */}
        <ProjectsSection />

      </div>
    </div>
  );
};

export default MainContent;
