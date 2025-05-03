"use client";

import { FAQItem, ResumeFormat } from "@/types/resume/for-recruiter.types";
import CardItem from "./CardItem";
import { FaGoogleDrive } from "react-icons/fa6";
import Dialog from "./Dialog";
import { useState, useCallback } from "react";

type ForRecruiterProps = {
  faq: FAQItem[];
  downloadResume: ResumeFormat[];
};

const ForRecruiter = ({ faq, downloadResume }: ForRecruiterProps) => {
  // Track the selected FAQ item for the dialog
  const [selectedFaq, setSelectedFaq] = useState<FAQItem | null>(null);

  // Memoize dialog handlers to prevent unnecessary re-renders
  const openDialog = useCallback((faqItem: FAQItem) => {
    setSelectedFaq(faqItem);
  }, []);

  const closeDialog = useCallback(() => {
    setSelectedFaq(null);
  }, []);

  return (
    <div className="space-y-4">
      {faq.map(({ id, icon, label, answer }) => (
        <CardItem key={id}>
          <a
            onClick={() => openDialog({ id, icon, label, answer })}
            className="flex gap-4 items-center cursor-pointer link"
            aria-label={`Open FAQ: ${label}`}
          >
            {icon}
            <span>{label}</span>
          </a>
        </CardItem>
      ))}

      {selectedFaq && (
        <Dialog
          isOpen={!!selectedFaq}
          onClose={closeDialog}
          title={selectedFaq.label}
        >
          <ul className="pl-6 space-y-2 list-disc marker:text-text-tertiary">
            {selectedFaq.answer.map((point, index) => (
              <li key={index} className="leading-relaxed">
                {point}
              </li>
            ))}
          </ul>
        </Dialog>
      )}

      <CardItem>
        <div className="flex gap-2 items-center pb-4 font-medium text-text-tertiary">
          <FaGoogleDrive aria-hidden="true" />
          <span>Download Resume</span>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2">
          {downloadResume.map(({ icon, id, link, type }) => (
            <a
              href={link}
              key={id}
              className="flex flex-col gap-2 items-center p-3 rounded border transition-colors border-border-primary hover:bg-sky-400/10"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Download resume in ${type} format`}
            >
              {icon}
              <span>{type}</span>
            </a>
          ))}
        </div>
      </CardItem>
    </div>
  );
};

export default ForRecruiter;
