import { navBarData } from '@/data/nav-bar';
import ThemeToggleBtn from './ThemeToggleBtn';
import Drawer from './Drawer';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { IoHeart } from 'react-icons/io5';
import { HiMiniBars3 } from 'react-icons/hi2';
import { GrClose } from 'react-icons/gr';
import { usePathname } from 'next/navigation';

const NavBar = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const pathname = usePathname();

  // Close drawer on route change
  useEffect(() => {
    setShowDrawer(false);
  }, [pathname]);

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Check if click is outside
      if (showDrawer && !target.closest('.navbar-container')) {
        setShowDrawer(false);
      }
    };

    if (showDrawer) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDrawer]);

  return (
    <div className="sticky top-0 z-20 glass">
      <div className="py-2 w-full border-b navbar-container border-border-primary">
        <div className={`flex justify-between items-center px-4 sm:px-8 lg:px-16`}>
          {/* left-part :: site logo */}
          <Link href="/" className="flex gap-1 items-center text-xl font-bold text-text-tertiary">
            Aa <IoHeart className="icon flip" />
          </Link>

          {/* mid-part */}
          <div className="hidden gap-3 items-center text-sm font-semibold md:flex">
            {navBarData.navigationItems.map(item => (
              <Link
                key={item.id}
                href={item.to}
                className={`hover:text-text-tertiary ${
                  pathname === item.to ? 'text-text-tertiary' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* right-part */}
          <div className="flex gap-3 items-center">
            {/* theme switch btn */}
            <ThemeToggleBtn />

            {/* socail site icons */}
            <div className="hidden gap-4 items-center pl-5 border-l border-border-primary sm:flex">
              {navBarData.socialLinks.map(({ icon: Icon, id, link }) => (
                <a key={id} href={link} target="_blank" rel="noreferrer">
                  <Icon className="icon" />
                </a>
              ))}
            </div>

            {/* drawer toggler btn */}
            <div className="flex gap-3 items-center pl-5 border-l md:hidden border-border-primary">
              {showDrawer ? (
                <GrClose className="icon" onClick={() => setShowDrawer(false)} />
              ) : (
                <HiMiniBars3 className="icon" onClick={() => setShowDrawer(true)} />
              )}
            </div>
          </div>
        </div>
      </div>
      <Drawer data={navBarData} showDrawer={showDrawer} />
    </div>
  );
};

export default NavBar;
