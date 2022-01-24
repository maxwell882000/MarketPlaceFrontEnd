<template>
  <div class="row">
    <div class="col-xl-9 col-12">
      <Splide class="splide" :options="{ autoplay: true, type: 'loop' }">
        <SplideSlide data-splide-interval="3000">
          <a href="/somewhere">
            <img src="@/assets/banner.png" alt="Sample 1" />
          </a>
        </SplideSlide>
        <SplideSlide data-splide-interval="3000">
          <a href="/somewhere">
            <img src="@/assets/banner.png" alt="Sample 1" />
          </a>
        </SplideSlide>
      </Splide>
    </div>
    <div class="col-lg-3 item-of-day-col">
      <div class="item-of-day">
        <div class="item-of-day-title">
          <h5>Товар дня</h5>
          <div class="time">07:48:10</div>
        </div>
        <div class="item-of-day-content">
          <div class="item-of-day-image">
            <div></div>
            <img src="@/assets/mi-band.png" alt="mi-band" />
            <div class="icons">
              <Like class="like" />
              <Gift class="gift" />
            </div>
          </div>
          <div class="item-of-day-info">
            <p class="item-of-day__description mb-1">
              Чехол Apple Leather Sleeve for MacBook Pro 13 black
            </p>
            <ItemPrice />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Like from "../buttons/Like";
import ItemPrice from "../shared/ItemCardPrice";
import Gift from "../buttons/Gift";
export default {
  components: { Gift, ItemPrice, Like },
};
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
      border: 1px solid #f2f2f2;
      border-radius: 5px;
      padding: 2px 10px;
      font-weight: 500;
      background: -webkit-linear-gradient(
        109.44deg,
        #325fff 14.9%,
        #d356ff 92.39%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  .item-of-day-image {
    display: flex;
    padding: 0 10px;
    justify-content: space-between;

    .icons {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transition: all 0.3s;
      visibility: hidden;
      opacity: 0;
      padding-bottom: 10px;
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
@media (max-width: 1200px) {
  .item-of-day-col {
    display: none;
  }
}
</style>