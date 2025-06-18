export type SkillLevel = 'Başlangıç' | 'Orta Seviye' | 'Gelişmiş';

export interface Skill {
  name: string;
  icon: string;
  level: SkillLevel;
}

export const skills: Skill[] = [
  { name: 'HTML', icon: '/icons/html.svg', level: 'Gelişmiş' },
  { name: 'CSS', icon: '/icons/css.svg', level: 'Gelişmiş' },
  { name: 'Bootstrap', icon: '/icons/bootstrap.svg', level: 'Gelişmiş' },
  { name: 'Tailwind', icon: '/icons/tailwind.svg', level: 'Orta Seviye' },
  { name: 'JavaScript', icon: '/icons/javascript.svg', level: 'Orta Seviye' },
  { name: 'TypeScript', icon: '/icons/typescript.svg', level: 'Başlangıç' },
  { name: 'React', icon: '/icons/react.svg', level: 'Başlangıç' },
  { name: 'Next.js', icon: '/icons/nextjs.svg', level: 'Başlangıç' },
  { name: 'React Native CLI', icon: '/icons/react-native.svg', level: 'Başlangıç' },
  { name: 'Expo', icon: '/icons/expo.svg', level: 'Başlangıç' },
  { name: 'Laravel', icon: '/icons/laravel.svg', level: 'Orta Seviye' },
  { name: 'Node.js', icon: '/icons/nodejs.svg', level: 'Başlangıç' },
  { name: 'Mysql', icon: '/icons/mysql.svg', level: 'Başlangıç' },
];
