import { TFooterData } from "@/types/footer/footer.types";

export const footerData: TFooterData = {
  copyrightYear: `© ${new Date().getFullYear()}`,
  developer: {
    name: "Aadil Mugal",
    links: {
      github: "https://github.com/aadilmughal786",
    },
  },
  technology: {
    name: "NextJS",
    url: "https://www.nextjs.com",
  },
};
