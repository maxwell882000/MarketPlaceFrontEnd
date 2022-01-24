<template>
    <div class="left-part">
        <img class="main-image" :src="activeImageUrl" />
        <div class="d-flex justify-content-center">
            <Splide @splide:move="splideMove" :options="splideOptions" class="splide custom-arrows">
                <SplideSlide v-for="(element, index) in picturesList" :key="'splide_' + index" class="splide-slide">
                    <img :src="element" alt="xiaomi">
                </SplideSlide>
            </Splide>
        </div>
    </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import xiaomi from "@/assets/xiaomi.png"
import camera from "@/assets/item-image.png"

export default {
    components: { Splide, SplideSlide },
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
                    },
                    991: {
                        perPage: 2,
                    },
                    1199: {
                        perPage: 3,
                    },
                },
            },
            activeImageUrl: '',
            picturesList: [xiaomi, camera]
        }
    },
    mounted() {
        this.activeImageUrl = this.picturesList[0];
    },
    methods: {
        splideMove(Proxy, newIndex) {
            event?.stopImmediatePropagation()
            console.log(newIndex)
            this.activeImageUrl = this.picturesList[newIndex]
        }
    },
    props: []
}
</script>

<style lang="scss" scoped>
.left-part {
    width: 100%;
    .main-image {
        width: 100%;
        object-fit: cover;
    }
    .splide {
        width: calc(100% - 100px);
    }
    .splide__slide {
        display: flex;
        justify-content: center;
        align-items: center;

        img { 
            width: 100%;
        }
    }
}
</style>