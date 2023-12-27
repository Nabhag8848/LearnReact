export function validateInput(value) {
  return !value.length || value === "0" ? "" : +value;
}
