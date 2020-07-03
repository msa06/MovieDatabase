<template>
  <div id="app">
    <div class="container">
      <div class="row">
    <div class="col-12">
        <router-link to="/"><MovieDatabase/></router-link>
    </div>
  </div>
  <router-view/>
    </div>

    

    

  </div>
</template>

<script>

import MovieDatabase from './components/MovieDatabase'
import Search from './components/Search'
import Results from './components/Results'
import axios from 'axios'

export default {
  name:'App',
  components:{
    MovieDatabase,
    Search,
    Results
  }

}
</script>

<style>
*{
  box-sizing: border-box;
  margin:0px;

  background: #222831;
  color:#ececec
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
