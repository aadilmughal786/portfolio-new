import { Contact } from '@/components/resume/Contact';
import Course from '@/components/resume/Course';
import Experience from '@/components/resume/Experience';
import GameOfTheDay from '@/components/resume/GameOfTheDay';
import Hobby from '@/components/resume/Hobby';
import Language from '@/components/resume/Language';
import Skill from '@/components/resume/Skill';
import Volunteering from '@/components/resume/Volunteering';
import Youtube from '@/components/resume/Youtube';
import type { Metadata } from 'next';
import ForRecruiter from '@/components/resume/ForRecruiter';
import DownloadResume from '@/components/resume/DownloadResume';
import Education from '@/components/resume/Eduction';
import Github from '@/components/resume/github/Github';
import Achievement from '@/components/resume/Achievement';

export const metadata: Metadata = {
  title: 'Resume - Aadil',
  description: 'Portfolio Website',
};

export default function Home() {
  return (
    <div className="relative px-4 pt-16 sm:px-8 lg:px-16">
      <div className="h-screen">Hi guys i am here for Youtube lore</div>
      <div className="grid gap-x-8 gap-y-8 py-16 lg:grid-cols-3">
        {/* column-1 */}
        <div className="flex flex-col gap-y-8 lg:col-span-2">
          <Experience />
          <Github />
          <Achievement />
          <Education />
          <Course />
          <Volunteering />
        </div>

        {/* column-2 */}
        <div className="flex flex-col gap-y-8">
          <ForRecruiter />

          <DownloadResume />
          <Skill />
          <Contact />
          <Hobby />
          <GameOfTheDay />
          <Language />
          <Youtube />
        </div>
      </div>
    </div>
  );
}
