<template>
  <b-col :cols="column">
    <router-link to=""><p class="sub_header"> {{ category.name }}</p></router-link>
    <router-link to="" v-for="(item, index) in category.children.slice(0,5)"
                 :key="'category_sub_child_' + index + 'slug_' + item.slug">
      <p class="elements"> {{ item.name }}</p>
    </router-link>
    <b-collapse :id="'text_collapse_' + category.slug">
      <p v-for="(item, index) in category.children.slice(5)"
         :key="'category_sub_child_' + index + 'slug_' + item.slug" class="elements">
        {{ item.name }}</p>
    </b-collapse>
    <p v-if="category.children.length > 5" @click="show = !show" v-b-toggle="'text_collapse_' + category.slug"
       class="elements link">Показать еще
      <b-icon :icon="show ? 'chevron-up' : 'chevron-down'"></b-icon>
    </p>
  </b-col>
</template>
<script>
export default {
  props: {
    category: {},
    column: {
      type: Number,
      default() {
        return 4;
      }
    },
  },
  data() {
    return {
      show: false
    }
  },
}
</script>
<style scoped>
a {
  color: inherit !important;
  text-decoration: none !important;
}

p {
  margin: 0;
  text-transform: none;
  padding: 0;
  font-style: normal;
}

p:hover {
  color: var(--violet);
}

.link {
  color: var(--violet) !important;
  cursor: pointer;
}

.sub_header {
  font-weight: 600;
  font-size: small;
  margin-bottom: 0.6rem;
}

.elements {
  color: var(--gray);
  font-size: small;
  margin-bottom: 0.2rem;
}
</style>