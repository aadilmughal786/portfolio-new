export type GithubConfig = {
  username: string;
  token?: string;
  maxRepositories: number;
};

export const githubConfig: GithubConfig = {
  username: process.env.NEXT_PUBLIC_GITHUB_USERNAME || 'aadilmughal786',
  token: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  maxRepositories: 5,
};
