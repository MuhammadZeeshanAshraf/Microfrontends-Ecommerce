import faker from "faker";

const mount = (el) => {
  let products = "";

  for (let y = 0; y < 5; y++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  el.innerHTML = products;
};
// If we are in development and in isolation,
if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("dev-products");
  if (el) {
    mount(el);
  }
}
// We are running through container
export { mount };
