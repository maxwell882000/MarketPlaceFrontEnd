<template>
  <button class="card-button"
          :class="{
           'active' : this.isBasket ,
            'inactive': ! this.isBasket,
            'card-button-text' : !this.isSvg
          }" @click.prevent="clicked">
    <ResponsiveLayout>
      <template #desktop>
        <svg class="svg-class" width="18" height="18" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M9.00494 0C11.6849 0 13.8882 2.10591 14 4.77432H13.9739C13.977 4.85189 13.9621 4.92913 13.9303 5H14.0865C15.3035 5 16.5778 5.84351 17.0888 7.8798L17.1444 8.12007L17.9133 14.3147C18.4666 18.2657 16.305 19.9273 13.3562 19.9977L13.1585 20H4.86853C1.87178 20 -0.437456 18.908 0.0702808 14.5836L0.104905 14.3147L0.882639 8.12007C1.26614 5.92719 2.55361 5.06225 3.79412 5.00326L3.93171 5H4.00989C3.9967 4.92535 3.9967 4.84898 4.00989 4.77432C4.12172 2.10591 6.325 0 9.00494 0ZM6.097 8.32929C5.60889 8.32929 5.21321 8.73655 5.21321 9.23893C5.21321 9.74131 5.60889 10.1486 6.097 10.1486C6.5851 10.1486 6.98079 9.74131 6.98079 9.23893L6.9739 9.12483C6.91936 8.67631 6.54755 8.32929 6.097 8.32929ZM11.8858 8.32929C11.3977 8.32929 11.002 8.73655 11.002 9.23893C11.002 9.74131 11.3977 10.1486 11.8858 10.1486C12.3739 10.1486 12.7696 9.74131 12.7696 9.23893C12.7696 8.73655 12.3739 8.32929 11.8858 8.32929ZM8.96575 1.30238C7.04164 1.30238 5.48184 2.85682 5.48184 4.77432C5.49502 4.84898 5.49502 4.92535 5.48184 5H12.4932C12.4654 4.92794 12.4506 4.85153 12.4497 4.77432C12.4497 2.85682 10.8899 1.30238 8.96575 1.30238Z"
          />
        </svg>
      </template>
      <template #mobile>
        <span v-if="!isSvg">{{ $t("В корзину") }}</span>
        <svg v-else class="svg-class" width="18" height="18" viewBox="0 0 18 20" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M9.00494 0C11.6849 0 13.8882 2.10591 14 4.77432H13.9739C13.977 4.85189 13.9621 4.92913 13.9303 5H14.0865C15.3035 5 16.5778 5.84351 17.0888 7.8798L17.1444 8.12007L17.9133 14.3147C18.4666 18.2657 16.305 19.9273 13.3562 19.9977L13.1585 20H4.86853C1.87178 20 -0.437456 18.908 0.0702808 14.5836L0.104905 14.3147L0.882639 8.12007C1.26614 5.92719 2.55361 5.06225 3.79412 5.00326L3.93171 5H4.00989C3.9967 4.92535 3.9967 4.84898 4.00989 4.77432C4.12172 2.10591 6.325 0 9.00494 0ZM6.097 8.32929C5.60889 8.32929 5.21321 8.73655 5.21321 9.23893C5.21321 9.74131 5.60889 10.1486 6.097 10.1486C6.5851 10.1486 6.98079 9.74131 6.98079 9.23893L6.9739 9.12483C6.91936 8.67631 6.54755 8.32929 6.097 8.32929ZM11.8858 8.32929C11.3977 8.32929 11.002 8.73655 11.002 9.23893C11.002 9.74131 11.3977 10.1486 11.8858 10.1486C12.3739 10.1486 12.7696 9.74131 12.7696 9.23893C12.7696 8.73655 12.3739 8.32929 11.8858 8.32929ZM8.96575 1.30238C7.04164 1.30238 5.48184 2.85682 5.48184 4.77432C5.49502 4.84898 5.49502 4.92535 5.48184 5H12.4932C12.4654 4.92794 12.4506 4.85153 12.4497 4.77432C12.4497 2.85682 10.8899 1.30238 8.96575 1.30238Z"
          />
        </svg>
      </template>
    </ResponsiveLayout>
  </button>
</template>
<script>
import cardClick from "@/components/buttons/cart/methods/cardClick";
import ResponsiveLayout from "@/components/responsive/ResponsiveLayout";
// import cardClick from "@/components/buttons/mixins/cardClick";

export default {
  ...cardClick,
  components: {ResponsiveLayout},
  name: "CartButton"
}
</script>
<style scoped>
.card-button {
  border-radius: 8px;
  border: none;
  /*padding: calc(10px + 0.357rem ) 14px;*/
}

@media (max-width: 991px) {
  .card-button-text {
    border-radius: 2.571rem;
    padding: 0.38rem 0;
    color: white;
  }
}

.card-button span {
  font-size: 0.857rem;
  line-height: 1.071rem;
  font-weight: 600;
}

.inactive:hover {
  background-color: #086BD8;
}


.inactive {
  background-color: var(--gray100);
}


.active:hover {
  background-color: var(--gray100);
}

.active:hover .svg-class path, .active:hover span, .inactive .svg-class path, .inactive span {
  fill: var(--dark);
  color: var(--dark);
}

.active {
  background-color: var(--blue);
}

.active .svg-class path, .active span, .inactive:hover .svg-class path, .inactive:hover span {
  fill: white;
  color: white;
}

</style>