const formatDate = (date: Date): string =>
  Intl.DateTimeFormat('en-CA', {}).format(date);

export default formatDate;
