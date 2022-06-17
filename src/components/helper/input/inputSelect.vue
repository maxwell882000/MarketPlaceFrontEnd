<template>
  <div>
    <b-form-checkbox v-bind="Object.assign({}, $props, $attrs)">
      <slot></slot>
    </b-form-checkbox>
  </div>

</template>
<script>
export default {}
</script>
<style>
.form-check {
  font-size: 1.2rem;

}

.form-check .form-check-label {
  display: block;
  padding-top: 2px;
}


.form-check-input {
  cursor: pointer;
}

.form-check-input:focus {
  box-shadow: none;
}

.form-check span {
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