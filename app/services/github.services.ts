import { Octokit } from '@octokit/rest';
import { githubConfig } from '@/config/github';
import { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';

const octokit = new Octokit({ auth: githubConfig.token });

export type GitHubUser = RestEndpointMethodTypes['users']['getByUsername']['response']['data'];
export type GitHubRepoItem =
  RestEndpointMethodTypes['repos']['listForUser']['response']['data'][number];
export type GitHubRepos = GitHubRepoItem[];

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
