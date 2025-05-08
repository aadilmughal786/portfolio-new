import React, { useRef } from 'react';
import Link from 'next/link';
import { TNavBar } from '@/types/nav-bar/nav-bar.types';
import { footerData } from '@/data/footer/index';
import { IoHeart } from 'react-icons/io5';

type DrawerProps = {
  data: TNavBar;
  showDrawer: boolean;
};

const Drawer = ({ data, showDrawer }: DrawerProps) => {
  // We'll use this ref to measure the height for animation
  const drawerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={drawerRef}
      className={`
        md:hidden overflow-hidden
        transition-all duration-300 ease-in-out
        ${showDrawer ? 'opacity-100 max-h-[500px]' : 'max-h-0 opacity-0'}
      `}
    >
      <div
        className={`flex flex-col pt-4 gap-4 md:hidden transition-transform duration-300 ease-in-out
        ${showDrawer ? 'translate-y-0' : '-translate-y-4'}`}
      >
        {data.navigationItems.map(({ icon: Icon, id, to, label }) => (
          <div key={id} className="flex gap-4 items-center px-4 link sm:px-8">
            <Icon className="icon" />
            <Link href={to}>{label}</Link>
          </div>
        ))}

        {/* socail site icons mobile */}
        <div className="flex gap-4 items-center px-4 pt-3 border-t border-border-primary sm:hidden md:border-0 md:pr-0">
          {data.socialLinks.map(({ icon: Icon, id, link }) => (
            <a key={id} href={link} target="_blank" rel="noreferrer">
              <Icon className="icon" />
            </a>
          ))}
        </div>

        <div className="flex gap-1 items-center px-4 py-3 border-t border-b sm:hidden border-border-primary">
          {' Made with '}
          <IoHeart className="text-rose-400 flip" size={18} />
          {' and '}
          <a href={footerData.technology.url} target="_blank" rel="noreferrer" className="link">
            {footerData.technology.name}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
