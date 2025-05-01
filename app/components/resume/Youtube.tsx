import { TYouTubeSection } from "@/types/resume/youtube.types";
import React from "react";
import { FaBell, FaThumbsUp, FaYoutube } from "react-icons/fa6";

type YouTubeSectionProps = {
  data: TYouTubeSection;
};

const Youtube = ({ data }: YouTubeSectionProps) => {
  return (
    <div>
      <div>
        <iframe
          src={data.videoLink}
          className="w-full border-0 aspect-video"
        ></iframe>
      </div>
      <div className="flex flex-row gap-x-2 justify-center items-center px-6 py-1 border-t border-border-primary">
        <FaThumbsUp /> {"Like and"}
        <FaBell />
        {"Subscribe"}
      </div>
    </div>
  );
};

export default Youtube;
