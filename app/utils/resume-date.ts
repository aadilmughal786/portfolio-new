// Format Date object to 'Mon YYYY' string
export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.toLocaleString('en-US', { month: 'short' });
  return `${month} ${year}`;
};

// Get current date as Date object
export const getCurrentDate = (): Date => new Date();

// Convert number of days to human-readable years and months
export const formatDurationFromDays = (days: number): string => {
  const DAYS_IN_YEAR = 365;
  const DAYS_IN_MONTH = 30;

  let years = Math.floor(days / DAYS_IN_YEAR);
  days -= years * DAYS_IN_YEAR;

  let months = Math.floor(days / DAYS_IN_MONTH);
  if (days % DAYS_IN_MONTH > 0) months += 1;

  if (months > 11) {
    months = 0;
    years += 1;
  }

  const yearStr = years === 0 ? '' : years === 1 ? 'one year' : `${years} years`;
  const monthStr = months === 0 ? '' : months === 1 ? 'one month' : `${months} months`;

  return [yearStr, monthStr].filter(Boolean).join(' ');
};

// Calculate date difference in days
export const getDateDifferenceInDays = (start: Date, end: Date): number => {
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const utcStart = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate());
  const utcEnd = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate());
  return Math.floor((utcEnd - utcStart) / MS_PER_DAY);
};

// Format a past date into a "time ago" string
export const getTimeAgo = (dateString: string): string => {
  const then = new Date(dateString);
  const now = new Date();
  const secondsElapsed = Math.floor((now.getTime() - then.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const intervals: [number, Intl.RelativeTimeFormatUnit][] = [
    [60, 'second'],
    [60, 'minute'],
    [24, 'hour'],
    [30, 'day'],
    [12, 'month'],
    [Infinity, 'year'],
  ];

  let duration = secondsElapsed;
  for (const [limit, unit] of intervals) {
    if (duration < limit) return rtf.format(-duration, unit);
    duration = Math.floor(duration / limit);
  }

  return rtf.format(-duration, 'year');
};
