export const formatMonth = (d: Date) => {
  const y = d.getFullYear();
  const m = d.getMonth() + 1;
  return `${y}.${m.toString().padStart(2, '0')}`;
};
