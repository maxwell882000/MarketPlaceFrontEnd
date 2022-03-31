<template>

    <section class="container">
      <Badge class="badges" :path="path"></Badge>
      <h4 class="my-3">{{ name }}</h4>
      <header-product></header-product>
    </section>
    <section class="container">
      <div class="row cols">
        <div class="col-lg-9">
          <div class="product-content">
            <pictures-part class="pictures"></pictures-part>
            <div class="w-100">
              <color-component button="color-btn"></color-component>
              <select-component v-for="(component, index) in selectComponent"
                                :key="'select_com_ ' + index" :param="component" :index="index">
              </select-component>
              <shop-product>
              </shop-product>
            </div>
          </div>
          <about-product></about-product>
        </div>
        <div class="col-lg-3">
          <installment-product></installment-product>
          <!--          <delivery-product></delivery-product>-->
        </div>
      </div>
    </section>
    <comments/>

</template>
<script>
import PicturesPart from "../../components/item/PicturesPart.vue";
import SelectComponent from "@/components/product/selectComponent";
import HeaderProduct from "@/components/product/headerProduct";
import ColorComponent from "@/components/product/colorComponent";
import ShopProduct from "@/components/product/shopProduct";
import AboutProduct from "@/components/product/aboutProduct";
import InstallmentProduct from "@/components/product/installmentProduct";
import {mapActions, mapGetters} from "vuex";
import Comments from "@/components/product/comment/comments";
import Badge from "@/components/shared/Badge";

export default {
  components: {
    Badge,
    Comments,
    InstallmentProduct,
    AboutProduct, ShopProduct, ColorComponent, HeaderProduct, SelectComponent, PicturesPart
  },
  name: "Item",
  data() {
    return {
      itemInfo: {
        name: "Смартфон Apple iPhone XR",
        rating: 4.6,
        reviews: 86,
        price: "2 898 000 сум",
        oldPrice: "3 071 880 сум", // если нет старой цены, то не пишем старую цену
      },
      chosenColorIndex: 0,
      chosenParams: [0],
    };
  },
  computed: {
    ...mapGetters({
      selectComponent: "productModule/selectComponent",
      path: "productModule/path",
      name: "productModule/name",
    }),
  },
  methods: {
    ...mapActions({
      loadProduct: "productModule/loadProduct"
    }),
    setSelectOption(index) {
      console.log(index);
    }
  },

};
</script>

