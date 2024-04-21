// - add 0 if number less than 2 signs
// - return string
export default function pad(value, qty) {
  return String(value).padStart(qty, "0");
}
