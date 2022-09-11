const isToday = (date) => {
   let today = new Date();
   return today.toLocaleString().split(',')[0] == date.toLocaleString().split(',')[0] ? true : false;
}
const isYesterday = (date) => {
   let today = new Date();
   let yesterday = new Date();
   yesterday.setDate(today.getDate() - 1);
   return yesterday.toLocaleString().split(',')[0] == date.toLocaleString().split(',')[0] ? true : false;
}
const formatDiscordTime = (date) => {
   let time = date.toLocaleString().split(',')[1];
   if (isToday(date)) {
      return "Today at" + time.substring(0, time.length - 6) + " " + time.slice(-2);
   } else if (isYesterday(date)) {
      return "Yesterday at" + time.substring(0, time.length - 6) + " " + time.slice(-2);
   } else {
      return date.toLocaleString().split(',')[0];
   }
}
const isBlank = (param) => {
   if (Array.isArray(param)) {
      return param.length === 0 ? true : false;
   } else {
      if (param === null) {
         return true;
      } else if (param === undefined) {
         return true;
      } else if (param.replace(/\s/g, "").length === 0) {
         return true;
      } else {
         return false;
      }
   }
}

export { isToday, isYesterday, formatDiscordTime, isBlank };