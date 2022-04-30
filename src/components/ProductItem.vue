// ##############################################################################
// #######             PROJECT NAME : Vue Cart                            #######
// ##############################################################################
//                                Synopsis:
// Child component for product (parent component 'pages/Products.vue')
<template>
  <li>
    <div class="product">
      <div class="image">
        <img :src="image" :alt="title" />
      </div>
      <div class="text">
        <h3>{{ title }}</h3>
        <h4>${{ price }}</h4>
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="actions">
      <button @click="addToCart">Add to Cart</button>
    </div>
  </li>
</template>

<script>
// imports
import { inject } from "vue";

export default {
  // props received from parent component (pages/Products.vue)
  props: ["id", "image", "title", "price", "description"],
  setup(props) {
    // inject add to cart function from main component (App.vue)
    const addProductToCart = inject("addProductToCart");

    // add to cart function
    const addToCart = function() {
      addProductToCart({
        id: props.id,
        image: props.image,
        title: props.title,
        price: props.price,
      });
    };

    return {
      addToCart,
    };
  },
};
</script>

<style scoped>
li {
  margin: 1.5rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

.product {
  display: flex;
}

.image {
  margin-right: 1rem;
}

.image img {
  height: 10rem;
  width: 10rem;
  object-fit: cover;
}

.text h3 {
  margin: 0 0 0.5rem 0;
}

.text h4 {
  margin: 0;
}

.actions {
  text-align: center;
}

button {
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
  color: white;
  border: 1px solid #45006d;
  padding: 0.5rem 1.5rem;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #760ab4;
  border-color: #760ab4;
}
</style>
