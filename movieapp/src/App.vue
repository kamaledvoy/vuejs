<template>
  <main>
    <Header title="Movie Booking App"></Header>

      <div class="container mt-5">
        <div class="row">
          <div class="offset-md-3 col-lg-6 p-3">
              <div class="card card-body mb-2">
                <movie-form :addMovie="addMovie"></movie-form>
              </div>
              <movie-list :movies="movies" :deleteMovie="deleteMovie"></movie-list>
          </div>
        </div>
      </div>
     
  </main>
</template>


<script>
import Header from "./layout/Header"
import MovieForm from "./components/MovieForm.vue"
import MovieList from "./components/MovieList.vue"


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
export default {
  name: 'App',
  components: {
    Header,
    MovieForm,
    MovieList
  },
  data(){
    return{
      movies: []
    }
  },
  methods: {
    addMovie: function(movie){
      this.movies.push(movie);
      localStorage.setItem("@movies", JSON.stringify(this.movies))
    },
    deleteMovie: function(id){
      const index = this.movies.findIndex(movie => movie.id === id);
      this.movies.splice(index, 1);
      localStorage.setItem("@movies", JSON.stringify(this.movies))
    }
  },
  mounted(){
      if(localStorage.getItem("@movies")){
          try {
              this.movies = JSON.parse(localStorage.getItem("@movies"))
          } catch (error) {
              localStorage.removeItem("@movies")
          }
      }
  }
}
</script>

<style>
* {
  padding: 0;
  outline: 0;
  margin: 0;
  box-sizing: border-box;
}
main {
  background-image: url("./assets/movie-bg.jpg");
  background-position: center;
  background-size: cover;
  min-height: 100vh;
}
</style>