'use client';

import React, { useState } from 'react';
import ProfileSidebar from './ProfileSidebar';
import MainContent from './MainContent';
import { profileData } from '@/data/profile';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('skills');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="flex flex-col lg:flex-row min-h-screen">
        
        {/* Sol Panel - Profil Bilgileri */}
        <ProfileSidebar 
          profileData={profileData}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />

        {/* Sağ Panel - Ana İçerik */}
        <MainContent 
          activeSection={activeSection}
        />
        
      </div>
    </div>
  );
};

export default Portfolio;