import GitHubStats from "@/components/resume/github/GitHubStats";
import Card from "@/components/resume/Card";
import CardItem from "@/components/resume/CardItem";
import Contact from "@/components/resume/Contact";
import Course from "@/components/resume/CourseItem";
import Education from "@/components/resume/EductionItem";
import Experience from "@/components/resume/Experience";
import GameOfTheDay from "@/components/resume/GameOfTheDay";
import Hobby from "@/components/resume/HobbyItem";
import Language from "@/components/resume/LanguageItem";
import Skill from "@/components/resume/Skill";
import Volunteering from "@/components/resume/Volunteering";
import Youtube from "@/components/resume/Youtube";
import resumeData from "@/data/resume";
import type { Metadata } from "next";
import RecentRepositories from "@/components/resume/github/Repositories";
import ForRecruiter from "@/components/resume/ForRecruiter";
import DownloadResume from "@/components/resume/DownloadResume";

export const metadata: Metadata = {
  title: "Resume - Aadil",
  description: "Portfolio Website",
};

export default function Home() {
  return (
    <div className="grid gap-x-8 gap-y-8 px-4 py-16 sm:px-8 lg:grid-cols-3 lg:px-16">
      {/* column-1 */}
      <div className="flex flex-col gap-y-8 lg:col-span-2">
        {/* Experience */}
        <Card
          icon={resumeData.experienceSectionData.sectionIcon}
          title={resumeData.experienceSectionData.sectionTitle}
        >
          {resumeData.experienceSectionData.experiences.map((item) => (
            <CardItem key={item.id}>
              <Experience data={item} />
            </CardItem>
          ))}
        </Card>

        {/* Github  */}
        <Card
          icon={resumeData.githubSectionData.icon}
          title={resumeData.githubSectionData.title}
          size={resumeData.githubSectionData.size}
        >
          <CardItem>
            <GitHubStats />
          </CardItem>
          <CardItem>
            <RecentRepositories />
          </CardItem>
        </Card>

        {/* Education */}
        <Card
          icon={resumeData.educationSectionData.icon}
          title={resumeData.educationSectionData.title}
          size={resumeData.educationSectionData.size}
        >
          {resumeData.educationSectionData.items.map((item) => (
            <CardItem key={item.id}>
              <Education data={item} />
            </CardItem>
          ))}
        </Card>

        {/* Courses & Certificates */}
        <Card
          icon={resumeData.courseSectionData.icon}
          title={resumeData.courseSectionData.title}
        >
          {resumeData.courseSectionData.items.map((item) => (
            <CardItem key={item.id}>
              <Course data={item} />
            </CardItem>
          ))}
        </Card>

        {/* Volunteering */}
        <Card
          icon={resumeData.volunteeringSectionData.icon}
          title={resumeData.volunteeringSectionData.title}
          size={resumeData.volunteeringSectionData.size}
        >
          {resumeData.volunteeringSectionData.items.map((item) => (
            <CardItem key={item.id}>
              <Volunteering data={item} />
            </CardItem>
          ))}
        </Card>
      </div>

      {/* column-2 */}
      <div className="flex flex-col gap-y-8">
        {/* For Recruiter */}
        <Card
          icon={resumeData.forRecruiterData.icon}
          title={resumeData.forRecruiterData.title}
        >
          <ForRecruiter faq={resumeData.forRecruiterData.faq} />
        </Card>

        {/* Download Resume */}

        <Card
          icon={resumeData.downloadResumeData.icon}
          title={resumeData.downloadResumeData.title}
        >
          <CardItem>
            <DownloadResume
              downloadResume={resumeData.downloadResumeData.downloadResume}
            />
          </CardItem>
        </Card>

        {/* Skills */}
        <Card
          icon={resumeData.skillsData.icon}
          title={resumeData.skillsData.title}
        >
          {resumeData.skillsData.items.map((item) => (
            <CardItem key={item.id}>
              <Skill key={item.id} data={item} />
            </CardItem>
          ))}
        </Card>

        {/* Contact */}
        <Card
          icon={resumeData.contactData.icon}
          title={resumeData.contactData.title}
        >
          {resumeData.contactData.item.map((item) => (
            <CardItem key={item.id}>
              <Contact data={item} />
            </CardItem>
          ))}
        </Card>

        {/* Hobbies */}
        <Card
          icon={resumeData.hobbySectionData.icon}
          title={resumeData.hobbySectionData.title}
          size={resumeData.hobbySectionData.size}
        >
          {resumeData.hobbySectionData.items.map((item) => (
            <CardItem key={item.id}>
              <Hobby data={item} />
            </CardItem>
          ))}
        </Card>

        {/* Game Of The Day */}
        <Card
          icon={resumeData.gameOfTheDayData.icon}
          title={resumeData.gameOfTheDayData.title}
          size={resumeData.gameOfTheDayData.size}
        >
          <CardItem>
            <GameOfTheDay data={resumeData.gameOfTheDayData} />
          </CardItem>
        </Card>

        {/* Language */}
        <Card
          icon={resumeData.languageSectionData.icon}
          title={resumeData.languageSectionData.title}
          size={resumeData.languageSectionData.size}
        >
          {resumeData.languageSectionData.items.map((item) => (
            <CardItem key={item.id}>
              <Language data={item} />
            </CardItem>
          ))}
        </Card>

        {/* Youtube */}
        <Card
          icon={resumeData.youTubeSectionData.icon}
          title={resumeData.youTubeSectionData.title}
        >
          <Youtube data={resumeData.youTubeSectionData} />
        </Card>
      </div>
    </div>
  );
}
