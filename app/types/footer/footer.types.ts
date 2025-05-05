export type TDeveloperInfo = {
  name: string;
  website: string;
};

export type TTechnologyInfo = {
  name: string;
  url: string;
};

export type TFooterData = {
  copyrightYear: string;
  developer: TDeveloperInfo;
  technology: TTechnologyInfo;
};
