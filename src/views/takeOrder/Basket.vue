<template>
  <section class="container py-3">
    <Badge class="mb-2" :path="badgePath"/>
    <empty-backet></empty-backet>
    <Orders></Orders>
    <h5 class="mt-3 mb-3">Вам может быть интересно</h5>
    <SalesRoll/>
  </section>
</template>

<script>
import SalesRoll from "@/components/shared/SalesRoll.vue";
import Badge from "@/components/shared/Badge.vue";
// import EmptyBacket from "@/components/backet/emptyBacket";
import Orders from "@/components/backet/orders";
import EmptyBacket from "@/components/backet/emptyBacket";

export default {
  data() {
    return {
      buttonDisabled: true,
      badgePath: [
        {
          name: "Главная",
          path: "/",
        },
        {
          name: "Корзина",
          path: "/cart",
        },
      ],
      itemInfo: {
        oldPrice: "3 071 880",
        price: "2 898 000",
        name: "Смартфон Samsung Galaxy A12 (SM-A125) 3/32 ГБ RU, красный",
        picture:
            "https://www.lg.com/in/images/tvs/md06117716/gallery/Desk-02.jpg",
      },
    };
  },
  components: {EmptyBacket, Badge, SalesRoll, Orders},
};
</script>

