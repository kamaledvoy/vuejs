<template>
    <ul class="list-unstyled">
        <li class="mb-2" v-for="movie in movies" :key="movie.id">
            <div class="card">
                <div class="row card-body">
                    <div class="col-8 d-flex flex-column justify-content-start ">
                        <h4 class="card-title">{{movie.name}}</h4>
                        <p class="card-subtitle mb-2">{{movie.place}} <span class="float-right">{{movie.time}}</span></p>
                        <small class="text-muted">Booking on: {{formateDate(movie.date)}}</small>
                    </div>
                    <div class="col-4">
                        <a :href="movie.url" target="_blank" class="btn btn-outline-primary btn-block">View Movie</a>
                        <button @click="deleteMovie(movie.id)" class="btn btn-outline-danger btn-block">Delete </button>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
import moment from "moment"

export default {
    name: "MovieList",
    props: ["movies", "deleteMovie"],
    methods: {
        formateDate: function(date){
            return moment(date).format("DD/MM/YYYY [at] hh:mm:ss a");
        }
    }
}
</script>

<style>

</style>