<template>
    <div>
        <div class="cards">
        
        <div class="card my-3" style="width: 18rem;" v-for="movie in fetchResult" v-bind:key="movie.imdbID">

                <router-link :to="{name:'About',params:{movieId:movie.imdbID}}" @click.native="getMovie(movie.imdbID)"><MovieCard v-bind:movie="movie" /></router-link>
        </div>
        
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import { mapGetters,mapActions,mapMutations } from 'vuex'
import MovieCard from './MovieCard'
export default {
    name:"Results",
    data(){
        return {
            movieId:""
        }
    },
    components:{
        MovieCard
    },
    computed:{
        ...mapGetters([
            'fetchResult',
            'fetchSearchItem'
        ]),
    },
    methods:{
        ...mapMutations([
            'ADD_MOVIEID'
        ]),
        ...mapActions([
            'fetchMovieDetails'
        ]),
        getMovie(key){
            console.log("MovieId:",key)
            
            this.fetchMovieDetails(key);
        }
    }
}
</script>

<style scoped>
    .cards{
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
        justify-content: space-between;
    }
    .card{
        margin:10px;
        
    }
    router-link{
        text-decoration: none;
    }
</style>