import vue from 'vue';

import app from './app';

new vue({
    render: h => h(app)
}).$mount('#app')