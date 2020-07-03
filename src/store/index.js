import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    APIURL:"http://www.omdbapi.com/?apikey=5978b258",
    searchItem:"",
    results:[],
    selectedMovieDetail: []
  },
  getters:{
    fetchResult:state=>{
      return state.results;
    },
    fetchSelectedMovie:state=>{
      return state.selectedMovieDetail
    }
  },
  mutations: {
    ADD_SEARCHITEM:(state,item)=>{
      state.searchItem = item
    },
    SET_RESULT:(state,results)=>{
      state.results = results
    },
    SET_SELECTEDMOVIE:(state,movie)=>{
      state.selectedMovieDetail = movie
    }
  },
  actions: {
    fetchAPIResponse(context){
      // console.log(context.state.APIURL,context.state.searchItem);
      axios.get(context.state.APIURL+"&s="+context.state.searchItem)
      .then(res=>{
        context.commit('SET_RESULT',res.data.Search)
        // console.log(res.data.Search)
      })
      .catch(err => {
        console.log(err);
      })
    },
    fetchMovieDetails(context,key){
      axios.get(context.state.APIURL+"&i="+key)
      .then(res=>{
        context.commit('SET_SELECTEDMOVIE',res.data);
        // console.log(res.data);
      })
    }

  },
  modules: {
  }
})
