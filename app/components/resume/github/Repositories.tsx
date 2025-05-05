'use client';

import { useState, useEffect } from 'react';
import { fetchGitHubRepositories, GitHubRepos } from '@/services/github.services';
import { LanguageName, languageColors } from '@/utils/language-colors';
import { getTimeAgo } from '@/utils/resume-date';
import { TbExternalLink } from 'react-icons/tb';
import { PiGitForkBold } from 'react-icons/pi';
import { IoStar } from 'react-icons/io5';
import { MdNearbyError } from 'react-icons/md';

export default function RecentRepositories() {
  const [repositories, setRepositories] = useState<GitHubRepos>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepositories = async () => {
      const repos = await fetchGitHubRepositories();
      setRepositories(repos);
      setLoading(false);
    };

    loadRepositories();
  }, []);

  if (loading) {
    return (
      <div className="space-y-4 animate-pulse">
        {[1, 2, 3].map(i => (
          <div key={i} className="p-4 rounded-lg border border-border-primary">
            <div className="mb-3 w-1/2 h-6 rounded bg-border-primary"></div>
            <div className="mb-3 w-3/4 h-4 rounded bg-border-primary"></div>
            <div className="w-1/4 h-4 rounded bg-border-primary"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!repositories) {
    return (
      <div className="flex gap-2 items-center p-4 text-red-700 dark:text-red-400">
        <MdNearbyError size={35} />
        Failed to load GitHub repositories data
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {repositories.map(repo => (
        <div key={repo.id} className="p-4 rounded-lg border border-border-primary">
          <div className="flex justify-between items-start">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-text-tertiary"
            >
              {repo.name}{' '}
              <TbExternalLink className="-mt-[3px] ml-1 inline-block sm:ml-0" size={16} />
            </a>
            <span className="chip">{repo.private ? 'Private' : 'Public'}</span>
          </div>

          <p className="mt-1 line-clamp-2">{repo.description || 'No description provided'}</p>

          <div className="flex-wrap justify-between items-center pt-1 sm:flex">
            <div>
              <div className="flex flex-wrap gap-y-2 gap-x-4 items-center text-sm">
                {repo.language && (
                  <span className="flex items-center">
                    <div
                      className="mr-1 w-3 h-3 rounded-full"
                      style={{
                        backgroundColor: languageColors[repo.language as LanguageName] || '#ccc',
                      }}
                    ></div>
                    {repo.language}
                  </span>
                )}

                <span className="flex gap-2 items-center" aria-label="Stars">
                  <IoStar className="text-amber-400 dark:text-amber-200" />
                  <span>{repo.stargazers_count}</span>
                </span>

                <span className="flex gap-2 items-center" aria-label="Forks">
                  <PiGitForkBold />
                  <span>{repo.forks_count}</span>
                </span>
              </div>
            </div>
            <span className="text-text-mute">Updated {getTimeAgo(repo.updated_at as string)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
