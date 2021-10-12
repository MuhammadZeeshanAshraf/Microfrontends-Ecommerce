import { mount as productsMount } from "products/ProductsIndex";
import { mount as cartMount } from "cart/CartShow";

console.log("Container");

productsMount(document.getElementById("con-products"));
cartMount(document.getElementById("con-cart"));
