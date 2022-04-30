// ##############################################################################
// #######             PROJECT NAME : Vue Cart                            #######
// ##############################################################################
//                                Synopsis:
// Main cart component, contains one child component and is a unique route in router
<template>
  <section>
    <h2>Your Cart</h2>
    <h3>Total Amount:${{ cartTotal }}</h3>
    <ul>
      <CartItem
        v-for="item in cart.items"
        :key="item.productId"
        :prod-id="item.productId"
        :title="item.title"
        :image="item.image"
        :price="item.price"
        :qty="item.qty"
     />
    </ul>
  </section>
</template>

<script>
// imports
import { inject, computed } from "vue";
import CartItem from "../components/CartItem.vue";

export default {
  components: {
    CartItem,
  },
  setup() {
    // inject cart object from main component(App.vue)
    const cart = inject("cart");

    // computed total value of cart
    const cartTotal = computed(function() {
      return cart.value.total.toFixed(2);
    });

    return {
      cart,
      cartTotal,
    };
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
