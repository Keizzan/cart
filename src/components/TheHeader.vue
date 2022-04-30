// ##############################################################################
// #######             PROJECT NAME : Vue Cart                            #######
// ##############################################################################
//                                Synopsis:
// Header component contain simple navbar
<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
          {{ cart.qty }}
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
// imports
import { inject } from "vue";
export default {
  setup() {
    // inject cart object from main component (App.vue)
    const loadedCart = inject("cart");

    return {
      cart: loadedCart,
    };
  },
};
</script>

<style scoped>
header {
  height: 5rem;
  background-color: white;
  margin: 0 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #45006d;
  border-color: #45006d;
}
</style>
