// ##############################################################################
// #######             PROJECT NAME : Vue Cart                            #######
// ##############################################################################
//                                Synopsis:
// Main component containing header and router
<template>
  <TheHeader />
  <router-view></router-view>
</template>

<script>
// imports
import { ref, provide } from "vue";
import TheHeader from "./components/TheHeader.vue";

export default {
  components: {
    TheHeader,
  },
  setup() {
    // example products object
    const products = [
      {
        id: "p1",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Books_HD_%288314929977%29.jpg/640px-Books_HD_%288314929977%29.jpg",
        title: "Book Collection",
        description:
          "A collection of must-read books. All-time classics included!",
        price: 99.99,
      },
      {
        id: "p2",
        image:
          "https://upload.wikimedia.org/wikipedia/en/thumb/c/c9/Tent_at_High_Shelf_Camp_cropped.jpg/640px-Tent_at_High_Shelf_Camp_cropped.jpg",
        title: "Mountain Tent",
        description: "A tent for the ambitious outdoor tourist.",
        price: 129.99,
      },
      {
        id: "p3",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/640px-Good_Food_Display_-_NCI_Visuals_Online.jpg",
        title: "Food Box",
        description:
          "May be partially expired when it arrives but at least it is cheap!",
        price: 6.99,
      },
    ];

    // cart object
    const cart = ref({ items: [], total: 0, qty: 0 });

    // add to cart function
    function addProductToCart(productData) {
      // find item collarelting with id in cart
      const productInCartIndex = cart.value.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      // check if item already exists if yes
      // add to qty
      if (productInCartIndex >= 0) {
        cart.value.items[productInCartIndex].qty++;
      } else {
        // else create new object
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        cart.value.items.push(newItem);
      }
      cart.value.qty++;
      cart.value.total += productData.price;
    }

    // remove from cart function
    function removeProductFromCart(prodId) {
      // find item collarelting with id in cart
      const productInCartIndex = cart.value.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      // remove item from cart
      const prodData = cart.value.items[productInCartIndex];
      cart.value.items.splice(productInCartIndex, 1);
      cart.value.qty -= prodData.qty;
      cart.value.total -= prodData.price * prodData.qty;
    }

    // provides to child components
    provide("products", products); // pages/Products.vue
    provide("cart", cart);  // pages/Cart.vue & components/Header.vue
    provide("addProductToCart", addProductToCart); // components/ProductItem.vue
    provide("removeProductFromCart", removeProductFromCart); // compontents/CartItem.vue
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
