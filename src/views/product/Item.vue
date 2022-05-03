<template>

  <section class="container">
    <Badge class="badges" :path="path"></Badge>
    <h4 class="my-3">{{ name }}</h4>
    <header-product></header-product>
  </section>
  <section class="container">
    <b-row class="row cols">
      <b-col cols="12" class="col-xl-9 col-lg-8 col-md-12 col-sm-12 ">
        <div class="product-content">
          <pictures-part class="flex-fill flex-sm-fill flex-md- pictures"></pictures-part>
          <div class="w-100">
            <color-component button="color-btn"></color-component>
            <select-component v-for="(component, index) in selectComponent"
                              :key="'select_com_ ' + index" :param="component" :index="component.id">
            </select-component>
            <shop-product>
            </shop-product>
          </div>
        </div>
        <about-product></about-product>
      </b-col>
      <b-col cols="12" class="col-xl-3 col-lg-4 col-md-12 col-sm-12  mb-4">
        <installment-product></installment-product>
        <!--          <delivery-product></delivery-product>-->
      </b-col>
    </b-row>
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
<style lang="scss">
.product-content {
  background-color: white;
  padding: 24px;
  border-radius: 12px;
  display: flex;

  @media (max-width: 767px) {
    flex-wrap: wrap;
  }

  .pictures {
    width: 50%;
    min-width: 50%;
  }

  .color-select {
    display: flex;
    flex-wrap: wrap;
  }

  .color-btn, .param-option {
    background-color: transparent;
    border: 1px solid #f2f2f2;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-self: center;
    margin: 4px;

    img {
      height: 62px;
      width: 62px;
      left: 9px;
      top: 5px;
      border-radius: 8px;
      object-fit: contain;
    }

    small {
      display: block;
      width: 100%;
      text-align: center;
    }

    &.active {
      border-color: transparent;
      box-shadow: 0 0 0 2px #007aff;
    }
  }

  .param-option {
    padding: 3px 15px;
  }
}

</style>

