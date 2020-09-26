var dateTime = ['5 AM', '6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'];
// console.log(dateTime);

var dateToday = moment().format("dddd, MMM Do");
// console.log(dateToday, "today's date test")
$('#currentDay').append(dateToday);

var momentTime = moment().format('HH');
// console.log(momentTime);

function dateTimetoString(dateTime) {
    switch(dateTime) {
      case '5 AM': return 5;
      case '6 AM': return 6;
      case '7 AM': return 7;
      case "8 AM": return 8;
      case "9 AM": return 9;
      case "10 AM": return 10;
      case "11 AM": return 11;
      case "12 PM": return 12;
      case "1 PM": return 13;
      case "2 PM": return 14;
      case "3 PM": return 15;
      case "4 PM": return 16;
      case "5 PM": return 17;
      case "6 PM": return 18;
      case "7 PM": return 19;
      }
      
      console.log(dateTimetoString)
  }

    var timeNumber = dateTime.join().split().toString()
    console.log(timeNumber)
    console.log(momentTime)
    // var timeString = $('.hour').text();
    // var timeNumber = dateTimetoString(timeString);



    function calendarDisplay() {  

    for(var i = 0; i < dateTime.length; i++){

        
        if (timeNumber > momentTime) {
            $('.container').append(`
            <div class= "row">
            <div class = "hour col-1">${dateTime[i]}</div>
            <div class = "past pl-0 pr-0 col-8"><textarea></textarea></div>
            <div class = "saveBtn col-1"></div>
            </div>
            `);
          } else if (timeNumber < momentTime) {
            $('.container').append(`
            <div class= "row">
            <div class = "hour col-1">${dateTime[i]}</div>
            <div class = "future pl-0 pr-0 col-8"><textarea></textarea></div>
            <div class = "saveBtn col-1"></div>
            </div>
            `);
          } else {
            $('.container').append(`
            <div class= "row">
            <div class = "hour col-1">${dateTime[i]}</div>
            <div class = "present pl-0 pr-0 col-8"><textarea></textarea></div>
            <div class = "saveBtn col-1"></div>
            </div>
            `);
          }
        
    }



}



// var saveButton = localStorage.setItem()

calendarDisplay()
//date time array, append to bootstrap date time
