import { Octokit } from '@octokit/rest';
import { githubConfig } from '@/config/github';
import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';

const octokit = new Octokit({ auth: githubConfig.token });

export type GitHubUser = RestEndpointMethodTypes['users']['getByUsername']['response']['data'];
export type GitHubRepoItem =
  RestEndpointMethodTypes['repos']['listForUser']['response']['data'][number];
export type GitHubRepos = GitHubRepoItem[];
export type GitHubRepoDetails = RestEndpointMethodTypes['repos']['get']['response']['data'];
export type GitHubCommit =
  RestEndpointMethodTypes['repos']['listCommits']['response']['data'][number];

// Fetch authenticated user's public profile
export const fetchGitHubUserData = async (): Promise<GitHubUser | null> => {
  try {
    const { data } = await octokit.users.getByUsername({
      username: githubConfig.username,
    });
    return data;
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
};

// Fetch user's repositories sorted by recent updates
export const fetchGitHubRepositories = async (): Promise<GitHubRepos> => {
  try {
    const { data } = await octokit.repos.listForUser({
      username: githubConfig.username,
      sort: 'updated',
      per_page: githubConfig.maxRepositories,
    });
    return data;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
};

// Fetch detailed information about a specific repository
export const fetchGitHubRepoDetails = async (
  repoName: string
): Promise<GitHubRepoDetails | null> => {
  try {
    const { data } = await octokit.repos.get({
      owner: githubConfig.username,
      repo: repoName,
    });
    return data;
  } catch (error) {
    console.error(`Error fetching GitHub repo details for ${repoName}:`, error);
    return null;
  }
};

// Fetch recent commits for a repository
export const fetchRepoCommits = async (
  repoName: string,
  limit: number = 5
): Promise<GitHubCommit[]> => {
  try {
    const { data } = await octokit.repos.listCommits({
      owner: githubConfig.username,
      repo: repoName,
      per_page: limit,
    });
    return data;
  } catch (error) {
    console.error(`Error fetching commits for ${repoName}:`, error);
    return [];
  }
};

// Get repository languages distribution
export const fetchRepoLanguages = async (repoName: string): Promise<Record<string, number>> => {
  try {
    const { data } = await octokit.repos.listLanguages({
      owner: githubConfig.username,
      repo: repoName,
    });
    return data;
  } catch (error) {
    console.error(`Error fetching languages for ${repoName}:`, error);
    return {};
  }
};
