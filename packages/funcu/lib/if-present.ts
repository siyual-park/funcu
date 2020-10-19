function ifPresent<T, R>(
  receiver: T,
  block: (receiver: Exclude<T, null & undefined>) => R
): R;
function ifPresent<T, R>(
  receiver: null,
  block: (receiver: Exclude<T, null & undefined>) => R
): null;
function ifPresent<T, R>(
  receiver: undefined,
  block: (receiver: Exclude<T, null & undefined>) => R
): undefined;

function ifPresent<T, R>(
  receiver: T | null | undefined,
  block: (receiver: Exclude<T, null & undefined>) => R
): R | null | undefined {
  if (receiver === null) return null;
  if (receiver === undefined) return undefined;
  return block(receiver);
}

export default ifPresent;
