"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const cartSerivice_1 = require("./services/cartSerivice");
const productService_1 = require("./services/productService");
function runApp() {
    const cartService = new cartSerivice_1.CartService();
    window.alert(productService_1.productService.getProduct());
    while (true) {
        const input = window.prompt("Enter product code and quantity (separated by space) or type 'pay' to checkout");
        if (!input) {
            break;
        }
        if (input.toLocaleLowerCase() === 'pay') {
            cartService.pay();
            break;
        }
        const [code, quantityStr] = input.split(" ");
        const quantityNumber = Number(quantityStr);
        if (isNaN(quantityNumber) || quantityNumber < 0) {
            window.alert("Invalid quantity");
            continue;
        }
        cartService.addToCart(code, quantityNumber);
        cartService.showCart();
    }
    window.alert("Thankyour for shopping");
}
(_a = document.getElementById("run")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", runApp);
