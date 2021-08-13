<template>
  <div class="bg-grey-200">
    <div class="container">
      <div class="flex flex-wrap">
        <div
          class="flex flex-col w-full justify-center items-start md:text-left md:w-1/3 lg:w-2/5 pt-10 md:pt-6"
        >
          <div class="max-w-md mx-3">
            <h4 class="font-medium text-secondaryHover uppercase mb-3">
              Extensive PARTNERship network
            </h4>
            <h2 class="text-4xl font-bold text-red">
              Access a wide range of education providers.
            </h2>
            <p class="mt-5 text-lg text-grey-700">
              We work with over 120+ education providers in key study
              destinations including UK, US, Canada, Australia and New Zealand.
            </p>
          </div>
        </div>

        <!-- logo start -->
        <div class="business">
          <div class="grid grid-cols-2 gap-1 lg:grid-cols-3">
            <div
              v-for="(item, i) in logoAll"
              :key="i"
              class="min-w-0 business__logo"
            >
            <img :src="require(`@/assets/images/logos/${item.src}`)" alt="">
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export const businessLogo = [
  {
    src: "01.png",
    alt: "Edvoy in Yahoo News"
  },
  {
    src: "02.png",
    alt: "Edvoy in Yahoo News"
  },
  {
    src: "03.png",
    alt: "Edvoy in Yahoo News"
  },
  {
    src: "04.png",
    alt: "Edvoy in Yahoo News"
  },
  {
    src: "05.png",
    alt: "Edvoy in Yahoo News"
  }
]
export default {
  data() {
    return {
      logoAll: businessLogo,
    }
  }
}
</script>

<style lang="scss">
.business {
  height: 75vh;
  @apply relative w-full md:w-2/3 lg:w-3/5 pr-3 overflow-x-hidden;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &__logo {
    min-width: 150px;
    height: 85px;
    @screen md {
      min-width: 200px;
      height: 110px;
    }
    @screen lg {
      min-width: 300px;
      height: 175px;
    }
  }
}
</style>
// https://gs-shop.github.io/vue-slick-carousel/#/