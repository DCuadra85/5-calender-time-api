var dateTime = [ '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
console.log(dateTime);

var dateToday = moment().format("dddd, MMM Do");
// console.log(dateToday, "today's date test")
$('#currentDay').append(dateToday);

// function dynamicTime(){

// }

function timeClock() {
    var momentTime = moment().format('HH');
    console.log(momentTime);

    // if ()

    for(var i = 0; i < dateTime.length; i++){
        $('.container').append(`
        <div class= "row">
        <div class = "hour col-1">${dateTime[i]}</div>
        <div class = "present pl-0 pr-0 col-8"><textarea></textarea></div>
        <div class = "saveBtn col-1"></div>
        </div>
        `);
    }
}

// var saveButton = localStorage.setItem()

timeClock()
//date time array, append to bootstrap date time
