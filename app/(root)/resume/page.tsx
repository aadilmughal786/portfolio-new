import Card from "@/componenets/resume/Card";
import CardItem from "@/componenets/resume/CardItem";
import Education from "@/componenets/resume/EductionItem";
import ResumeData from "@/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume - Aadil",
  description: "Portfolio Website",
};

export default function Home() {
  return (
    <>
      {" "}
      {/* Education */}
      <Card
        icon={ResumeData.EducationSectionData.icon}
        title={ResumeData.EducationSectionData.title}
      >
        {ResumeData.EducationSectionData.items.map((item) => (
          <CardItem key={item.id}>
            <Education data={item} />
          </CardItem>
        ))}
      </Card>
    </>
  );
}
