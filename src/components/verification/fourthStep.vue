<template>
  <file-step title="Селфи с паспортом"
             decs="Разместите главный разворот вашего паспорта рядом с лицом и сделайте селфи.
              Фотография должна быть четкая, а символы на документе различимые "
             asset-image="self_passport.svg"
             waiting="self_passport"
  ></file-step>
</template>
<script>
import FileStep from "@/components/verification/fileStep";

export default {
  components: {FileStep}
}
</script>