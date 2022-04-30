<template>
  <div class="mb-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <div>
        <h5>{{ name }}</h5>
      </div>
      <div>
        <router-link :to="link" class="remove-link">
          <b-button variant="link" class="decoration-none text-sm">
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