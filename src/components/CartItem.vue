// ##############################################################################
// #######             PROJECT NAME : Vue Cart                            #######
// ##############################################################################
//                                Synopsis:
// Child component for item in Cart (parent component 'pages/Cart.vue')

<template>
  <li>
    <div>
      <img :src="image" :alt="title" />
    </div>
    <div>
      <h3>{{ title }}</h3>
      <div class="item">
        <div>
          Price per Item:
          <strong>${{ price }}</strong>
        </div>
        <div>
          Quantity:
          <strong>{{ qty }}</strong>
        </div>
      </div>
      <div class="total">Total: ${{ itemTotal }}</div>
      <button @click="remove">Remove</button>
    </div>
  </li>
</template>

<script>
// imports
import { inject, computed } from "vue";

export default {
  // props received from parent component (pages/Cart.vue)
  props: ["prodId", "title", "image", "price", "qty"],
  setup(props) {
    // inject delete function from main componenent (App.vue)
    const removeProductFromCart = inject("removeProductFromCart");

    // computed total products value in cart
    const itemTotal = computed(function() {
      return (props.price * props.qty).toFixed(2);
    });
    // remove function
    const remove = function() {
      removeProductFromCart(props.prodId);
    };
    return {
      remove,
      itemTotal,
    };
  },
};
</script>

<style scoped>
li {
  margin: 1rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  text-align: center;
  max-width: 25rem;
}

img {
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  object-fit: cover;
}

.item {
  display: flex;
  justify-content: space-between;
}

.total {
  font-weight: bold;
  margin: 1rem 0;
  border-top: 1px solid #474747;
  border-bottom: 2px solid #474747;
  padding: 0.25rem 0;
  width: auto;
}

button {
  font: inherit;
  border: 1px solid #8f0030;
  background-color: #8f0030;
  color: white;
  border-radius: 30px;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
}

button:hover,
button:active {
  background-color: #53001c;
  border-color: #53001c;
}
</style>
