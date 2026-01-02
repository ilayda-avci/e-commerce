export const products = Array.from({ length: 10 }, (_, index) => {
  const id = index + 1;

  const price = Number((6.48 + index * 1.25).toFixed(2));

  const oldPrice = Number((price + 10 + index * 0.75).toFixed(2));

  return {
    id,
    name: `Graphic Design ${id}`,
    category: "English Department",
    oldPrice,
    price,
    image: new URL(
      `../assets/products/product${id}.jpg`,
      import.meta.url
    ).href,
  };
});
