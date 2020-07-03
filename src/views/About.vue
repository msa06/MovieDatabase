<template>
  <div class="about">
    <!-- <h1>{{fetchSelectedMovie}}</h1> -->
    <div class="container">
      <div class="row my-3">
        <div class="col-5">
          <img :src="fetchSelectedMovie.Poster" alt="">
        </div>
        <div class="col-7 text-left">
          <h2 class="display-4">{{fetchSelectedMovie.Title}}</h2>
          <h4>{{fetchSelectedMovie.Year}} <span class="mx-2">|</span> {{fetchSelectedMovie.Runtime}} </h4>
          <h4>{{fetchSelectedMovie.Genre}}</h4>
          <h4><img src="../assets/imdb.svg" width="65px" height="48px" class="mr-2 mb-1">{{fetchSelectedMovie.imdbRating}}</h4>
          <h6>Cast : {{fetchSelectedMovie.Actors}}</h6>
          <h6>Director : {{fetchSelectedMovie.Director}}</h6>
          <h6>Rated : {{fetchSelectedMovie.Rated}}</h6>
          <h6>Box Office : {{fetchSelectedMovie.BoxOffice}}</h6>
          <h6><i>{{fetchSelectedMovie.Plot}}</i></h6>
          <h6>Awards : {{fetchSelectedMovie.Awards}}</h6>
          
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name:'About',
  props:["movieId"],
  computed:{
        ...mapGetters([
            'fetchSelectedMovie',
        ]),
    },
  methods:{
    

  }
}
</script>

<style scoped>

.title{
  font-weight: bolder;
}
</style>

