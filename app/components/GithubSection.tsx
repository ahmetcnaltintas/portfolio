'use client';

import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Calendar, Star, GitFork } from 'lucide-react';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  html_url: string;
  homepage?: string;
  topics: string[];
}

const GithubSection: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGitHubRepos = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/ahmetcnaltintas/repos?sort=updated&per_page=100', {
          headers: {
            Accept: 'application/vnd.github.mercy-preview+json',
          },
        });

        if (!response.ok) throw new Error('GitHub API hatası');

        const data: GitHubRepo[] = await response.json();
        setRepos(data);
      } catch (err) {
        console.error(err);
        setError('GitHub repoları yüklenirken hata oluştu');
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubRepos();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) return '1 gün önce';
    if (diffDays < 7) return `${diffDays} gün önce`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} hafta önce`;
    return `${Math.ceil(diffDays / 30)} ay önce`;
  };

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-600',
      Python: 'bg-green-600',
      Java: 'bg-red-600',
      Go: 'bg-cyan-600',
      Rust: 'bg-orange-600',
      PHP: 'bg-purple-600',
      'C++': 'bg-pink-600',
      HTML: 'bg-orange-500',
      CSS: 'bg-blue-500',
    };
    return colors[language] || 'bg-gray-500';
  };

  if (loading || error) {
    return (
      <section className="mb-16">
        <div className="flex items-center mb-8">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            GitHub Projeleri
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent ml-6" />
        </div>
        {error ? (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
            <p className="text-red-800 dark:text-red-200">{error}</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg animate-pulse">
                <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-1/3 mb-3" />
                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-full mb-2" />
                <div className="h-3 bg-slate-200 dark:bg-slate-700 rounded w-2/3" />
              </div>
            ))}
          </div>
        )}
      </section>
    );
  }

  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
            GitHub Projeleri
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-slate-300 to-transparent ml-6" />
        </div>
        <a
          href="https://github.com/ahmetcanaltintas"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white transition-colors"
        >
          <Github className="w-5 h-5" />
          <span className="text-sm font-medium">Tümünü Gör</span>
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <div
            key={repo.id}
            className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold break-words text-slate-800 dark:text-white mb-2 flex items-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <Github className="w-5 h-5 mr-2" />
                  {repo.name}
                  {repo.homepage && (
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4 text-blue-500 hover:text-blue-700" />
                    </a>
                  )}
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {repo.description}
                </p>

                {repo.topics?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.slice(0, 5).map((topic, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex items-center space-x-6 text-sm text-slate-500 dark:text-slate-400">
                  {repo.language && (
                    <span className="flex items-center">
                      <div className={`w-3 h-3 ${getLanguageColor(repo.language)} rounded-full mr-2`} />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center">
                    <GitFork className="w-4 h-4 mr-1" />
                    {repo.forks_count}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(repo.updated_at)}
                  </span>
                </div>
              </div>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 p-1 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              >
                <ExternalLink className="w-5 h-5 text-slate-600 dark:text-slate-300" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GithubSection;
