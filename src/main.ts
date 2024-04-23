/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins';
import App from './App.vue';
import { createApp } from 'vue';
import "./assets/style/index.scss";

import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyDe2vNR4kXASH_sS1EuwG_At8lQpVFB0cc",
    authDomain: "jwt-test-79584.firebaseapp.com",
    projectId: "jwt-test-79584",
    storageBucket: "jwt-test-79584.appspot.com",
    messagingSenderId: "1019745962699",
    appId: "1:1019745962699:web:3cf8c2dd02bc66bdb8694e",
    measurementId: "G-7PGXQYV1L0"
};
initializeApp(firebaseConfig);


const app = createApp(App);

registerPlugins(app);

app.mount('#app');
