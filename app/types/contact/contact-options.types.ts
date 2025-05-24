import { ReactNode } from 'react';

export interface ContactOption {
  icon: ReactNode;
  title: string;
  description: string;
  linkText: string;
  linkHref: string;
  linkTarget: '_self' | '_blank';
}

export type ContactOptions = ContactOption[];
