import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

export function padMissingWeeks(weeks: Additional.Github.Week[], targetWeeks = 53): Additional.Github.Week[] {
  if (weeks.length >= targetWeeks) return weeks;

  // 获取第一周的日期
  const firstDate = weeks[0]?.contributionDays[0]?.date;
  if (!firstDate) return weeks;

  const paddedWeeks = [...weeks];
  const date = new Date(firstDate);

  while (paddedWeeks.length < targetWeeks) {
    date.setDate(date.getDate() - 7); // 向前推一周

    const newWeek: Additional.Github.Week = {
      contributionDays: Array(7)
        .fill(0)
        .map((_, i) => {
          const dayDate = new Date(date);
          dayDate.setDate(date.getDate() + i);
          return {
            contributionCount: 0,
            date: dayDate.toISOString().split("T")[0],
            weekday: i,
          };
        }),
    };

    paddedWeeks.unshift(newWeek);
  }

  return paddedWeeks;
}
