function run<R>(block: () => R): R;
function run<T, R>(receiver: T, block: (receiver: T) => R): R;

function run<T, R>(arg1: (() => R) | T, arg2?: (receiver: T) => R): R {
  if (arg2 === undefined) {
    const block = arg1 as () => R;
    return block();
  }
  const receiver = arg1 as T;
  return arg2(receiver);
}

export default run;
