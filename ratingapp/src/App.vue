<template>
  
  <div class="container">
    <div class="row">
      <div class="col-5 m-auto">
        <div class="card card-body text-center p-5 mt-5 border-primary">
          
          <div class="card-body">
            <i class="fa fa-star text-warning fa-2x" @click="setRating(1)"></i>
            <i class="fa fa-star text-warning fa-2x" @click="setRating(2)"></i>
            <i class="fa fa-star text-warning fa-2x" @click="setRating(3)"></i>
            <i class="fa fa-star text-warning fa-2x" @click="setRating(4)"></i>
            <i class="fa fa-star text-warning fa-2x" @click="setRating(5)"></i>
          </div>

          <h6 class="text-success mt-4 font-weight-bold" v-if="rating == 1" >Sorry to hear that rating</h6>
          <h6 class="text-success mt-4 font-weight-bold" v-if="rating == 2" >we got 2 star and we will improve</h6>
          <h6 class="text-success mt-4 font-weight-bold" v-if="rating == 3" >we got 3 star and Best</h6>
          <h6 class="text-success mt-4 font-weight-bold" v-if="rating == 4" >we got 4 star and Good</h6>
          <h6 class="text-success mt-4 font-weight-bold" v-if="rating == 5" >we got 5 star and Very Good</h6>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      rating: null
    }
  },
  methods: {
    setRating(rating){
      this.rating = rating 
    }
  }
}
</script>

<style>
  body {
    background-color: #333;
  }
</style>