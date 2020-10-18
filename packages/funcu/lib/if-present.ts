function ifPresent<T, R>(receiver: T, block: (receiver: T) => R): R;
function ifPresent<T, R>(receiver: null, block: (receiver: T) => R): null;
function ifPresent<T, R>(
  receiver: undefined,
  block: (receiver: T) => R
): undefined;

function ifPresent<T, R>(
  receiver: T | null | undefined,
  block: (receiver: T) => R
): R | null | undefined {
  if (receiver === null) return null;
  if (receiver === undefined) return undefined;
  return block(receiver);
}

export default ifPresent;
