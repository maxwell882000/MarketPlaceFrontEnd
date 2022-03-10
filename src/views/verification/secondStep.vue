<template>
  <file-step title="Фото паспорта с фотографией"
             decs="Сделайте фото паспорта. Фотография должна быть четкая,а символы на документе различимые"
             asset-image="passport.svg"
             waiting="passport"
             next="/3"
             back="/1"
  ></file-step>

</template>
<script>
import FileStep from "@/components/verification/fileStep";


export default {
  components: {FileStep}
}
</script>