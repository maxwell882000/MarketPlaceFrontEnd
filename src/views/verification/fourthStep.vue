<template>
  <file-step
      @image-upload="submitForm"
      :initial-image="initialImage"
      title="Селфи с паспортом"
      decs="Разместите главный разворот вашего паспорта рядом с лицом и сделайте селфи.
              Фотография должна быть четкая, а символы на документе различимые "
      asset-image="self_passport.svg"
      waiting="self_passport"
      back="/3"
      :is-full-next-path="isNext"
      :next="isNext ? '': '/4'"
  ></file-step>
</template>
<script setup>
import FileStep from "@/components/verification/fileStep";
import useFileUpload from "@/components/verification/setup/useFileUpload";
import verificationConstant from "@/constants/verification/verificationConstant";

const {getImage, isNext, initialImage} = useFileUpload(verificationConstant.USER_PASSPORT);

function submitForm(url, fileList) {
  getImage(url, fileList);
  if (isNext.value) {
    // open here modal window and go to the next page;
  }
}
</script>