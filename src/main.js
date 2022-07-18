import { createApp } from 'vue';
import router from './route.js';
import App from './App.vue';
import store from './store/index.js';

import BaseCard from './components/ui/BaseCard.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import BaseButton from './components/ui/BaseButton.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('base-badge', BaseBadge);
app.component('base-button', BaseButton);

app.use(store);
app.use(router);
app.mount('#app');
