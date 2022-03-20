<template>
  <section class="container mb-3">
    <Badge class="mb-3"></Badge>
    <empty-page
      button-text="На главную"
      desc="Жмите ♡ на странице товара и добавляйте сюда то, что нравится. И если цена на эти товары упадёт, мы вам напишем."
      link="/"
      image="SearchNotFound.png"
      title="Ещё не готовы к покупке?"
    ></empty-page>
    <div class="mb-3">
      <h4 class="inline">Избранное</h4>
      <span class="px-2">15 товаров</span>
    </div>
    <div class="row">
      <div class="col col-12 mb-3 col-xl-3 col-md-4">
        <filtration-side class="w-100"></filtration-side>
      </div>
      <div class="col col-12 col-xl-9 col-md-8">
        <product-wrapper></product-wrapper>
      </div>
    </div>
  </section>
</template>
<script>
import Badge from "@/components/shared/Badge";
import FiltrationSide from "@/components/filter/filtrationSide";
import ProductWrapper from "@/components/shared/productWrapper";
import EmptyPage from "@/components/helper/empty/emptyPage";

export default {
  components: { EmptyPage, ProductWrapper, FiltrationSide, Badge },
};
</script>