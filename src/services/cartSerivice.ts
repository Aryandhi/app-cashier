import { Cart } from "../models/Cart";
import { productService } from "./productService";

export class CartService {
    private carts: Cart[] = [];

    addToCart(code: string, qty: number) {
        const product = productService.getProductUniqueProperty("code", code);

        if(!product){
            return [];
        }

        this.carts.push({product, qty});
    }

    showCart():void {
        let cartList = "Cart:\n";
        let total = 0;

        for (const cart of this.carts) {
            let subtotal = cart.product.price * cart.qty;
            total += subtotal;

            cartList += `${cart.product.name} - ${cart.qty}pcs - ${subtotal}\n`;

        }
        cartList += `Total: Rp${total}`;
    }
}