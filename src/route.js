import {createRouter, createWebHistory} from 'vue-router';
import AllCoaches from './pages/AllCoaches.vue';
import RequestsReceived from './pages/RequestsReceived.vue';
import CoachRegistration from "./pages/CoachRegistration.vue";
import CoachDetail from "./pages/CoachDetail.vue";
import CoachContact from "./pages/CoachContact.vue";
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {path: '/', component: AllCoaches},
    {path: '/coaches', component: AllCoaches},
    {path: '/coaches/:id', component: CoachDetail, props: true, children:[
      {path: 'contact', component: CoachContact}
    ]},
    {path: '/requests', component: RequestsReceived},
    {path: '/registration', component: CoachRegistration},
    {path: '/:notFound(.*)', component: NotFound},
  ]

});

export default router;

