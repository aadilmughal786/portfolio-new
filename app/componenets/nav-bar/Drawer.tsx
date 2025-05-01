import React from "react";
import Link from "next/link";
import { TNavBarData } from "@/types/nav-bar/nav-bar.types";
import { footerData } from "@/data/footer/index";
import { IoHeart } from "react-icons/io5";

type DrawerProps = {
  data: TNavBarData;
  showDrawer: any;
};

const Drawer = ({ data, showDrawer }: DrawerProps) => {
  return (
    <div
      className={`flex flex-col pt-4 gap-4 md:hidden ${
        showDrawer ? "block" : "hidden"
      }`}
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

      {/* made with gatsby */}
      <div className="flex gap-1 items-center px-4 pt-3 border-t sm:hidden border-border-primary">
        {" Made with "}
        <IoHeart className="text-rose-400" />
        {" and "}
        <a href={footerData.technology.url} target="_blank" rel="noreferrer" className="link">
          {footerData.technology.name}
        </a>
      </div>
    </div>
  );
};

export default Drawer;
