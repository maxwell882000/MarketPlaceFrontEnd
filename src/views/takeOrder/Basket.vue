<template>
  <loader waiting="basket">
    <section class="container py-3">
      <Badge class="mb-2" :path="badgePath"/>
      <empty-backet v-if="!countOrder"></empty-backet>
      <Orders v-else></Orders>
      <h5 class="mt-3 mb-3">Вам может быть интересно</h5>
      <SalesRoll/>
    </section>
  </loader>

</template>

<script>
import SalesRoll from "@/components/shared/SalesRoll.vue";
import Badge from "@/components/shared/Badge.vue";
// import EmptyBacket from "@/components/backet/emptyBacket";
import Orders from "@/components/backet/orders";
import EmptyBacket from "@/components/backet/emptyBacket";
import {mapActions, mapGetters, mapMutations} from "vuex";
import Loader from "@/components/loading/loader";

export default {
  data() {
    return {
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
    };
  },
  computed: {
    ...mapGetters({
      countOrder: "prepareBasketModule/countOrders"
    })
  },
  methods: {
    ...mapActions({
      getOrders: "prepareBasketModule/getOrders",
    }),

    ...mapMutations({
      cleanDelivery: 'deliveryInfoModule/cleanAll',
      cleanPrepare: 'registrationOrderModule/clean',
      cleanPayment: 'wayOfPaymentModule/clean'
    })
  },
  components: {Loader, EmptyBacket, Badge, SalesRoll, Orders},
  created() {
    this.getOrders();
    this.cleanDelivery();
    this.cleanPrepare();
    this.cleanPayment();
  },

};
</script>

