import dayjs from "dayjs";

export const generateDates = () => {
  return Array.from({ length: 7 }, (_, i) =>
    dayjs()
      .subtract(6 - i, "day")
      .format("MM/DD/YYYY")
  );
};
