<template>
  <div class="container">
      <div class=" max-w-4xl m-auto">
          <h3 class="font-bold mb-3">{{smallcardSection.title}}</h3>
            <div class="flex flex-wrap justify-between">
                <small-card 
                v-for="card in smallcardSection.cards"
                :key="card.id"
                :card="card"
                />
            </div>
      </div>      
  </div>
</template>

<script>
import SmallCard from './SmallCard.vue'
export default {
  components: { SmallCard },
    props: ['smallcardSection']
}
</script>

<style>

</style>