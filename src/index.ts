import { CartService } from "./services/cartSerivice";
import { productService } from "./services/productService";

function runApp() {
    const cartService = new CartService();
    window.alert(productService.getProduct());

    while (true) {
        const input = window.prompt(
            "Enter product code and quantity (separated by space) or type 'pay' to checkout"
        )

        if (!input) {
            break;
        }

        if (input.toLocaleLowerCase() === 'pay') {
            cartService.pay();
            break;
        }

        const [code, quantityStr] = input.split(" ");
        const quantityNumber = Number(quantityStr);

        if(isNaN(quantityNumber) || quantityNumber < 0 ) {
            window.alert("Invalid quantity");
            continue;
        }

        cartService.addToCart(code, quantityNumber);
        cartService.showCart();
    }
    window.alert("Thankyour for shopping");
}

document.getElementById("run")?.addEventListener("click", runApp);