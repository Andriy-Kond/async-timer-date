// - add 0 if number less than 2 signs
// - return string
export function pad(value, qty) {
  return String(value).padStart(qty, "0");
}
/
// ^ Alternative function
export function addLeadingZero(value) {
  return value.toString().padStart(2, "0");
}
