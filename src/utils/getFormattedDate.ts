export const getFormattedDate = (dateString: string) => {
  const [day, month, year] = dateString.split('.').map(Number);

  const fullYear = `20${year}`;
  const date = new Date(+fullYear, month - 1, day);

  const daysShort = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
  const dayOfWeekShort = daysShort[date.getDay()];

  const options: Intl.DateTimeFormatOptions = {
    month: 'long',
    day: 'numeric',
  };

  return `${date.toLocaleDateString(
    'ru-RU',
    options
  )} ${fullYear}, ${dayOfWeekShort}`;
};
