'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, Phone, MapPin, Github, Linkedin, Globe, Eye } from 'lucide-react';
import { ProfileData } from '@/types/profile';
import { Button } from '@/components/ui/button';

interface ProfileSidebarProps {
  profileData: ProfileData;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({ 
  profileData, 
}) => {
  
    const handleViewCV = () => {
      window.open('/cvahmetcnaltintas.pdf', '_blank');
    };

  return (
    <div className="lg:w-1/3 xl:w-1/4 bg-white dark:bg-slate-800 shadow-2xl lg:fixed lg:h-full overflow-y-auto">
      <div className="p-8">
        
        {/* Profil Fotoğrafı */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src={profileData.photo}
                alt={profileData.name}
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/ahmet.webp";
                }}
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mt-4">
            {profileData.name}
          </h1>
          <p className="text-slate-600 dark:text-slate-300 font-medium">
            {profileData.title}
          </p>
        </div>

        {/* İletişim Bilgileri */}
        <div className="space-y-4 mb-8">
          <Link href={`mailto:${profileData.email}`}
            className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm">{profileData.email}</span>
          </Link>
          
          <Link
            href={`tel:${profileData.phone}`}
            className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors group"
          >
            <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm">{profileData.phone}</span>
          </Link>
          
          <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300">
            <MapPin className="w-5 h-5" />
            <span className="text-sm">{profileData.location}</span>
          </div>
          
          <Link
            href={`https://${profileData.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-gray-800 dark:hover:text-gray-200 transition-colors group"
          >
            <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm">{profileData.github}</span>
          </Link>
          
          <Link
            href={`https://${profileData.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-300 transition-colors group"
          >
            <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm">linkedin</span>
          </Link>
          
          <Link
            href={`https://${profileData.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
          >
            <Globe className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-sm">{profileData.website}</span>
          </Link>
        </div>

        {/* CV İndir Butonu */}
        <Button onClick={handleViewCV} className='w-full h-11 flex items-center justify-center space-x-2'>
          <Eye className="w-5 h-5" />
          <span>CV Görüntüle</span>
        </Button>
        
        {/* Sosyal Medya Butonları */}
        <div className="flex justify-center space-x-4 mt-6">
          <Link
            href={`https://${profileData.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            <Github className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </Link>
          <Link
            href={`https://${profileData.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
          >
            <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </Link>
          <Link
            href={`https://${profileData.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
          >
            <Globe className="w-5 h-5 text-slate-600 dark:text-slate-300" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;