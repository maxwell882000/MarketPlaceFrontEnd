<template>
  <Splide class="splide" :options="splideOptions">
    <slot></slot>
  </Splide>
</template>
<script>

export default {
  props: {
    autoWidth: {
      type: Boolean,
      default() {
        return false;
      }
    },
    perPage: {
      type: Number,
      default() {
        return 5;
      }
    }

  },
  data() {
    return {
      splideOptions: {
        type: "noloop",
        perPage: this.perPage,
        perMove: 3,
        padding: '2rem',
        pagination: false,
        autoWidth: this.autoWidth,
        breakpoints: {
          1400: {
            perPage: this.perPage,
            perMove: 2,
            padding: '1rem'
          },
          992: {
            perPage: this.perPage - 1 || 3,
            perMove: 2,
            padding: '0.5rem'
          },
          768: {
            perPage: this.perPage - 2 || 2,
            perMove: 1,
            padding: '1rem'
          },
          500: {
            perPage: this.perPage - 3 || 1,
            perMove: 1,
            padding: '1rem'
          },
        },
      },
    }
  },
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