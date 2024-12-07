"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
class ProductService {
    constructor() {
        this.products = [
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
    }
    getProduct() {
        return this.products.map((product) => `${product.code} - ${product.name} - Rp${product.price}`)
            .join("\n");
    }
}
exports.ProductService = ProductService;
