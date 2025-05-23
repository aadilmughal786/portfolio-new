import ContactForm from '@/components/contact/ContactForm';
import ContactHero from '@/components/contact/Hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Aadil Mughal. Find contact information and a simple form to reach out for collaborations, job opportunities, or questions.',
};

export default function Home() {
  return (
    <div className="relative px-4 sm:px-8 lg:px-16">
      <ContactHero />
      <ContactForm />
    </div>
  );
}
