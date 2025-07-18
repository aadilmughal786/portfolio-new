'use client';

import CardItem from './CardItem';
import { FaAngleRight } from 'react-icons/fa6';
import { useState } from 'react';
import Card from './Card';
import { forRecruiterData as data } from '@/data/resume/for-recruiter';

const ForRecruiter = () => {
  // Track the currently open FAQ item
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  // Toggle FAQ answer visibility
  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <Card icon={data.icon} title={data.title}>
      <div>
        {data.faqs.map(({ id, icon, question, answer }) => (
          <CardItem key={id}>
            <button
              onClick={() => toggleFaq(String(id))} // Convert id to string to match openFaqId type
              className={`flex gap-4 items-center w-full font-medium text-left cursor-pointer hover:text-text-tertiary ${
                openFaqId === String(id) ? 'text-text-tertiary' : ''
              }`}
              aria-expanded={openFaqId === String(id)}
              aria-controls={`faq-answer-${id}`}
            >
              {icon}
              <span className={`flex-1`}>{question}</span>
              <FaAngleRight
                className={`transition-transform duration-300 ${
                  openFaqId === String(id) ? 'rotate-90' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            <div
              id={`faq-answer-${id}`}
              className={`transition-all duration-300 ease-in-out ${
                openFaqId === String(id)
                  ? 'max-h-96 opacity-100 mt-2'
                  : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <ul className="pl-6 space-y-2 list-disc marker:text-text-tertiary">
                {answer.map((point, index) => (
                  <li key={index} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </CardItem>
        ))}
      </div>
    </Card>
  );
};

export default ForRecruiter;
