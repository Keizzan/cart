// ##############################################################################
// #######             PROJECT NAME : Vue Cart                            #######
// ##############################################################################
//                                Synopsis:
// Router object


// imports
import { createRouter, createWebHistory } from "vue-router";
import Products from "./pages/Products.vue";
import Cart from "./pages/Cart.vue";

// router object
const router = createRouter({
  // route history
  history: createWebHistory(),
  routes: [
    // routes
    { path: "/", redirect: "products" },
    { path: "/products", component: Products },
    { path: "/cart", component: Cart },
  ],
});

export default router;
