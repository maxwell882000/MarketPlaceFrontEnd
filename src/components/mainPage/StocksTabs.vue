<template>
  <b-tabs
    pills
    content-class="mt-1"
    lazy
    active-nav-item-class="tab-header-active"
    active-tab-class="tab-active"
    class="main-page__custom-tabs"
  >
    <b-tab title="Все">
      <div class="row stocks">
        <div class="col-lg-4 col col-md-6 col-sm-12">
          <img src="@/assets/stock1.png" alt="" />
        </div>
        <div class="col-lg-4 col col-md-6 col-sm-12">
          <img src="@/assets/stock2.png" alt="" />
        </div>
        <div class="col-lg-4 col col-md-6 col-sm-12">
          <img src="@/assets/stock3.png" alt="" />
        </div>
        <div class="col-lg-4 col col-md-6 col-sm-12">
          <img src="@/assets/stock4.png" alt="" />
        </div>
        <div class="col-lg-4 col col-md-6 col-sm-12">
          <img src="@/assets/stock5.png" alt="" />
        </div>
        <div class="col-lg-4 col col-md-6 col-sm-12">
          <img src="@/assets/stock6.png" alt="" />
        </div>
      </div>
    </b-tab>
    <b-tab title="Подарок за покупку"></b-tab>
    <b-tab title="Промокоды"></b-tab>
    <b-tab title="Скидки"></b-tab>
  </b-tabs>
</template>

<style scoped>
.stocks .col {
  padding: 10px;
}
.stocks img {
  transition: all 0.3s;
  width: 100%;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 0 0 transparent;
}
.stocks img:hover {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
</style>