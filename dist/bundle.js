"use strict";
(() => {
  // src/services/productService.ts
  var ProductService = class {
    constructor() {
      this.products = [
        {
          code: "A",
          name: "Mixalgin",
          price: 1e4
        },
        {
          code: "B",
          name: "Neurobion",
          price: 55e3
        },
        {
          code: "C",
          name: "Mecobalamin",
          price: 1e4
        },
        {
          code: "D",
          name: "Meloxicam 15mg",
          price: 1e4
        }
      ];
    }
    getProductUniqueProperty(property, value) {
      return this.products.find((product) => product[property] === value);
    }
    getProduct() {
      return this.products.map((product) => `${product.code} - ${product.name} - Rp${product.price}`).join("\n");
    }
  };
  var productService = new ProductService();

  // src/services/cartSerivice.ts
  var CartService = class {
    constructor() {
      this.carts = [];
    }
    addToCart(code, qty) {
      const product = productService.getProductUniqueProperty("code", code);
      if (!product) {
        window.alert("Invalid code product");
        return;
      }
      this.carts.push({ product, qty });
      window.alert(`${product.name} added to cart (${qty} pcs).`);
    }
    showCart() {
      let cartList = "Cart:\n";
      let total = 0;
      for (const cart of this.carts) {
        let subtotal = cart.product.price * cart.qty;
        total += subtotal;
        cartList += `${cart.product.name} - ${cart.qty}pcs - ${subtotal}
`;
      }
      cartList += `Total: Rp${total}`;
      window.alert(cartList);
    }
    pay() {
      const amount = Number(window.prompt("Enter amount: "));
      if (!amount) {
        window.alert("Payment cancelled");
        return;
      }
      const total = this.carts.reduce((acc, cart) => {
        return acc + cart.product.price * cart.qty;
      }, 0);
      const change = amount - total;
      if (change < 0) {
        window.alert("No Enough Payment!");
        return;
      }
      window.alert(`Payment success! change: ${change}`);
      this.carts = [];
    }
  };

  // src/index.ts
  function runApp() {
    const cartService = new CartService();
    window.alert(productService.getProduct());
    while (true) {
      const input = window.prompt(
        "Enter product code and quantity (separated by space) or type 'pay' to checkout"
      );
      if (!input) {
        break;
      }
      if (input.toLocaleLowerCase() === "pay") {
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
  document.getElementById("run")?.addEventListener("click", runApp);
})();
