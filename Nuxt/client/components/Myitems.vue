<template>
    <div class="flex flex-row max-w-5xl m-auto mb-6  bg-grey-300 p-3 border-2">
        <div class="max-w-1/4">
            <img :src="require(`@/assets/images/${item.image}`)"  class="rounded-lg" alt="">
        </div>
        <div class="max-w-3/4 ml-5">
            <h4 class="font-bold text-lg"> {{item.title}} </h4>
            <p class="text-xs"> {{item.description}} </p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['item']
    }
</script>

<style>

</style>