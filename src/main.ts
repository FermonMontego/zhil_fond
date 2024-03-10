import {createApp} from 'vue'

import store from "./stores/store.ts";
import router from "./router";

// CUSTOM PLUGINS
import preloader from "./plugins/preloader.ts";

import './assets/styles/index.scss'
import App from './App.vue'

import Container from "./components/wrappers/Container.vue";
import UIInput from "./components/share/Input/UIInput.vue";
import Preloader from "./components/share/Preloader.vue";

const app = createApp(App);

app
    .use(store)
    .use(router)
    .use(preloader)
    .component('UIInput', UIInput)
    .component('Container', Container)
    .component('Preloader', Preloader)
    .mount('#app');
