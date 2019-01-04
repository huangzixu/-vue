// import {cityList,constList} from '../../api/index';

const state = {
    //签发城市列表
    cityList:[],
    //可补换城市
    costList:[],
    //选择的签发城市
    city:[],
    //选择的补换城市
    cost:[]
}

const mutations = {
    updateState(state,action){

    }
}

const actions = {
    //获取签发城市列表
    async getCityList({commit}){
        // let res=await cityList();
        console.log("res...",res)
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}