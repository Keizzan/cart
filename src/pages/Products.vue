// ##############################################################################
// #######             PROJECT NAME : Vue Cart                            #######
// ##############################################################################
//                                Synopsis:
// Main products component, contains one child component and is a unique route in router
<template>
  <section>
    <ul>
      <ProductItem
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      />
    </ul>
  </section>
</template>

<script>
// imports
import { inject } from "vue";
import ProductItem from "../components/ProductItem.vue";

export default {
  components: {
    ProductItem,
  },
  setup() {
     // inject products object from main component(App.vue)
    const products = inject("products");

    return {
      products,
    };
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 40rem;
}
</style>
