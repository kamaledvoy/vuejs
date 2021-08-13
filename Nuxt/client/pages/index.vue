<template>
  <div>    
    <Home/>
    <card-display v-for="cardInfo in cardInfoAll" :key="cardInfo.id" :cardSection="cardInfo" />
    <smallcard-display v-for="smallcardInfo in smallCardAll" :key="smallcardInfo.id" :smallcardSection="smallcardInfo" />
  </div>
</template>

<script>
import { cardData, smallCardSections } from "@/assets/data.js"
import SmallcardDisplay from '../components/SmallcardDisplay.vue'

export default {
  components: { SmallcardDisplay },
  data() {
    return {
      cardInfoAll: cardData,
      smallCardAll: smallCardSections 
    }
  }
}
</script>
