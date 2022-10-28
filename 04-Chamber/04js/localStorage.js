// Calculate the number of days between two dates

// To set two dates two variables
let lastDate1 = new Date ("06/19/2022");
let todayDate = new Date ("07/30/2022");


/// To calculate the time difference of two dates
let Difference_In_Time = todayDate.getTime () - lastDate1.getTime();

// To calculate the no of days between two dates
let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

// To calculate the final no. of days (result)
document.write("Total number of days since your last visit <br>"
  + lastDate1 + "<br> and <br> "
  + todayDate + " is: <br> "
  + Difference_In_Days);
