<template>
  <div class="container mt-5">
      <h1 class="font-bold text-2xl mb-3">My Items</h1>
      <!-- {{myRentals}} -->

      <Myitems 
        v-for="items in myRentals"
        :key="items.id"
        :item="items"
      />
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  layout: 'no-nav',
  computed: {
    ...mapState(['myRentals'])
  }
}
</script>

<style>

</style>