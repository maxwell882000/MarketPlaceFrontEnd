<template>
  <div class="row">
    <div class="col-lg-9">
      <Splide class="splide" :options="{autoplay: true, type: 'loop',}">
        <SplideSlide data-splide-interval="3000">
          <a href="/somewhere">
            <img src="@/assets/banner.png" alt="Sample 1">
          </a>
        </SplideSlide>
        <SplideSlide data-splide-interval="3000">
          <a href="/somewhere">
            <img src="@/assets/banner.png" alt="Sample 1">
          </a>
        </SplideSlide>
      </Splide>
    </div>
    <div class="col-lg-3">
      <div class="item-of-day">
        <div class="item-of-day-title">
          <h5>Товар дня</h5>
          <div class="time">
            07:48:10
          </div>
        </div>
        <div class="item-of-day-content">
          <div class="item-of-day-image">
            <div></div>
            <img src="@/assets/mi-band.png" alt="mi-band">
            <div class="icons">
              <Like class="like" />
            </div>
          </div>
          <div class="item-of-day-info">
            <p class="item-of-day__description mb-1">Lorem ipsum dolor sit amet, consectetur </p>
            <ItemPrice />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import Like from "../buttons/Like";
import ItemPrice from "../ItemPrice";
export default {
  components: {ItemPrice, Like, Splide, SplideSlide },
}
</script>

<style scoped lang="scss">
  .splide {
    img {
      width: 100%;
    }
  }
  .item-of-day {
    transition: all 0.3s;
    min-height: 100%;
    background-color: white;
    border-radius: 14px;
    padding: 10px 18px;

    .item-of-day-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 10px;

      h5 {
        margin-bottom: 0;
        font-weight: 600;
      }
      .time {
        border: 1px solid #F2F2F2;
        border-radius: 5px;
        padding: 2px 10px;
        font-weight: 500;
        background: -webkit-linear-gradient(109.44deg, #325FFF 14.9%, #D356FF 92.39%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .item-of-day-image {
      display: flex;
      padding: 0 10px;
      justify-content: space-between;

      .icons {
        transition: all 0.3s;
        visibility: hidden;
        opacity: 0;
      }
    }
    .item-of-day__description {
      line-height: 18px;
    }

    &:hover {
      box-shadow: 0 8px 14px rgba(0, 0, 0, 0.15);
      .icons {
        visibility: visible;
        opacity: 1;
      }
    }
  }

</style>