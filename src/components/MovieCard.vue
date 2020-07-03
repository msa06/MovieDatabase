<template>
    <div>
    <img class="card-img-top" :src="movie.Poster" alt="Card image cap">
    <div class="card-body">
        <p class="card-text">{{movie.Title}}</p>
    </div>
    </div>
</template>

<script>
export default {
    name:"MovieCard",
    props:["movie"],

}
</script>

<style scoped>
    .card-img-top{
        height:400px;
        width:286px;
    }
    .card-body,.card-text{
        background:white;
        color:black;
    }
</style>