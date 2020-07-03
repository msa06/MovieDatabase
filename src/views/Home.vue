<template>
  <div class="home">
    <div class="container">
  <div class="row">
    <div class="col-12">
        <MovieDatabase/>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <Search/>
    </div>
  </div>
  <div class="row">
    <div class="col-12">
      <Results/>
    </div>
  </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieDatabase from '../components/MovieDatabase'
import Search from '../components/Search'
import Results from '../components/Results'

export default {
  name: 'Home',
  components:{
    MovieDatabase,
    Search,
    Results
  }
}
</script>
