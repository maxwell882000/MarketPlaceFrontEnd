<template>
  <file-step title="Страница паспорта с пропиской"
             decs="Сделайте фото паспорта. Фотография должна быть четкая,а символы на документе различимые"
             asset-image="passport2.svg"
             waiting="passport2"
             next="/4"
             back="/2"
  ></file-step>
</template>
<script>
import FileStep from "@/components/verification/fileStep";

export default {
  components: {FileStep}
}
</script>