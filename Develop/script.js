var dateTime = [ '5am', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
console.log(dateTime);

var dateToday = moment().format("dddd, MMM Do");
console.log(dateToday)
$('#dateDisplay').append(dateToday);

