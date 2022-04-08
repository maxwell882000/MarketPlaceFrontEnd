import {computed, ref} from "vue";

export default function (props) {
    const index = ref(0);
    const sliderValues = computed({
        get: () => {
            return index.value;
        },
        set: (val) => {
            index.value = val;
        }
    });
    const input = computed({
        get: () => {
            try {
                console.log(index.value);
                console.log(props.values[index.value - 1]);
                return props.values[index.value - 1];
            } catch (e) {
                return 0;
            }
        },
        set: () => {

        }
    })
    return {
        sliderValues: sliderValues,
        inputValue: input
    }
}