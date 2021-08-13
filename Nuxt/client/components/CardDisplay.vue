<template>
  <div class="container py-8">
      <div class="max-w-4xl m-auto">
          <h1 class="font-bold pb-3"> {{cardSection.title}} </h1>
            <p>{{cardSection.snippet}}</p>

            <div class="flex flex-row">
                <card-view 
                    v-for="card in cardSection.cards"
                    :key="card.id" 
                    :card="card"
                />
            </div>

      </div>      
  </div>
</template>

<script>
import CardView from './CardView.vue'
export default {
  components: { CardView },
    props: ["cardSection"]
}
</script>

<style>

</style>