<template>
  <div><p class="sub_header"> {{ category.name }}</p></div>
  <div v-for="(item, index) in category.children.slice(0,5)"
       :key="'category_sub_child_' + index + 'slug_' + item.slug">
    <p class="elements"> {{ item.name }}</p>
  </div>
  <b-collapse :id="'text_collapse_' + category.slug">
    <router-link to="">
      <p v-for="(item, index) in category.children.slice(5)"
         :key="'category_sub_child_' + index + 'slug_' + item.slug" class="elements">
        {{ item.name }}</p>
    </router-link>
  </b-collapse>
  <p v-if="category.children.length > 5" @click="show = !show" v-b-toggle="'text_collapse_' + category.slug"
     class="elements link">Показать еще
    <b-icon :icon="show ? 'chevron-up' : 'chevron-down'"></b-icon>
  </p>
</template>
<script>
export default {
  props: {
    category: Object,
  }
}
</script>