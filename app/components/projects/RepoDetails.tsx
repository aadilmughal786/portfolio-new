import React, { useEffect, useState } from 'react';
import {
  fetchGitHubRepoDetails,
  fetchRepoCommits,
  fetchRepoLanguages,
  GitHubRepoDetails,
  GitHubCommit,
} from '@/services/github.services';

import {
  FiExternalLink,
  FiCalendar,
  FiAlertCircle,
  FiGitCommit,
  FiClock,
  FiPieChart,
  FiRefreshCw,
} from 'react-icons/fi';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, TooltipProps } from 'recharts';
import Card from '../resume/Card';
import { PiHashFill } from 'react-icons/pi';
import { FaUserAlt } from 'react-icons/fa';
import { MdNearbyError } from 'react-icons/md';

interface RepoDetailsProps {
  repoName: string;
  className?: string;
}

const RepoDetails: React.FC<RepoDetailsProps> = ({ repoName, className = '' }) => {
  const [repoDetails, setRepoDetails] = useState<GitHubRepoDetails | null>(null);
  const [commits, setCommits] = useState<GitHubCommit[]>([]);
  const [languages, setLanguages] = useState<Record<string, number>>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [dataFetched, setDataFetched] = useState<boolean>(false);

  useEffect(() => {
    setDataFetched(false);
  }, [repoName]);

  // Language colors for visualization
  const languageColors: Record<string, string> = {
    JavaScript: '#f7df1e', // Yellow
    TypeScript: '#3178c6', // Blue
    HTML: '#e34c26', // Orange
    CSS: '#563d7c', // Purple
    Python: '#3572A5', // Blue
    Java: '#b07219', // Brown
    Ruby: '#701516', // Dark Red
    PHP: '#4F5D95', // Purple
    Go: '#00ADD8', // Light Blue
    Rust: '#dea584', // Light Brown
    C: '#555555', // Gray
    'C++': '#f34b7d', // Pink
    'C#': '#178600', // Green
    Dart: '#00B4AB', // Teal
    Swift: '#ffac45', // Light Orange
    Kotlin: '#A97BFF', // Light Purple
    Shell: '#89e051', // Light Green
    Vue: '#41b883', // Vue Green
    Elixir: '#6e4a7e', // Purple
    // Default for other languages
    default: '#8b949e', // Gray
  };

  // Prepare data for pie chart
  const prepareChartData = (langs: Record<string, number>) => {
    // If no languages, return empty array
    if (Object.keys(langs).length === 0) return [];

    // Sort languages by size (descending)
    return Object.entries(langs)
      .sort((a, b) => b[1] - a[1])
      .map(([name, value]) => ({
        name,
        value,
      }));
  };

  const chartData = prepareChartData(languages);

  // Get color for a language
  const getLanguageColor = (language: string) => {
    return languageColors[language] || languageColors.default;
  };

  const loadRepoData = async () => {
    if (!repoName) return;

    setIsLoading(true);
    setError(null);

    try {
      // Fetch data in parallel
      const [detailsData, commitsData, languagesData] = await Promise.all([
        fetchGitHubRepoDetails(repoName),
        fetchRepoCommits(repoName, 5),
        fetchRepoLanguages(repoName),
      ]);

      setRepoDetails(detailsData);
      setCommits(commitsData);
      setLanguages(languagesData);
      setDataFetched(true);
    } catch (err) {
      setError('Failed to load repository data');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  // Format date with relative time if recent
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
      if (diffHours < 1) {
        const diffMinutes = Math.floor(diffTime / (1000 * 60));
        return `${diffMinutes} minute${diffMinutes !== 1 ? 's' : ''} ago`;
      }
      return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`;
    }

    if (diffDays < 7) {
      return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`;
    }

    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Format commit message
  const formatCommitMessage = (message: string) => {
    // Truncate if longer than 50 characters
    if (message.length > 50) {
      return message.substring(0, 50) + '...';
    }
    return message;
  };

  // Calculate total bytes for language percentage
  const totalBytes = Object.values(languages).reduce((sum, value) => sum + value, 0);

  // Custom tooltip for the pie chart
  const CustomTooltip: React.FC<TooltipProps<number, string>> = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      const percentage = ((data.value / totalBytes) * 100).toFixed(1);

      return (
        <div className="p-2 bg-white rounded border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
          <p className="font-medium">{data.name}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {`${(data.value / 1024).toFixed(1)} KB (${percentage}%)`}
          </p>
        </div>
      );
    }

    return null;
  };

  if (!dataFetched) {
    return (
      <div className={`p-6 text-center`}>
        <p className="mb-6">
          Click the button below to fetch and display details for: <strong>{repoName}</strong>
        </p>
        <button
          onClick={loadRepoData}
          className="inline-flex gap-2 items-center px-4 py-2 text-sm text-white cursor-pointer bg-text-tertiary"
        >
          {isLoading ? (
            <div className={`w-5 h-5 rounded-full border-2 animate-spin border-t-transparent`} />
          ) : (
            <FiRefreshCw className="w-5 h-5" />
          )}
          Load Repository Data
        </button>
      </div>
    );
  }

  if (error || !repoDetails) {
    return (
      <div
        className={`p-6 bg-red-50 rounded-lg border border-red-200 dark:bg-red-900/20 dark:border-red-800 ${className}`}
      >
        <div className="flex items-center mb-4 text-red-600 dark:text-red-400">
          <FiAlertCircle className="mr-2 w-5 h-5" />
          <h3 className="font-medium">{error || 'Repository not found'}</h3>
        </div>

        <div className="flex gap-2 items-center p-4 text-red-700 dark:text-red-400">
          <MdNearbyError size={35} />
          Failed to load GitHub repositories data
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-2 py-2 mb-4 font-semibold">
        <div className="flex items-center">
          <FiCalendar className="mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" />
          <span className="pr-1 font-medium text-text-tertiary">Created: </span>{' '}
          <span className="text-sm"> {formatDate(repoDetails.created_at)}</span>
        </div>
        <div className="flex items-center">
          <FiCalendar className="mr-2 w-5 h-5 text-gray-500 dark:text-gray-400" />
          <span className="text-sm">
            <span className="pr-1 font-medium text-text-tertiary">Last updated: </span>{' '}
            {formatDate(repoDetails.updated_at)}
          </span>
        </div>
      </div>

      <Card icon={FiPieChart} title="Languages Distribution">
        {/* Language Pie Chart */}
        {chartData.length > 0 && (
          <div className="border-t border-border-primary">
            <div className="flex flex-col justify-center items-center">
              <div className="w-full h-60">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={getLanguageColor(entry.name)} />
                      ))}
                    </Pie>
                    <Tooltip content={<CustomTooltip />} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="p-4 w-full border-t border-border-primary">
                <div className="space-y-2">
                  {chartData.slice(0, 8).map(language => {
                    const percentage = ((language.value / totalBytes) * 100).toFixed(1);
                    return (
                      <div key={language.name} className="flex justify-between items-center">
                        <div className="flex items-center">
                          <div
                            className="mr-2 w-3 h-3 rounded-full"
                            style={{ backgroundColor: getLanguageColor(language.name) }}
                          ></div>
                          <span>{language.name}</span>
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {percentage}%
                        </span>
                      </div>
                    );
                  })}

                  {chartData.length > 8 && (
                    <div className="text-sm italic text-gray-500 dark:text-gray-400">
                      And {chartData.length - 8} more languages...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Recent Commits Timeline */}
      {commits.length > 0 && (
        <div className="py-6">
          <div className="flex items-center mb-3 text-text-tertiary">
            <FiGitCommit className="mr-2 w-5 h-5" />
            <h3 className="font-medium">Recent Commits</h3>
          </div>

          <div className="relative pl-4 ml-2 border-l-2 border-text-tertiary">
            {commits.map(commit => (
              <div key={commit.sha} className="mb-4">
                <div className="absolute -left-[9px] mt-3 w-4 h-4 rounded-full border-3 bg-text-tertiary border-bg-primary"></div>
                <Card icon={PiHashFill} title={`${commit.sha.slice(0, 5)}...`}>
                  <div className="p-3 border-t border-border-primary">
                    <div className="flex flex-col gap-2">
                      <a
                        href={commit.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium transition-colors hover:text-text-tertiary"
                      >
                        {formatCommitMessage(commit.commit.message)}
                      </a>
                      <div className="flex items-center text-text-mute">
                        <FiClock className="mr-1 w-3 h-3" />
                        {formatDate(
                          commit.commit.author?.date || commit.commit.committer?.date || ''
                        )}
                      </div>
                      <span className="flex gap-1 items-center text-sm">
                        <FaUserAlt />
                        by {commit.author?.login || commit.commit.author?.name || 'Unknown'}
                      </span>
                    </div>
                  </div>
                </Card>
              </div>
            ))}

            {commits.length >= 5 && (
              <div className="mt-2 text-center">
                <a
                  href={`${repoDetails.html_url}/commits`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-text-tertiary"
                >
                  View all commits
                  <FiExternalLink className="ml-1 w-3 h-3" />
                </a>
              </div>
            )}
          </div>
        </div>
      )}

      {/* License */}
      {repoDetails.license && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          <strong className="font-semibold text-text-tertiary">License:</strong>{' '}
          {repoDetails.license.name}
        </div>
      )}
    </div>
  );
};

export default RepoDetails;
