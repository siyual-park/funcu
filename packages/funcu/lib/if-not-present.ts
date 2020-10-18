function ifNotPresent<T, R>(receiver: T, block: () => R): undefined;
function ifNotPresent<T, R>(receiver: null, block: () => R): R;
function ifNotPresent<T, R>(receiver: undefined, block: () => R): R;

function ifNotPresent<T, R>(
  receiver: T | null | undefined,
  block: () => R
): R | undefined {
  if (receiver == null) {
    return block();
  }
  return undefined;
}

export default ifNotPresent;
