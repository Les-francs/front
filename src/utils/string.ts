export const dateToString = (date: Date | string) => {
  if (typeof date === "string") {
    date = new Date(date);
  }

  return date.toLocaleString();
};
