/*
Input the timePosted parameter as
{
  year : [year],
  month : [month],
  day : [day],
  hour : [military time hour of the day],
  min : [minute of the hour],
  sec : [second of the minute]
}
*/

function timeSince(timePosted) {
    var dateNow = new Date().toUTCString();
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    var timeNow = {
        v : dateNow,
        year : dateNow.slice(12, 16),
        month : months.indexOf(dateNow.slice(8, 11)) < 10 ? "0" + (months.indexOf(dateNow.slice(8, 11)) + 1) : String(months.indexOf(dateNow.slice(8, 11)) + 1),
        day : dateNow.slice(5, 7),
        hour : dateNow.slice(17, 19),
        min : dateNow.slice(20, 22),
        sec : dateNow.slice(23, 25)
    };


    var timeSince = {
        year : timeNow.year - timePosted.year,
        month : timeNow.month - timePosted.month,
        day : timeNow.day - timePosted.day,
        hour : timeNow.hour - timePosted.hour,
        min : timeNow.min - timePosted.min,
        sec : timeNow.sec - timePosted.sec,
    };


    if(timeSince.month < 0) {
        timeSince.year --;
        timeSince.month += 12;
    }
    if(timeSince.day < 0) {
        timeSince.month--;
        timeSince.day += 30;
    }
    if(timeSince.hour < 0) {
        timeSince.day--;
        timeSince.hour += 24;
    }
    if(timeSince.min < 0) {
        timeSince.hour--;
        timeSince.min += 60;
    }
    if(timeSince.sec < 0) {
        timeSince.min--;
        timeSince.sec += 60;
    }


    var timeSincePosted;


    if(timeSince.year > 0) {
        timeSincePosted = timeSince.year + (timeSince.year === 1 ? " year ago" : " years ago");
    } else {
        if(timeSince.month > 0) {
            timeSincePosted = timeSince.month + (timeSince.month === 1 ? " month ago" : " months ago");
        } else {
            if(timeSince.day > 0) {
                timeSincePosted = timeSince.day + (timeSince.day === 1 ? " day ago" : " days ago");
            } else {
                if(timeSince.hour > 0) {
                    timeSincePosted = timeSince.hour + (timeSince.hour === 1 ? " hour ago" : " hours ago");
                } else {
                    if(timeSince.min > 0) {
                        timeSincePosted = timeSince.min + (timeSince.min === 1 ? " minute ago" : " minutes ago");
                    } else {
                        timeSincePosted = "A few seconds ago";
                    }
                }
            }
        }
    }

    return timeSince;
}
