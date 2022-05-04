<template>
  <div class="left-part">
    <div class="d-none d-sm-none d-md-block image_con p-1">
      <img class="img-res rounded-st main-image" :src="activeImageUrl"/>
    </div>
    <div class="ml-1 d-flex justify-content-center">
      <Splide @splide:move="splideMove" :options="splideOptions" class="splide custom-arrows w-100">
        <SplideSlide v-for="(element, index) in picturesList" :key="'splide_' + index" class="splide-slide">
          <div class="image-size">
            <img class="img-res" :src="element" alt="xiaomi">
          </div>
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<script>
import {Splide, SplideSlide} from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import {mapGetters, mapMutations} from "vuex";

export default {
  components: {Splide, SplideSlide},
  name: 'PicturesPart',
  data() {
    return {
      index: null,
      splideOptions: {
        type: 'loop',
        perPage: 4,
        gap: '0px',
        height: 'auto',
        pagination: false,
        autoplay: false,
        perMove: 1,
        breakpoints: {
          767: {
            perPage: 1,
            arrows: false,
            pagination: true
          },
          991: {
            perPage: 2,
          },
          1199: {
            perPage: 3,
          },
        },
      },
    }
  },
  computed: {
    ...mapGetters({
      activeImageUrl: "productModule/currentImage",
      picturesList: 'productModule/imageList'
    }),
  },
  methods: {
    ...mapMutations({
      setImage: "productModule/setCurrentImage"
    }),
    splideMove(Proxy, newIndex) {
      event?.stopImmediatePropagation()
      this.setImage(this.picturesList[newIndex]);
    }
  },
  props: []
}
</script>

<style lang="scss" scoped>
.image-size {
  width: 6rem;
}
.image_con {
  height: 25rem;
}

.left-part {
  width: 100%;


  .splide {
    width: calc(100% - 100px);
  }

  .splide__slide {
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {

      .image-size {
        height: 25rem;
        width: max-content;
      }
    }

  }
}
</style>