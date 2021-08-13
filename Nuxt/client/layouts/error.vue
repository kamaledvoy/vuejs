<template>
  <div>

    <div v-if="error.statusCode === 404">
      <page-not-found/>
    </div>
    <h1 v-else class="font-bold text-5xl p-8 text-center">An error occurred</h1>

  </div>
</template>

<script>
import PageNotFound from '../components/PageNotFound.vue'
export default {
    props: ['error'],
    components: { PageNotFound },
}
</script>

<style>

</style>