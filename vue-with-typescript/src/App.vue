<template>
  <div class="app">
   <header>
     <div class="orderbtn">
        <button @click="handleClick('title')"> Order by Title</button>
    <button @click="handleClick('salary')"> Order by Salary</button>
    <button @click="handleClick('location')"> Order by Location</button>
     </div>
   </header>
    <job-list :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs } from 'vue';
import JobList from './components/JobList.vue'
import Job from './types/Job'
import OrderTerm from './types/OrderTerm'


export default defineComponent({
  name: 'App',
  components: { JobList },
  setup(){   
    const jobs = ref<Job[]>([
      {title: 'John', location: 'Tharmapuri', salary: 30000, id: '1'},
      {title: 'Arun', location: 'Krishnagiri', salary: 20000, id: '2'},
      {title: 'Arivoli', location: 'Karaikal', salary: 30000, id: '3'},
      {title: 'Nagaraj', location: 'Gumoodipondi', salary: 100000, id: '4'},
      {title: 'Athiyappan', location: 'Tharmapuri', salary: 50000, id: '5'}
    ])
    const order = ref<OrderTerm>('title')

    const  handleClick = (term: OrderTerm) => {
        order.value = term
    }
    return { jobs, handleClick, order }

  }, 
});
</script>

<style>

</style>
