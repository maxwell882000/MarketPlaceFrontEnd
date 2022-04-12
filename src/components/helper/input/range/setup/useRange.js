import {ref, watch} from "vue";
import useDebounce from "@/components/helper/debounce/useDebounce";

export default function (props, emits) {

    const value = ref(props.modelValue);
    const {debounce} = useDebounce();
    watch(() => props.modelValue, (val) => {
        value.value = val;
    });

    function checkAndSendValue() {
        if (props.max < value.value)
            value.value = parseFloat(props.max.toFixed(2));
        else if (props.min > value.value)
            value.value = parseFloat(props.min.toFixed(2));
        emits('update:modelValue', value.value);
    }

    watch(() => value.value, (val) => {
        if (parseFloat(props.max.toFixed(2)) < val || parseFloat(props.min.toFixed(2)) > val)
            debounce(checkAndSendValue, 400);
        else
            emits('update:modelValue', val);
    });
    return {
        value: value,
        ...props
    }
}