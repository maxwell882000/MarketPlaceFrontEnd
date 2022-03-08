<template>
  <section class="section-container mb-3">
    <h6>Доставка 2 посылок курьером</h6>
    <hr>
    <div class="d-flex">
      <div class="mr-4">
        <location-pin></location-pin>
      </div>
      <div class="w-100">
        <div class="mb-3">
          <span class="bold">Курьером</span>
        </div>
        <div class="mb-3 d-flex w-100 justify-content-between align-items-center">
          <div>
                <span>
            ул. Аккурган, 23А, Ташкент
             </span>
            <br>
            <span class=" text-gray">
            25 дом, 3 подъезд, 2 этаж, 13 квартира
          </span>
            <br>
            <div class="mt-3">
              <span class="text-blue">Изменить способ доставки</span>
            </div>
          </div>
          <div>
            <b-icon icon="chevron-right"/>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import LocationPin from "@/components/icons/locationPin";
export default {
  components: {LocationPin}
}
</script>