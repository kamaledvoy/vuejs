<template>
  <div>
    <div class="container">
      <card-display 
        v-for="cardInfo in cardSection.slice(0,1)"
        :key="cardInfo.id"
        :cardSection="cardInfo"
       />

       <smallcard-display 
        v-for="cardInfo in smallCardAll.slice(0,1)"
        :key="cardInfo.id"
        :smallcardSection="cardInfo"
       />
  </div>
  </div>
</template>

<script>

import {cardData, smallCardSections} from "@/assets/data.js"

export default {
 data(){
   return{
     cardSection: cardData,
     smallCardAll: smallCardSections
   }
 }

}
</script>

<style>

</style>