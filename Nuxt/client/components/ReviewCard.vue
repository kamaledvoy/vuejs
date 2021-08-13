<template>
  <div class="flex flex-wrap mb-6">
      <div class="w-14">
          <img :src="review.picture.large" class="rounded-full" alt="">
      </div>
      <div class="w-3/4 ml-5">
          <h1 class="font-bold text-sm">{{review.login.username}}</h1>
          <p class="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime eos vero corporis velit cupiditate sit consectetur, vel voluptas eum amet rerum consequuntur distinctio aspernatur ipsam.</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ["review"]
}
</script>

<style>

</style>