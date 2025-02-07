const formatDate = (options: Intl.DateTimeFormatOptions) => (date: Date) =>
    new Date(date).toLocaleDateString('en-US', options);

export const dateWithShortMonth = formatDate({
    year: 'numeric',
    month: 'short',
    day: 'numeric',
});
