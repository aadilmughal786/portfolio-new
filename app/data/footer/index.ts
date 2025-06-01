import { TFooterData } from '@/types/footer/footer.types';
import { developerInfo } from '../dev-info';

export const footerData: TFooterData = {
  copyrightYear: `© ${new Date().getFullYear()}`,
  developer: {
    name: 'Aadil Mugal',
    website: developerInfo.github,
  },
  technology: {
    name: 'NextJS',
    url: 'https://www.nextjs.com',
  },
};
