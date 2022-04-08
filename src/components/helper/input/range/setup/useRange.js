import {ref, watch} from "vue";

export default function (props, emits) {

    const value = ref(props.modelValue);
    watch(() => props.modelValue, (val) => {
            value.value = val;
    });
    watch(() => value.value, (val) => {
        emits('update:modelValue', val);
    });
    return {
        value: value,
        ...props
    }
}