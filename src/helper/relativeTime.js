import timeago from "timeago.js";

const second = 1e3;
const minute = 6e4;
const hour = 36e5;
const day = 864e5;
const monthNames = ["January", "February", "March",
  "April", "May", "June", "July", "August", "September",
  "October", "November", "December"];
// const week = 6048e5;
// const month = 2592e6;

function defineGetter(obj, prop, get) {
  Object.defineProperty(obj, prop, { get });
}

function defineCachedGetter(obj, prop, get) {
  defineGetter(obj, prop, function () {
    if (!this._[prop]) {
      this._[prop] = get.call(this);
    }
    return this._[prop];
  });
}

function startOf(date, unit) {
  const dateResult = new Date(date.getTime());
  switch (unit) {
    default:
      break;
    case "year":
      dateResult.setMonth(0);
    // falls through
    case "month":
      dateResult.setDate(1);
    // falls through
    case "day":
      dateResult.setHours(0);
    // falls through
    case "hour":
      dateResult.setMinutes(0);
    // falls through
    case "minute":
      dateResult.setSeconds(0);
    // falls through
    case "second":
      dateResult.setMilliseconds(0);
  }
  return dateResult;
}

function formatFunc(singular, plural) {
  return v => (`${Math.abs(v)} ${Math.abs(v) > 1 ? plural : singular} ${v < 0 ? "ago" : ""}`);
}

class RelativeTime {
  constructor() {
    this.formatters = {
      second: formatFunc("second", "seconds"),
      minute: formatFunc("minute", "minutes"),
      hour: formatFunc("hour", "hours"),
      day: formatFunc("day", "days"),
      month: formatFunc("month", "months"),
      year: formatFunc("year", "years"),
    };
  }

  toLongDate(time) { // eslint-disable-line
    let _date = time;
    if (typeof _date !== "object") {
      _date = new Date(_date);
    }
    const currDate = _date.getDate();
    const currMonth = _date.getMonth();
    const currYear = _date.getFullYear();
    return `${monthNames[currMonth]} ${currDate}, ${currYear}`;
  }

  formatTimeAgo(time) {
    let _date = time;
    if (typeof _date !== "object") {
      _date = new Date(_date);
    }
    // const now = new Date();
    // const deltaTime = Date.now() - _date.getTime();
    // if (deltaTime < 24 * 60 * 60 * 1000) {
    //   if (now.getDate() === _date.getDate()) {
    //     return "today";
    //   }
    //   return "yesterday";
    // }
    // return this.format(_date);
    let displayTime = "";
    const deltaTime = Date.now() - _date.getTime();
    if (deltaTime < 7 * 24 * 60 * 60 * 1000) {
      displayTime = timeago().format(_date.getTime());
    } else {
      displayTime = this.toLongDate(_date.getTime());
    }
    return displayTime;
  }

  format(date, { unit = "best-fit" } = {}) {
    let _date = date;
    if (typeof _date !== "object") {
      _date = new Date(_date);
    }
    // console.log(typeof _date);
    const formatters = this.formatters;
    const now = new Date();
    const diff = {
      _: {},
      ms: _date.getTime() - now.getTime(),
      years: _date.getFullYear() - now.getFullYear(),
    };
    const round = Math[diff.ms > 0 ? "floor" : "ceil"];

    defineCachedGetter(diff, "months", function () {
      return (this.years * 12) + (_date.getMonth() - now.getMonth());
    });
    defineCachedGetter(diff, "days", () =>
      round((startOf(_date, "day") - startOf(now, "day")) / day),
    );
    defineCachedGetter(diff, "hours", () =>
      round((startOf(_date, "hour") - startOf(now, "hour")) / hour),
    );
    defineCachedGetter(diff, "minutes", () =>
      round((startOf(_date, "minute") - startOf(now, "minute")) / minute),
    );
    defineCachedGetter(diff, "seconds", () =>
      round((startOf(_date, "second") - startOf(now, "second")) / second),
    );

    const absDiff = {
      _: {},
    };

    defineGetter(absDiff, "years", () => Math.abs(diff.years));
    defineGetter(absDiff, "months", () => Math.abs(diff.months));
    defineGetter(absDiff, "days", () => Math.abs(diff.days));
    defineGetter(absDiff, "hours", () => Math.abs(diff.hours));
    defineGetter(absDiff, "minutes", () => Math.abs(diff.minutes));
    defineGetter(absDiff, "seconds", () => Math.abs(diff.seconds));
    let _unit = unit;
    if (_unit === "best-fit") {
      _unit = RelativeTime.bestFit(absDiff);
    }

    switch (_unit) {
      case "year":
        return formatters.year(diff.years);
      case "month":
        return formatters.month(diff.months);
      // case "week": return formatters.week(diff.weeks);
      case "day":
        return formatters.day(diff.days);
      case "hour":
        return formatters.hour(diff.hours);
      case "minute":
        return formatters.minute(diff.minutes);
      default:
        return formatters.second(diff.seconds);
    }
  }
}

RelativeTime.bestFit = function (absDiff) {
  const threshold = this.threshold;
  switch (true) {
    case absDiff.years > 0 && absDiff.months > threshold.month:
      return "year";
    case absDiff.months > 0 && absDiff.days > threshold.day:
      return "month";
    // case absDiff.months > 0 && absDiff.weeks > threshold.week: return "month";
    // case absDiff.weeks > 0 && absDiff.days > threshold.day: return "week";
    case absDiff.days > 0 && absDiff.hours > threshold.hour:
      return "day";
    case absDiff.hours > 0 && absDiff.minutes > threshold.minute:
      return "hour";
    case absDiff.minutes > 0 && absDiff.seconds > threshold.second:
      return "minute";
    default:
      return "second";
  }
};

RelativeTime.threshold = {
  month: 2, // at least 2 months before using year.
//   week: 4, // at least 4 weeks before using month.
  day: 6, // at least 6 days before using month.
  hour: 6, // at least 6 hours before using day.
  minute: 59, // at least 59 minutes before using hour.
  second: 59, // at least 59 seconds before using minute.
};

export default new RelativeTime();
