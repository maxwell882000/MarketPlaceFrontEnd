<template>

  <section class="container">
    <back-button title="Назад в оформление"></back-button>
    <h5>Верификация аккаунта</h5>
    <div class="w-60">
      <step-header>
        <!--      <hr style="background-color: var(&#45;&#45;gray500); height: 1px; width: 60px">-->
        <div style="background-color: var(--gray500); height: 1px; width: 5rem"></div>
      </step-header>
      <first-step></first-step>
      <second-step>
      </second-step>
      <third-step></third-step>
      <fourth-step></fourth-step>
    </div>
  </section>

</template>
<script>
import BackButton from "@/components/helper/button/backButton";
import StepHeader from "@/components/verification/stepHeader";
import SecondStep from "@/components/verification/secondStep";
import ThirdStep from "@/components/verification/thirdStep";
import FourthStep from "@/components/verification/fourthStep";
import FirstStep from "@/components/verification/firstStep";

export default {
  components: {FirstStep, FourthStep, ThirdStep, SecondStep, StepHeader, BackButton}
}
</script>