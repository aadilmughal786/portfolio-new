import React from 'react';
import Card from '../Card';
import CardItem from '../CardItem';
import GitHubStats from './GitHubStats';
import RecentRepositories from './Repositories';
import { githubData as data } from '@/data/resume/github';
import Image from 'next/image';

const Github = () => {
  return (
    <Card icon={data.icon} title={data.title} size={data.iconSize}>
      <CardItem>
        <GitHubStats />
      </CardItem>
      <CardItem>
        <RecentRepositories />
      </CardItem>
      <CardItem>
        <Image
          src="https://github.com/aadilmughal786/aadilmughal786/raw/output/github-contribution-grid-snake.svg"
          alt="contribution graph"
          width={100}
          height={100}
          className="w-full"
        />
      </CardItem>
    </Card>
  );
};

export default Github;
