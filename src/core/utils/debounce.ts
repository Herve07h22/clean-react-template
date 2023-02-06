export function debounce(timeout: number, cancelDebounce?: CallableFunction) {
  // store timeout value for cancel the timeout
  let timeoutRef: ReturnType<typeof setTimeout> | null = null;

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const original = descriptor.value;

    descriptor.value = function debounce(...args: unknown[]) {
      timeoutRef && clearTimeout(timeoutRef);
      timeoutRef = setTimeout(() => {
        original.apply(this, args);
      }, timeout);
      cancelDebounce &&
        Object.defineProperty(debounce, "cancelDebounce", {
          value: function () {
            timeoutRef && clearTimeout(timeoutRef);
          },
        });
    };
    return descriptor;
  };
}

export const wait = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));
