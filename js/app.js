import { isToday, isYesterday, formatDiscordTime, isBlank } from "./util.min.js"

let date = new Date("9/9/2022, 3:40:10 AM");
console.log(formatDiscordTime(date)); // will format exactly like discord message date

console.log(isToday(date));
console.log(isYesterday(date));

console.log(isBlank("")); // check white spaces, null, undefined, empty string, empty array


