import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    APIURL:"http://www.omdbapi.com/?apikey=5978b258&s",
    searchItem:"",
    results:[
    ]
  },
  getters:{
    fetchResult:state=>{
      return state.results;
    },
    fetchSearchItem:state=>{
      return state.searchItem;
    }
  },
  mutations: {
    ADD_SEARCHITEM:(state,item)=>{
      state.searchItem = item
    },
    SET_RESULT:(state,results)=>{
      state.results = results
    }
  },
  actions: {
    fetchAPIResponse(context){
      // console.log(context.state.APIURL,context.state.searchItem);
      axios.get(context.state.APIURL+"="+context.state.searchItem)
      .then(res=>{
        context.commit('SET_RESULT',res.data.Search)
        console.log(res.data.Search)
      })
      .catch(err => {
        console.log(err);
      })
    
    }
  },
  modules: {
  }
})
