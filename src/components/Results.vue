<template>
    <div>
        <div class="cards">
        
        <div class="card my-3" style="width: 18rem;" v-for="movie in fetchResult" v-bind:key="movie.imdbID">
                <router-link to="/about"><MovieCard v-bind:movie="movie" @click.prevent="clicked(movie.imdbId)"/></router-link>
        </div>
        
        </div>
    </div>
</template>

<script>

import { mapState } from 'vuex'
import { mapGetters,mapActions } from 'vuex'
import MovieCard from './MovieCard'
export default {
    name:"Results",
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
        clicked(key){
            console.log('Clicked',key)
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