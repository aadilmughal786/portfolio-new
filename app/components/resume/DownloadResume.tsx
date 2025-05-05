import { ResumeFormat } from '@/types/resume/download-resume.types';

type DownloadResumeProps = {
  downloadResume: ResumeFormat[];
};

const DownloadResume = ({ downloadResume }: DownloadResumeProps) => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
        {downloadResume.map(({ icon: Icon, id, link, type }) => (
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
  );
};

export default DownloadResume;
