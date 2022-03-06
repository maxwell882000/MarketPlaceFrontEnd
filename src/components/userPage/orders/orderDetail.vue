<template>
  <p v-b-toggle="'data_about_product'" class="bold pointer" @click="show = !show"> Данные доставки
    <arrow-move class="mx-3" show-class="up" close-class="down" :is-show="show"></arrow-move>
  </p>
  <b-collapse :model-value="initial" id="data_about_product">
    <b-row>
      <data-about-product :header="'Дата оформления'" :data="'Data about this staff'">
        <clock></clock>
      </data-about-product>
      <data-about-product :header="'Адрес доставки'" :data="'Data about this staff'">
        <location></location>
      </data-about-product>
      <data-about-product :header="'Дата доставки'" :data="'Data about this staff'">
        <truck></truck>
      </data-about-product>
      <data-about-product :header="'Способ оплаты'" :data="'Data about this staff'">
        <card></card>
      </data-about-product>
      <data-about-product :header="'Покупатель'" :data="'Data about this staff'">
        <profile></profile>
      </data-about-product>
      <data-about-product :header="'Комментарий'" :data="'Data about this staff'">
        <comment-icon></comment-icon>
      </data-about-product>
    </b-row>
  </b-collapse>
</template>
<script>
import DataAboutProduct from "@/components/userPage/orders/dataAboutProduct";
import Clock from "@/components/icons/clock";
import Location from "@/components/icons/location";
import Truck from "@/components/icons/truck";
import Card from "@/components/icons/card";
import Profile from "@/components/icons/profile";
import CommentIcon from "@/components/icons/commentIcon";
import ArrowMove from "@/components/icons/arrowMove";

export default {
  components: {ArrowMove, CommentIcon, Profile, Card, Truck, Location, Clock, DataAboutProduct},
  props: {
    initial: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      show: this.initial
    }
  }
}
</script>
<style>
p {
  padding: 0;
  margin: 0;
}
</style>