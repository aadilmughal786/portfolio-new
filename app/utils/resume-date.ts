// Return formatted string in terms of year and month
const formateDate = (dateObj: Date): string => {
  let year = dateObj.getFullYear();
  let month = dateObj.toLocaleString("en-us", { month: "short" });

  return `${month} ${year}`;
};

// Return current date object
const getCurrentDateObject = (): Date => {
  return new Date();
};

// Convert days into years and months
const getYearsAndMonthsFromDays = (days: number): string => {
  const YEAR = 365,
    MONTH = 30;

  let years: number | string, months: number | string;

  years = days >= YEAR ? Math.floor(days / YEAR) : 0;

  days = years ? days - years * YEAR : days;

  months = days >= MONTH ? Math.floor((days % YEAR) / MONTH) : 0;

  if (days > 0) months += 1;
  if (months > 11) {
    months = 0;
    years += 1;
  }

  years = years === 0 ? "" : years === 1 ? `one year` : `${years} years`;
  months = months === 0 ? "" : months === 1 ? `one month` : `${months} months`;

  return `${years} ${months}`;
};

// Return difference of dates in terms of years and months
const getDiff = (first: Date, second: Date): string => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  const utc1 = Date.UTC(first.getFullYear(), first.getMonth());
  const utc2 = Date.UTC(second.getFullYear(), second.getMonth());

  let days = Math.floor((utc2 - utc1) / _MS_PER_DAY);
  return getYearsAndMonthsFromDays(days);
};

function getTimeAgo(dateString: string): string {
  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  const now = new Date();
  const then = new Date(dateString);
  const seconds = Math.floor((now.getTime() - then.getTime()) / 1000);

  const intervals: [number, Intl.RelativeTimeFormatUnit][] = [
    [60, "second"],
    [60, "minute"],
    [24, "hour"],
    [30, "day"],
    [12, "month"],
    [Infinity, "year"],
  ];

  let duration = seconds;
  for (let i = 0; i < intervals.length; i++) {
    if (duration < intervals[i][0]) {
      return rtf.format(-duration, intervals[i][1]);
    }
    duration = Math.floor(duration / intervals[i][0]);
  }

  return rtf.format(-duration, "year");
}

export { formateDate, getCurrentDateObject, getDiff, getTimeAgo };
