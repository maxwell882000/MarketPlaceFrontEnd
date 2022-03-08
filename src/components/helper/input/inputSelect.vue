<template>
  <div class="form-check d-flex ">
    <input class="form-check-input pointer" type="checkbox" value="" :id="labelId">
    <slot name="prefix">
      <!--      <span style="height: 1.2em ; width: 1.2em; background-color: red; border-radius:50%"></span>-->
    </slot>
    <slot>
    </slot>
  </div>
</template>
<script>

export default {
  props: ['helperText', "labelId"]
}
</script>
<style scoped>
.form-check {
  font-size: 1.2rem;

}

span {
  line-height: normal;
  margin-right: 10px;
}

.form-check-input {
  border-color: var(--gray400);
  width: 1.2em;
  height: 1.2em;
  margin-right: 10px;
}
</style>