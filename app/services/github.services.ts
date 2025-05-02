import { Octokit } from "@octokit/rest";
import { githubConfig } from "@/config/github";
import { RestEndpointMethodTypes } from "@octokit/plugin-rest-endpoint-methods";

const octokit = new Octokit({
  auth: githubConfig.token,
});

export type GitHubUser =
  RestEndpointMethodTypes["users"]["getByUsername"]["response"]["data"];
export type GitHubRepo =
  RestEndpointMethodTypes["repos"]["listForUser"]["response"]["data"];

export const fetchUserData = async (): Promise<GitHubUser | null> => {
  try {
    const { data } = await octokit.users.getByUsername({
      username: githubConfig.username,
    });
    return data;
  } catch (error) {
    console.error("Error fetching GitHub user data:", error);
    return null;
  }
};

export const fetchUserRepositories = async (): Promise<GitHubRepo> => {
  try {
    const { data } = await octokit.repos.listForUser({
      username: githubConfig.username,
      sort: "updated",
      per_page: githubConfig.maxRepositories,
    });
    return data;
  } catch (error) {
    console.error("Error fetching repositories:", error);
    return [];
  }
};
