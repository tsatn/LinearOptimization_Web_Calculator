import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import router from './router/index_router'; 
import { DefaultApolloClient } from '@vue/apollo-composable';
import apolloClient from './apollo';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss';
const app = createApp(App);

app.use(store);
app.use(router); 
app.provide(DefaultApolloClient, apolloClient);
app.mount('#app');
