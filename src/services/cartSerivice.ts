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
}