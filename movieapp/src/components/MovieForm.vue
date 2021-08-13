
<template>
    <form @submit.prevent="onSubmit" class="text-center">
        <div class="form-group">
            <input type="text" name="moviename" v-model="moviename" class="form-control mb-3" placeholder="Movie Name">
        </div>
        <div class="form-group">
            <input type="text" name="movieurl" v-model="movieurl" class="form-control mb-3" placeholder="Movie URL">
        </div>
        <div class="row">
            <div class="form-group col-8">
                <input type="text" name="movieplace" v-model="movieplace" class="form-control mb-3" placeholder="Theatre Name">
            </div>
            <div class="form-group col-4">
               <select v-model="movietime" name="movietime" class="form-control">
                   <option selected value=""> Time select </option>
                   <option value="11:00 AM"> 11:00 AM</option>
                   <option value="02:00 PM"> 02:00 PM</option>
                   <option value="06:00 PM"> 06:00 PM</option>
                   <option value="09:00 PM"> 09:00 PM</option>
               </select>
            </div>
        </div>
        <button type="submit" class="btn btn-block btn-success">Add Movie</button>
    </form>
</template>





<script>
import { v4 as uuidv4 } from 'uuid';


export default {
    name: "MovieForm",
    props: {
        addMovie: Function,
    },
    data(){
        return{
            moviename: "",
            movieurl: "",
            movieplace: "",
            movietime: ""
        }
    },
   
    methods: {
        onSubmit: function(){
            this.addMovie({
                name: this.moviename,
                url: this.movieurl,
                place: this.movieplace,
                time: this.movietime,
                id: uuidv4(),
                date: Date.now()
            });
            this.moviename = "";
            this.movieurl = "";
            this.movieplace = "";
            this.movietime = "";
        }
    }
}
</script>

<style >

</style>