<template>
  <div>
    <header class="nav-header">
      <nav class="nav-header__nav">

        <div class="flex flex-row justify-between">
            <NuxtLink to="/"><nuxt-logo/> </NuxtLink>
            
            <ul class="max-w-4xl flex flex-wrap items-center justify-between">
              <li class="mr-3"><NuxtLink to="/products" class="">Products</NuxtLink></li>
              <li class="mr-3"><NuxtLink to="/myitem" class="">My Items</NuxtLink></li>
              <li><button type="button" class="btn btn-blue">Login</button></li>
            </ul>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
import NuxtLogo from '../components/NuxtLogo.vue'

import Logo from "../components/NuxtLogo.vue"
export default {
  components: { NuxtLogo },
}
</script>

<style>

</style>