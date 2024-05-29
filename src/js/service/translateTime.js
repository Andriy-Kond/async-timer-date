import { pad, addLeadingZero } from "./pad.js";

// - takes time in ms
// - return obj with hours, mins, secs
export function translateTime(time) {
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)), 2);
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)), 2);
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000), 2);
  const msecs = pad(Math.floor((time % 1000) / 10), 2);

  return { hours, mins, secs, msecs };
}

// ^ Alternative function:
export function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day)); // Remaining days
  const hours = addLeadingZero(Math.floor((ms % day) / hour)); // Remaining hours
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute)); // Remaining minutes
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second)); // Remaining seconds

  return { days, hours, minutes, seconds };
}
// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
