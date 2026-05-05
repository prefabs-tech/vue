import { ref, Ref, watch } from "vue";

let timerId: null | ReturnType<typeof setTimeout> = null;

export function useDebouncedValue<T>(value: T, delay: number): Promise<Ref<T>> {
  const debouncedValue = ref();

  return new Promise((resolve) => {
    watch(
      () => value,
      (newValue) => {
        if (timerId) {
          clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
          debouncedValue.value = newValue;
          resolve(debouncedValue);
        }, delay);
      },
      { immediate: true },
    );
  });
}

export default useDebouncedValue;
