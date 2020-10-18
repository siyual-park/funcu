function apply<T, R>(receiver: T, block: (receiver: T) => void): T;
function apply<T, R>(
  receiver: T,
  block: (receiver: T) => Promise<void>
): Promise<T>;

function apply<T, R>(
  receiver: T,
  block: (receiver: T) => void | Promise<void>
): T | Promise<T> {
  const result = block(receiver);
  if (result instanceof Promise) {
    return result.then(() => receiver);
  }
  return receiver;
}

export default apply;
