const MONTHS_ABBR = [
  "jan",
  "fev",
  "mar",
  "abr",
  "mai",
  "jun",
  "jul",
  "ago",
  "set",
  "out",
  "nov",
  "dez",
];

export const useFormattedDate = (date: string): string => {
  const parsedDate = new Date(date);
  if (isNaN(parsedDate.getTime())) {
    return "Data inválida";
  }

  const day = parsedDate.getDate();
  const month = MONTHS_ABBR[parsedDate.getMonth()];
  const year = parsedDate.getFullYear();

  return `${day} de ${month}, ${year}`;
};
