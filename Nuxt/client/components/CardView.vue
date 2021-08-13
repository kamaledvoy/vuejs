<template>
    <NuxtLink :to="`/products/${card.id}`" class="card border-b-1 mb-3 max-w-xs p-2">
        <img :src="require(`@/assets/images/${card.image || 'demo.jpg'}`)" alt="">
        <h3 class="font-bold text-md mb-3 mt-2">{{card.title}}</h3>
        <p class="text-md mb-3">{{card.snippet}}</p>
    </NuxtLink>
</template>

<script>
export default {
    props: ["card"]
}
</script>

<style>

</style>