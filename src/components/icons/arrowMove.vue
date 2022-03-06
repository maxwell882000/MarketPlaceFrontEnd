<template>
  <b-icon :icon="isShow  ? `chevron-${showClass}` : `chevron-${closeClass}`"/>
</template>
<script>
export default {
  props: ['showClass', 'closeClass', 'isShow']
}
</script>