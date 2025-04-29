import Card from "@/app/componenets/resume/Card";
import CardItem from "@/app/componenets/resume/CardItem";
import Education from "@/app/componenets/resume/EductionItem";
import ResumeData from "@/app/data/resume";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Resume",
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
