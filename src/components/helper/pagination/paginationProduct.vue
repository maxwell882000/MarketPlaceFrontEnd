<template>
  <div class="mt-3 custom-pagination">
    <b-pagination v-model="currentPage" pills :total-rows="rows"
                  prev-text="Назад"
                  next-text="Вперед"
                  last-number
                  first-number
    ></b-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: 1000,
      perPage: 10,
      currentPage: 5
    }
  }
}
</script>
<style>
.custom-pagination .b-pagination-pills .page-item .page-link {
  border: none;
  border-radius: 0.4em !important;
}

.page-link ,.page-item.disabled .page-link  {
  background-color: transparent;
  color: var(--gray);
}

</style>