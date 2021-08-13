<template>
  <main>
     <div class="app p-4 container-fluid">
       <div class="row">
         <div class="col col-md-6 mt-4 offset-md-3">
           <div class="text-center">
             <div v-if="user">
               <user-card :user="user"></user-card>
               <div class="d-grid gap-2">
                  <button type="button" @click="fetchUser"  class="btn btn-primary mt-2">Fetch New User</button>
               </div>
             </div>
             <div v-else class="text-center">
               <div class="spinner-border spinner-grow" role="status">
                  <span class="sr-only"> Loading...</span>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
  </main>
</template>

<script>
import axios from "axios"
import UserCard from "./components/UserCard.vue"

export default {
  name: 'App',
  data(){
    return{
      user: null
    }
  },
  components: {
    UserCard
  },
  mounted(){
    this.fetchUser();
  },
  methods: {
    fetchUser: function(){
      axios.get("https://randomuser.me/api/")
      .then( (res) => {
        //console.log(res.data.info.seed);
        this.user = res.data.results[0];
      })
      .catch(err => console.log(err))
    }
  }
}
</script>

<style>
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  main {
    height: 100vh;
    background-image: url(./assets/api-one.jpg);
    background-color: #000;
    background-position: center;
    background-size: cover;
  }
  .card {
    margin-top: 125px;
  }
  img {
    margin-top: -80px;
  }
</style>