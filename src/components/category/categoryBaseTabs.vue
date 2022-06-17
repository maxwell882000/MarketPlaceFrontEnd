<template>
  <div class="mb-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h5 class="category-sub">{{ name }}</h5>
      </div>
      <div>
        <router-link :to="link" class="remove-link">
          <b-button variant="link" class="text-nowrap decoration-none text-sm">
            Смотреть все
            <b-icon icon="arrow-right"/>
          </b-button>
        </router-link>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: ['name', 'link']
}
</script>
<style scoped lang="scss">
.category-sub {
  font-size: 24px;
  line-height: 29px;
}
</style>