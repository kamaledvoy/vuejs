<template>
  <div class="about" style="max-width:800px; margin: auto;">
    <transition appear
    name="fade"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    >
        <h1 v-if="showTitle">This is an about page</h1>
    </transition>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto aperiam laboriosam praesentium, facere eligendi ut at, sit magnam repellat expedita nobis fuga ad tempore delectus ratione perspiciatis doloremque non sunt.</p>
      
  </div>
</template>


<script>
import {ref} from 'vue'
export default {
  setup() {
    const showTitle = ref(true)

    const beforeEnter = (e) => {
      console.log('Before Enter', e);
    }
    const enter = (e) => {
      e.style.color = 'green'
      console.log('Enter', e);
    }
    const afterEnter = (e) => {
      console.log('After Enter', e);
    setTimeout(() => showTitle.value = false, 2000)
    }

    const beforeLeave = (e) => {
      e.style.color = 'red'
      console.log('Before Leave', e);
    }
    const leave = (e) => {
      console.log('Leave', e);
    }
    const afterLeave = (e) => {
      console.log('After Leave', e);
    }
    return {showTitle, beforeEnter, enter, afterEnter, beforeLeave, leave, afterLeave }
  }
}
</script>
<style>
  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 2s ease;
  }

  .fade-leve-to {
    opacity: 0;
  }
  .fade-leave-active {
    transition: opacity 3s ease;
  }
</style>