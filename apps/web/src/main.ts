import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { HttpClient } from '@vite-boilerplate/core';

console.log(HttpClient);

createApp(App).mount('#app');
