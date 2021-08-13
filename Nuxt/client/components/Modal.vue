<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <h1 class="font-bold text-lg">Order this item your card</h1>
        <button type="button" class="btn-close" @click="close"> x </button>
      </header>

      <section class="modal-body">
        <div class="flex flex-row">
            <div class="w-2/4">
              <p class="text-justify"> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga obcaecati quas sint ducimus similique recusandae quae optio, nemo, autem voluptate iusto officia sapiente doloremque doloribus!</p>
            </div>
            <div class="w-2/4 p-3">
              <vc-date-picker :value="null" color="green" is-dark is-range />
            </div>
        </div>
      </section>

      <footer class="modal-footer">
        <button type="button" class="btn-green" @click="() => {addItem(product.id)}"> Order</button>
      </footer>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex"

  export default {
    props: ['product'],
    name: 'Modal',
    methods: {
      close() {
        this.$emit('close');
      },
      ...mapMutations(['addItem'])
    },
  };
</script>

<style>
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: #FFFFFF;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 600px;
    height: 450px;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
    transition: all 0.3s ease;
    overflow: hidden;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
    height: 60px;
  }

  

  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: crimson;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    height: 80%;
  }

  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    color: red;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: crimson;
    border: 1px solid crimson;
    border-radius: 4px;
    padding: 5px 10px;
    display: inline-block;
    width: 100px;
    margin:  0 auto;
  }
</style>