import type {Product} from "../models/Product";

export class ProductService {
    private products: Product[] = [
        {
            code: "A",
            name: "Mixalgin",
            price: 10000
        },
        {
            code: "B",
            name: "Neurobion",
            price: 55000
        },
        {
            code: "C",
            name: "Mecobalamin",
            price: 10000
        },
        {
            code: "D",
            name: "Meloxicam 15mg",
            price: 10000
        },

    ];

    getProduct(): string {
        return this.products.map((product) =>
        `${product.code} - ${product.name} - Rp${product.price}`)
        .join("\n");
    }
}