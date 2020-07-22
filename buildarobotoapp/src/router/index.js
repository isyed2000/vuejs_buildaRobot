import Vue from 'vue';
import Router from 'vue-router';
import Dashboard1 from '../components/Dashboard1.vue';

Vue.use(Router);

export default new Router(
    {
        routes:[{
            path:"/dashboard1",
            name:"Dashboard1",
            component:Dashboard1
        }]

    }

);

