<template>
  <div class="d-flex p-2 justify-content-between align-items-center">
    <div>
      <span class="text-sm">{{ name }}</span>
    </div>
    <div>
      <input-toggle @toggled="toggle"></input-toggle>
    </div>
  </div>
  <hr>
</template>
<script>
import InputToggle from "@/components/helper/input/inputToggle";
import {useStore} from "vuex";

export default {
  props: ['name', 'prefix'],
  components: {InputToggle},
  setup(props) {
    const store = useStore();
    const addFilter = (val) => store.commit("productFilterByModule/addFilterBy", val);
    const getProduct = () => store.dispatch("productFilterByModule/getProducts", 1);

    function toggle(val) {
      console.log("get Product" + props.prefix + "val" + val);
      addFilter({key: props.prefix, item: val});
      getProduct();
    }

    return {
      toggle: toggle
    }
  }
}
</script>