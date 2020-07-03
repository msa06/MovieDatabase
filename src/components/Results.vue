<template>
    <div>
        <div class="cards">
        <div class="card my-3" style="width: 18rem;" v-for="result in fetchResult" v-bind:key="result.imdbID">
            
                <MovieCard v-bind:movie="result"/>
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
</style>