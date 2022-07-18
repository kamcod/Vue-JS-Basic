import { createStore } from "vuex";
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations.js';

const store = createStore({
  state() {
    return {
      requests: [],
      coaches: [
        {
          id: 'c1',
          firstName: "Muhammd",
          lastName: "Kamran",
          hourlyRate: 40,
          areas: ['frontend', 'career'],
          description:
            "Hi, my name is Muhammad Kamran. I am frontend developer and also provide career consultancy",
        },
        {
          id: 'c2',
          firstName: "Muhammad",
          lastName: "Zeeshan",
          hourlyRate: 42,
          areas: ['frontend', 'backend', 'career'],
          description:
            "Hi, my name is Zeeshan. I am frontend/backend developer and also provide career consultancy",
        },
      ],
    };
  },

  getters,
  actions,
  mutations
  
  

});

export default store;
