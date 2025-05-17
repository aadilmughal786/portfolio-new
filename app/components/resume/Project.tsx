import { organizedData } from '@/data/projects';
import Card from './Card';
import CardItem from './CardItem';
import { TOrganizedData, TProject } from '@/types/projects/projects.types';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { TbExternalLink } from 'react-icons/tb';

const Category: React.FC<{ category: TOrganizedData }> = ({ category }) => {
  return (
    <div>
      <div className="flex flex-row gap-6 items-center pb-2">
        <div>{category?.icon}</div>
        <div>
          <div className="font-medium text-text-tertiary">{category?.title}</div>
          <div>{category?.description}</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {category?.items?.map((item: TProject, index) => (
          <a
            key={index}
            href={item.repoUrl}
            target="_blank"
            rel="noreferrer"
            className="px-2 py-1 text-xs rounded bg-text-tertiary/5 text-text-tertiary"
          >
            <span>{item.title}</span>
            <TbExternalLink className="-mt-[3px] ml-1 inline-block sm:ml-0" size={16} />
          </a>
        ))}
      </div>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const data = organizedData();

  return (
    <Card icon={AiOutlineFundProjectionScreen} title={'Projects'}>
      <div>
        {data.map((categoryData, key) => (
          <CardItem key={key}>
            <Category category={categoryData} />
          </CardItem>
        ))}
      </div>
    </Card>
  );
};

export default ProjectsPage;
