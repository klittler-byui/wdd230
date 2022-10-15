
// TUES WED HERO BANNER //

function inviteBanner() {
  let dayOfweek = new Date().getDay();

          let meetNgreet;
            if (dayOfweek != 3){
              meetNgreet = "Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
            }

            else  (dayOfweek == 3){
              meetNgreet = "Join us TONIGHT for the chamber meet and greet at 7:00 p.m.";
            }

            document.getElementById('meetPut').innerHTML = meetNgreet;
          }


var now  = new Date();        // current date/time
var hrs  = now.getHours();    // 0 to 23
var mins = now.getMinutes();
var secs = now.getSeconds();
var weekday = now.getDay();

	if (day == weekday[3]) {
		document.writeln("<h2>Join us TONIGHT for the chamber meet and greet at 7:00 p.m.</h2>");
	}
else if (day != weekday[3]){
		document.writeln("<h2>Meet n' Greet every Wednesday at 7:00 p.m.</h2>");
	}

  const dayOfweek = new Date();



  let meetNgreet = (new Date().getDay());
    if (dayOfweek != 3){
    meetNgreet = "Meet n' Greet every Wednesday at 7:00 p.m.";
    }

    else  (dayOfweek == 3){
    meetNgreet = "Join us TONIGHT for the chamber meet and greet at 7:00 p.m.";
    }

    document.getElementById('meetNgreet').innerHTML = meetNgreet;


    // TUES WED HERO BANNER //
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Our next Meet n' Greet is in 3 days!  Join us Wednesday at 7:00 p.m.";
    break;
  case 1:
    day = "Our next Meet n' Greet is in 2 days!  Join us Wednesday at 7:00 p.m.";
    break;
  case 2:
    day = "Join us TOMORROW for the chamber meet and greet at 7:00 p.m.";
    break;
  case 3:
    day = "Join us TONIGHT for the chamber meet and greet at 7:00 p.m.";
    break;
  case 4:
    day = "Our next Meet n' Greet is in 6 days!  Join us Wednesday at 7:00 p.m.";
    break;
  case 5:
    day = "Our next Meet n' Greet is in 5 days!  Join us Wednesday at 7:00 p.m.";
    break;
  case  6:
    day = "Our next Meet n' Greet is in 4 days!  Join us Wednesday at 7:00 p.m.";
}
document.getElementById("meetNgreet").innerHTML = day;



/////////
function hideGreet() {

  if (dayOfWeek != 1 || dayOfWeek != 2) {
  document.getElementById("meetNgreet").style.display = "hide";
}
