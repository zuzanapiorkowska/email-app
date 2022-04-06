export function objToString(obj: any) {
  return Object.entries(obj).reduce((str, [p, val]) => {
    return `${val}`;
  }, "");
}
