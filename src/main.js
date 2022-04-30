// ##############################################################################
// #######             PROJECT NAME : Vue Cart                            #######
// ##############################################################################
//                                Synopsis:
// global js file


// imports
import { createApp } from 'vue';
import router from './router.js';
import App from './App.vue';

// main app object
const app = createApp(App)
// user router
app.use(router);

app.mount('#app');