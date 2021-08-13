<template>
  <div class="w-72 p-2">
      <NuxtLink :to="`/products/${card.id}`">
        <img :src="require(`@/assets/images/${card.image || 'demo.jpg'}`)"  alt="">
      </NuxtLink>
  </div>
</template>

<script>
export default {
    props: ["card"]
}
</script>

<style>

</style>