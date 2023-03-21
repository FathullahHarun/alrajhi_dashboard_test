import { useEffect } from "react";

const calculateTimeUntilTarget = (targetHour) => {
  const now = new Date();
  const targetTime = new Date(now);
  targetTime.setHours(targetHour, 0, 0, 0);

  if (now > targetTime) {
    targetTime.setDate(targetTime.getDate() + 1);
  }

  return targetTime.getTime() - now.getTime();
};

export const usePeriodicRefresh = () => {
  useEffect(() => {
    const refreshTimes = [9, 18]; // 9:00 AM and 6:00 PM
    const timers = [];

    const refreshPage = () => {
      window.location.reload();
    };

    refreshTimes.forEach((hour) => {
      const timeUntilTarget = calculateTimeUntilTarget(hour);
      console.log(timeUntilTarget);
      const timer = setTimeout(() => {
        refreshPage();
        setInterval(refreshPage, 12 * 60 * 60 * 1000); // Refresh every 12 hours after the initial trigger
      }, timeUntilTarget);

      timers.push(timer);
    });

    console.log("Page refreshed");

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);
};
