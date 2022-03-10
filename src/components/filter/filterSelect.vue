<template>
  <div class="select-container">
    <div class="item-select">
      <input-select>
        <span class="text-sm ">ASUS (13)</span></input-select>
      <input-select><span class="text-sm">Alcatel (20) </span></input-select>
      <input-select>  <span class="text-sm ">Alcatel (20)</span></input-select>
      <input-select>  <span class="text-sm ">Apple (149)</span></input-select>
      <input-select>  <span class="text-sm ">BQ (62)</span></input-select>
      <input-select>  <span class="text-sm ">BQ Mobile (7)</span></input-select>
      <input-select>  <span class="text-sm ">Black Fox (4)</span></input-select>
      <input-select>  <span class="text-sm ">Blackview (17)</span></input-select>
      <input-select>  <span class="text-sm ">ASUS (13)</span></input-select>

    </div>
  </div>
</template>
<script>
import InputSelect from "@/components/helper/input/inputSelect";

export default {
  components: {InputSelect}
}
</script>
<style scoped>
.select-container {
  display: flex;
  width: 100%;
  margin-top: 0.2rem;
  flex-direction: column;
  height: 13rem;
  overflow-y: scroll;
}



.select-container .item-select {
  margin-bottom: 0.2rem;
}
</style>