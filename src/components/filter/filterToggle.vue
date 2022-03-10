<template>
  <div class="d-flex p-2 justify-content-between align-items-center">
    <div>
      <span class="text-sm">{{name}}</span>
    </div>
    <div>
      <input-toggle></input-toggle>
    </div>
  </div>
  <hr>
</template>
<script>
import InputToggle from "@/components/helper/input/inputToggle";

export default {
  props: ['name'],
  components: {InputToggle}
}
</script>