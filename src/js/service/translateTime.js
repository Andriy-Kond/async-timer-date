import pad from "./pad";

// - takes time in ms
// - return obj with hours, mins, secs
export default function translateTime(time) {
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 2);
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)), 2);
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000), 2);
  const msecs = pad(Math.floor((time % 1000) / 10), 2);

  return { hours, mins, secs, msecs };
}
