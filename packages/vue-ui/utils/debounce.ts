export function debounce<T extends (..._arguments: any[]) => void>(
  _functions: T,
  delay: number
): (..._arguments: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (..._arguments: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      _functions(..._arguments);
    }, delay);
  };
}

export default debounce;
