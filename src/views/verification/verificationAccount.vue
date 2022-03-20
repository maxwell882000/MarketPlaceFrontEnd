<template>
  <section class="container">
    <back-button title="Назад в оформление"></back-button>
    <h5>Верификация аккаунта</h5>
    <div class="row">
      <step-header class="back-blue">
        <template #number>
          <span class="text-sm"> 1 </span>
        </template>
        <div
          style="background-color: var(--gray500); height: 1px; width: 5rem"
        ></div>
      </step-header>
      <step-header class="back-blue">
        <template #number>
          <span class="text-sm"> 2 </span>
        </template>
        <div
          style="background-color: var(--gray500); height: 1px; width: 5rem"
        ></div>
      </step-header>
      <step-header class="back-blue">
        <template #number>
          <span class="text-sm"> 3 </span>
        </template>
        <div
          style="background-color: var(--gray500); height: 1px; width: 5rem"
        ></div>
      </step-header>
      <step-header class="back-blue">
        <template #number>
          <span class="text-sm"> 4 </span>
        </template>
      </step-header>
    </div>
    <div class="row">
      <div class="col col-xl-7 col-lg-8">
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>
<script>
import BackButton from "@/components/helper/button/backButton";
import StepHeader from "@/components/verification/stepHeader";

export default {
  components: { StepHeader, BackButton },
  created() {
    console.log(this.$route.fullPath.split("/").slice(-1)[0]);
  },
};
</script>