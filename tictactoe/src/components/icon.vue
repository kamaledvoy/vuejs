<template>
    <div>
        <i class="fa fa-circle fa-4x zoomIn text-primary" v-if="iconname === 'circle'"></i>
        <i class="fa fa-times fa-4x zoomIn text-info" v-else-if="iconname === 'cross'"></i>
        <img src="../assets/logo.png" alt="" v-else-if="iconname === 'empty'" class="img-fluid zoomIn" />
    </div>
</template>

<script>
export default {
    props: {
        iconname:{
            type: String,
            required: true
        }
    }
}
</script>

<style>
img {
  width: 80px;
}
.zoomIn {
  animation-name: zoomIn;
  animation-duration: 1s;
}
@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}
</style>