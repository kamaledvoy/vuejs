<template>
  <div>
      <div class="container max-w-4xl m-auto">
          <h2 class="font-bold my-5">Customer Reviews</h2>
            <!-- check data fetch -->
            <!-- {{$fetchState}} -->  
            
            
            <div v-if="!$fetchState.pending">
                <!-- {{reviewsAll}} -->
                <review-card 
                   v-for="reviews in reviewsAll.results" 
                   :key="reviews.login.uuid"
                   :review="reviews"
                />
            </div>

            <div v-else>
                <h2> Loading...</h2>
            </div>

          
      </div>
  </div>
</template>

<script>
import ReviewCard from './ReviewCard.vue'
    export default {
  components: { ReviewCard },
        data() {
        return {
            reviewsAll: []
        }
        },
        async fetch() {
        this.reviewsAll = await fetch(
            'https://randomuser.me/api/?results=5'
        ).then(res => res.json())
        }
    }
</script>

<style>

</style>