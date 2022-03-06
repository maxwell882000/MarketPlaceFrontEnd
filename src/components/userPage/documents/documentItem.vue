<template>
  <section class="back-white  p-3 border-st mb-3">
    <h6>
      <slot name="title"></slot>
    </h6>
    <div class="d-flex w-70 align-items-center">
      <div style="flex: 1; height: 13rem !important;" class=" border-st p-3 mx-2 back-gray">
        <img class="img-res" src="@/assets/passport.svg"/>
      </div>
      <div class="w-50">
        <div>
          Сделайте фото паспорта. Фотография должна быть четкая, а символы на документе различимые
        </div>
        <div>
          <input type="file" style="display: none" ref="inputGetGallery">
          <ButtonGray @click="$refs.inputGetGallery.click()" class="p-2" :title-style="{color: 'var(--dark)'}"
                      title="Загрузить из галереи"></ButtonGray>
        </div>
        <div>
          <ButtonGray
              :title-style="{color: 'var(--red)'}"
              title="Удалить текущее фото">
          </ButtonGray>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ButtonGray from "@/components/helper/button/buttonGray";

export default {
  components: {ButtonGray}
}
</script>