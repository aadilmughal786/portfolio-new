'use client';

import React, { useState } from 'react';
import { IoShareSocial } from 'react-icons/io5';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaTelegram,
  FaReddit,
  FaPinterest,
  FaTumblr,
} from 'react-icons/fa';
import { MdCheck, MdContentCopy, MdEmail, MdLink, MdShare } from 'react-icons/md';
import Drawer from '../projects/Drawer';
import { FaDiscord } from 'react-icons/fa6';
import Image from 'next/image';

const ShareContent = ({ url }: { url: string }) => {
  const [linkCopied, setLinkCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const shareOptions = [
    {
      name: 'Facebook',
      icon: FaFacebook,
      hoverColor: 'hover:bg-[#166FE5]',
      action: () =>
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
          '_blank'
        ),
    },
    {
      name: 'Twitter',
      icon: FaTwitter,
      hoverColor: 'hover:bg-[#1A94DA]',
      action: () =>
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, '_blank'),
    },
    {
      name: 'LinkedIn',
      icon: FaLinkedin,
      hoverColor: 'hover:bg-[#006396]',
      action: () =>
        window.open(
          `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
          '_blank'
        ),
    },
    {
      name: 'WhatsApp',
      icon: FaWhatsapp,
      hoverColor: 'hover:bg-[#22C55E]',
      action: () => window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, '_blank'),
    },
    {
      name: 'Telegram',
      icon: FaTelegram,
      hoverColor: 'hover:bg-[#007BB5]',
      action: () => window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}`, '_blank'),
    },
    {
      name: 'Reddit',
      icon: FaReddit,
      hoverColor: 'hover:bg-[#E63E00]',
      action: () =>
        window.open(`https://reddit.com/submit?url=${encodeURIComponent(url)}`, '_blank'),
    },
    {
      name: 'Pinterest',
      icon: FaPinterest,
      hoverColor: 'hover:bg-[#CC001F]',
      action: () =>
        window.open(
          `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}`,
          '_blank'
        ),
    },
    {
      name: 'Email',
      icon: MdEmail,
      hoverColor: 'hover:bg-gray-700',
      action: () => window.open(`mailto:?body=${encodeURIComponent(url)}`, '_blank'),
    },
    {
      name: 'Tumblr',
      icon: FaTumblr,
      hoverColor: 'hover:bg-[#000D1A]',
      action: () =>
        window.open(`https://www.tumblr.com/share/link?url=${encodeURIComponent(url)}`, '_blank'),
    },
    {
      name: 'Discord',
      icon: FaDiscord,
      hoverColor: 'hover:bg-[#4752C4]',
      action: () => copyToClipboard(url),
    },
  ];

  return (
    <div className="py-6 w-full">
      {/* Copy Link Section */}
      <div className="mb-6">
        <h3 className="flex gap-2 items-center mb-3 text-sm font-semibold tracking-wide uppercase text-text-tertiary">
          <MdLink size={16} />
          Copy Link
        </h3>

        <div className="relative">
          <input
            type="text"
            value={url}
            readOnly
            className="px-3 py-2 w-full text-sm rounded border pr-15 outline-0 text-text-primary/50 border-border-primary"
          />
          <button
            onClick={() => copyToClipboard(url)}
            className={`absolute right-2 cursor-pointer top-1/2 transform -translate-y-1/2 px-3 py-1.5 text-xs font-medium transition-all duration-200`}
          >
            {linkCopied ? (
              <div className="flex gap-1 items-center">
                <MdCheck size={20} />
              </div>
            ) : (
              <div className="flex gap-1 items-center">
                <MdContentCopy size={16} />
              </div>
            )}
          </button>
        </div>
      </div>

      {/* Share Platforms */}
      <div>
        <h3 className="flex gap-2 items-center mb-3 text-sm font-semibold tracking-wide uppercase text-text-tertiary">
          <MdShare size={16} />
          Share On
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {shareOptions.map(option => {
            const IconComponent = option.icon;
            return (
              <button
                key={option.name}
                onClick={option.action}
                className={`cursor-pointer hover:text-white flex items-center gap-3 px-4 p-2 border border-border-primary rounded ${option.hoverColor}  transition-all duration-300`}
              >
                <IconComponent size={18} />
                <span className="text-sm font-medium">{option.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

// Main Share Component
interface ShareComponentProps {
  url: string;
  title: string;
  description: string;
  coverImageUrl: string;
}

const Share: React.FC<ShareComponentProps> = ({ coverImageUrl, url, title, description }) => {
  const [isShareOpen, setIsShareOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsShareOpen(true)}
        className="flex gap-2 justify-center items-center p-2 text-sm font-medium rounded-full border backdrop-blur-sm transition-all duration-200 cursor-pointer hover:bg-text-tertiary hover:text-white border-border-primary"
        aria-label="Share this article"
      >
        <IoShareSocial size={18} /> <span className="hidden sm:inline-block">Share</span>
      </button>

      <Drawer
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        title="Share Article"
        size="md"
        icon={<IoShareSocial size={18} />}
      >
        <div className="p-6">
          <div className="overflow-hidden relative w-full rounded aspect-video">
            <Image src={coverImageUrl} alt={title} fill className="object-cover" priority />
          </div>
          <h2 className="mt-3 text-2xl font-semibold">{title}</h2>
          <p className="mt-2 text-text-primary/80">{description}</p>

          <ShareContent url={url} />
        </div>
      </Drawer>
    </>
  );
};

export default Share;
