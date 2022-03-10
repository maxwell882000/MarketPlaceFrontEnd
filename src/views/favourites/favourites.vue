<template>
  <section class="container mb-3">
    <Badge class="mb-3"></Badge>
    <empty-page
        button-text="На главную"
        desc="Жмите ♡ на странице товара и добавляйте сюда то, что нравится. И если цена на эти товары упадёт, мы вам напишем."
        link="/" image="SearchNotFound.png"
                title="Ещё не готовы к покупке?"></empty-page>
    <div class="mb-3"><h4 class="inline">Избранное</h4> <span>15 товаров</span></div>
    <b-row>
      <filtration-side></filtration-side>
      <b-col cols="9">
        <product-wrapper></product-wrapper>
      </b-col>
    </b-row>
  </section>
</template>
<script>
import Badge from "@/components/shared/Badge";
import FiltrationSide from "@/components/filter/filtrationSide";
import ProductWrapper from "@/components/shared/productWrapper";
import EmptyPage from "@/components/helper/empty/emptyPage";

export default {
  components: {EmptyPage, ProductWrapper, FiltrationSide, Badge}
}
</script>