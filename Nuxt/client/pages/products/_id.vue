<template>
  <div>
     <!-- {{product}} -->
     <!-- {{$route.params.id}} -->

      <!-- layoout to added goback nav -->
     
     <div v-if="product" class="container py-8">
       <no-nav/>       
       <div class="flex flex-wrap max-w-6xl m-auto">
         <div class="w-1/4">
            <img :src="require(`@/assets/images/${product.image || 'demo.jpg'}`)" alt="">
         </div>
         <div class="w-3/4 bg-grey-500 p-8">
          <h1 class="font-bold text-xl mb-3">{{product.title}}</h1>
          <p>{{product.snippet}}</p>

          <button type="button" class="btn"  @click="showModal">Open Modal</button>        
          <Modal :product="product" v-show="isModalVisible" @close="closeModal" />
          
         </div>
       </div>    

       

       <reviews />   
     </div>

     <div v-else class="container p-5">
        <page-not-found />
     </div>

   
  </div>
</template>

<script>
import {mapState} from "vuex"
import Modal from '../../components/Modal.vue'
import PageNotFound from '../../components/PageNotFound.vue'
import Reviews from '../../components/Reviews.vue'
import noNav from '../../layouts/no-nav.vue'
export default {
  components: { noNav, PageNotFound, Reviews, Modal },
  computed: {
    product(){
      return this.$store.getters.getProductdById(this.$route.params.id)    
    }
  },
  data() {
      return {
        isModalVisible: false,
      };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
}
</script>

<style>

</style>