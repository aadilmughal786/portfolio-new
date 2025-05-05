import React from 'react';
import Card from '../Card';
import CardItem from '../CardItem';
import GitHubStats from './GitHubStats';
import RecentRepositories from './Repositories';
import { githubData as data } from '@/data/resume/github';

const Github = () => {
  return (
    <Card icon={data.icon} title={data.title} size={data.iconSize}>
      <CardItem>
        <GitHubStats />
      </CardItem>
      <CardItem>
        <RecentRepositories />
      </CardItem>
    </Card>
  );
};

export default Github;
