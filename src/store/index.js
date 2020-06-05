import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

  
  state: {
    data : [],
    updateUser :[],
    updatePassword: [],
    user: {
      address: '',
      fname: '',
      lname: 'Matej',
      login: '',
      token : '',
      data : []
    }
  },
  mutations: {},
  actions: {},
  modules: {}
});
