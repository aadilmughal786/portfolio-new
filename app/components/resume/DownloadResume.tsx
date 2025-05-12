import { downloadResumeData as data } from '@/data/resume/download-resume';
import Card from './Card';
import CardItem from './CardItem';

const DownloadResume = () => {
  return (
    <div id="download-resume">
      <Card icon={data.icon} title={data.title}>
        <CardItem>
          <div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
              {data.items.map(({ icon: Icon, id, link, type }) => (
                <a
                  href={link}
                  key={id}
                  className="flex flex-col gap-2 items-center p-3 rounded border transition-colors border-border-primary hover:bg-sky-400/10"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Download resume in ${type} format`}
                >
                  <Icon size={35} />
                  <span className="font-mono">{type}</span>
                </a>
              ))}
            </div>
          </div>
        </CardItem>
      </Card>
    </div>
  );
};

export default DownloadResume;
