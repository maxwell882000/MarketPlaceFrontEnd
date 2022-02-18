<template>
  <Splide class="splide" :options="splideOptions">
    <SplideSlide>
      <item-card />
    </SplideSlide>
    <SplideSlide>
      <item-card />
    </SplideSlide>
    <SplideSlide>
      <item-card />
    </SplideSlide>
    <SplideSlide>
      <item-card />
    </SplideSlide>
    <SplideSlide>
      <item-card />
    </SplideSlide>
    <SplideSlide>
      <item-card />
    </SplideSlide>
    <SplideSlide>
      <item-card />
    </SplideSlide>
    <SplideSlide>
      <item-card />
    </SplideSlide>
    <SplideSlide>
      <item-card />
    </SplideSlide>
    <SplideSlide>
      <item-card />
    </SplideSlide>
  </Splide>
</template>
<script>
import ItemCard from "../shared/ItemCard";
export default {
  components: {ItemCard},
  data() {
    return {
      splideOptions: {
        type: "noloop",
        perPage: 5,
        perMove: 3,
        padding: '2rem',
        pagination: false,
        breakpoints: {
          1400: {
            perPage: 4,
            perMove: 2,
            padding: '1rem'
          },
          992: {
            perPage: 3,
            perMove: 2,
            padding: '0.5rem'
          },
          768: {
            perPage: 2,
            perMove: 1,
            padding: '1rem'
          },
          500: {
            perPage: 1,
            perMove: 1,
            padding: '1rem'
          },
        },
      },
    }
  }
}
</script>

<style scoped>
  .splide {
    margin-left: -2rem;
  }
  .splide__slide {
    padding-bottom: 18px;
  }
  @media (max-width: 1400px) {
    .splide {
      margin-left: -1rem;
    }
  }
  @media (max-width: 992px) {
    .splide {
      margin-left: -0.5rem;
    }
  }
  @media (max-width: 768px) {
    .splide__slide {
      width: 240px !important;
    }
  }
</style>