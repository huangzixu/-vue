import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);

//引入模块
import cityPickers from './modules/cityPicker';

export default new Vuex.Store({
    modules:{
        cityPickers
    },
    plugins:[createLogger()]
})