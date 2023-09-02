export const renderPrice = (priceNumber: number): string => {
  return `$${priceNumber}.00`;
};
 export const randomId = () => {
  return (Math.random() * 10)
    .toString(36)
    .slice(0, Math.floor(Math.random() * 100))
    .replace(".", "");
};