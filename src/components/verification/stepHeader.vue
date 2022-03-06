<template>
  <div class="d-flex align-items-center my-4">
    <div class="circle-singleline back-green text-white">
      <!--      <span>57</span>-->
      <b-icon icon="check"/>
    </div>
    <div class="d-flex pl-2 bold align-items-center">
      <div>
        <span>Общая информация    </span>
        <span>

        </span>
      </div>
      <div class="px-2" style="padding-top: 0.4rem">
        <slot></slot>
      </div>
    </div>

  </div>

</template>
<style scoped>
span {
  font-size: 0.74rem;
  line-height: 0.74rem;
}
</style>