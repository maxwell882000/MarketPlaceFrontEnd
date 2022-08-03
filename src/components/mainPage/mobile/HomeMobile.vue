<template>
  <section>
    <div class="bg-white banner-category py-4">
      <banner-and-item-mobile></banner-and-item-mobile>
      <popular-categories></popular-categories>
    </div>
    <hit-products></hit-products>
  </section>
</template>

<script>

export default {
  name: "MobileHome",
}
</script>
<script setup>
import BannerAndItemMobile from "@/components/mainPage/mobile/BannerAndItemMobile";
import PopularCategories from "@/components/mainPage/mobile/PopularCategories";
import HitProducts from "@/components/mainPage/mobile/HitProducts";
</script>
<style lang="scss">
.banner-category {
  border-radius: 0 0 var(--borderRadius24) var(--borderRadius24);
}

.mob-home-container {
  border-radius: var(--borderRadius24);
  background-color: white;
}

</style>