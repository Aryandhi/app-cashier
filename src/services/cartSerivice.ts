import { Cart } from "../models/Cart";
import { productService } from "./productService";

export class CartService {
    private carts: Cart[] = [];

    addToCart(code: string, qty: number) {
        const product = productService.getProductUniqueProperty("code", code);

        if(!product){
            window.alert("Invalid code product");
            return;
        }

        this.carts.push({product, qty});
        window.alert(`${product.name} added to cart (${qty} pcs).`)
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
        window.alert(cartList);
    }

    pay(): void {
        const amount = Number(window.prompt('Enter amount: '));

        if(!amount) {
            window.alert('Payment cancelled');
            return;
        }

        const total = this.carts.reduce((acc, cart) => {
            return acc + cart.product.price * cart.qty;
        }, 0);

        const change = amount - total;
        if(change < 0) {
            window.alert("No Enough Payment!");
            return;
        }

        window.alert(`Payment success! change: ${change}`);
        this.carts = [];
    }
}