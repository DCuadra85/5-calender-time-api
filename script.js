
// // $(document).ready(function() {
//     loadStorage();
//     console.log(loadStorage)

  
// //.replace(/['"]+/g, '') may need this for loadstorage to work correctly.
    
    // $(".saveBtn").on("click", function () {
    // console.log(this);
    //     var text = $(this).siblings('.textarea').val();
    //     console.log(text)
    //     var time = $(this).siblings().attr('id');
    //     console.log(time)

    //     localStorage.setItem(time, (text));

    // })

    
    console.log($('#text0').val())
    $("#btn1").on("click", function(){
        var showtext0 = ($("#hour8").val());
        localStorage.setItem('8am', (showtext0));
        console.log(showtext0)
    })

    $("#btn2").on("click", function(){
        var showtext1 = $("#hour9").val();
        localStorage.setItem('9am', (showtext1));
    })

    $("#btn3").on("click", function(){
        var showtext2 = $("#hour10").val();
        localStorage.setItem('10am', (showtext2));
    })
    $("#btn4").on("click", function(){
        var showtext3 = $("#hour11").val();
        localStorage.setItem('11am', (showtext3));
    })

    $("#btn5").on("click", function(){
        var showtext4 = $("#hour12").val();
        localStorage.setItem('12pm', (showtext4));
    })

    $("#btn6").on("click", function(){
        var showtext5 = $("#hour13").val();
        localStorage.setItem('1pm', (showtext5));
    })
    $("#btn7").on("click", function(){
        var showtext6 = $("#hour14").val();
        localStorage.setItem('2pm', (showtext6));
    })

    $("#btn8").on("click", function(){
        var showtext7 = $("#hour15").val();
        localStorage.setItem('3pm', (showtext7));
    })

    $("#btn9").on("click", function(){
        var showtext8 = $("#hour16").val();
        localStorage.setItem('4pm', (showtext8));
    })
    $("#btn10").on("click", function(){
        var showtext9 = $("#hour17").val();
        localStorage.setItem('5pm', (showtext9));
    })

    $("#btn11").on("click", function(){
        var showtext10 = $("#hour18").val();
        localStorage.setItem('6pm', (showtext10));
    })

    $("#btn12").on("click", function(){
        var showtext11 = $("#hour19").val();
        localStorage.setItem('7pm', (showtext11));
    })

    $("#btn13").on("click", function(){
        var showtext12 = $("#hour20").val();
        localStorage.setItem('8pm', (showtext12));
    })


    function loadStorage(){
        $('#hour8').append(localStorage.getItem('8am'));
        $('#hour9').append(localStorage.getItem('9am'));
        $('#hour10').append(localStorage.getItem('10am'));
        $('#hour11').append(localStorage.getItem('11am'));
        $('#hour12').append(localStorage.getItem('12pm'));
        $('#hour13').append(localStorage.getItem('1pm'));
        $('#hour14').append(localStorage.getItem('2pm'));
        $('#hour15').append(localStorage.getItem('3pm'));
        $('#hour16').append(localStorage.getItem('4pm'));
        $('#hour17').append(localStorage.getItem('5pm'));
        $('#hour18').append(localStorage.getItem('6pm'));
        $('#hour19').append(localStorage.getItem('7pm'));
        $('#hour20').append(localStorage.getItem('8pm'));
    }
    loadStorage()

// })

var dateTime = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
// console.log(dateTime);
var timeSequence = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

var dateToday = moment().format("dddd, MMM Do ");
// console.log(dateToday, "today's date test")
$('#currentDay').append(dateToday);

var momentTime = moment().format('HH');
console.log(momentTime);

    var timeNumber = timeSequence.join()
    console.log(timeNumber)
    console.log(momentTime)


    function calendarDisplay() {  

        $(".timeBlock").each(function () {
            var hourBlock = parseInt($(this).attr('id').split('hour')[1]);
            console.log(hourBlock, momentTime)    
            
            if (hourBlock < momentTime){
                $(this).addClass('past');
                $(this).removeClass('future')
                $(this).removeClass('present')
            } 
            
            else if (hourBlock > momentTime) {
                $(this).removeClass('past');
                $(this).addClass('future');
                $(this).removeClass('present')
            }

            else {
                $(this).removeClass('past');
                $(this).addClass('present');
                $(this).removeClass('future')
            }

        })
    }   


calendarDisplay()
