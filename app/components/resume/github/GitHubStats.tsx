"use client";

import { useState, useEffect } from "react";
import { fetchUserData, GitHubUser } from "../../../services/github.services";
import { MdNearbyError } from "react-icons/md";

const GitHubStats = () => {
  const [userData, setUserData] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadUserData = async () => {
      const data = await fetchUserData();
      setUserData(data);
      setLoading(false);
    };

    loadUserData();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-2 gap-8 animate-pulse md:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="flex flex-col gap-2 items-center p-4 rounded-lg border border-border-primary"
          >
            <div className="mb-3 w-1/2 h-6 rounded bg-border-primary"></div>
            <div className="mb-3 w-3/4 h-4 rounded bg-border-primary"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex gap-2 items-center p-4 text-red-700 dark:text-red-400">
        <MdNearbyError size={35} />
        Failed to load GitHub data
      </div>
    );
  }

  const stats = [
    { label: "Repositories", value: userData.public_repos },
    { label: "Followers", value: userData.followers },
    { label: "Following", value: userData.following },
    { label: "Gists", value: userData.public_gists },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="p-3 text-center rounded-lg border border-border-primary"
        >
          <div className="font-mono text-2xl font-bold">{stat.value}</div>
          <div className="font-medium text-text-tertiary">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default GitHubStats;
