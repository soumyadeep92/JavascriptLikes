function countingSundays(firstYear, lastYear) {
    function isLeapYear(year) {
      return year % 4 === 0 &&
        (year % 100 !== 0 || year % 400 === 0);
    }
    function daysInMonth(month, year) {
      switch (month) {
        case 0: return 31;
        case 1: return isLeapYear(year) ? 29 : 28;
        case 2: return 31;
        case 3: return 30;
        case 4: return 31;
        case 5: return 30;
        case 6: return 31;
        case 7: return 31;
        case 8: return 30;
        case 9: return 31;
        case 10: return 30;
        case 11: return 31;
      }
    }
    let daysUpToFirst = 0;
    for (let year = 1900; year < firstYear; year++) {
      daysUpToFirst += isLeapYear(year) ? 366 : 365
    }
  
    let firstDay = daysUpToFirst % 7 + 1;
    let firstOfMonth = firstDay;
    let numberOfSundays = 0;
    for (let year = firstYear; year <= lastYear; year++) {
      for (let month = 0; month < 12; month++) {
        if (firstOfMonth % 7 === 0) numberOfSundays++;
        firstOfMonth += daysInMonth(month, year);
      }
    }
  
    return numberOfSundays;
}
console.log(countingSundays(1943, 1946));