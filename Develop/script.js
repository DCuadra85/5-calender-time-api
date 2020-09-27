
// // $(document).ready(function() {
//     loadStorage();
//     console.log(loadStorage)

  
// //.replace(/['"]+/g, '') may need this for loadstorage to work correctly.
    
    // $(".saveBtn").on("click", function () {
    // console.log(this);
    //     var text = $(this).siblings('.textarea').val();
    //     console.log(text)
    //     var time = $(this).parent().attr('id');
    //     console.log(time)

    //     localStorage.setItem(time, text);

    // })

    
    // console.log($('#text0').val())
    $("#btn1").on("click", function(){
        var showtext0 = ($("#hour8").val());
        localStorage.setItem('8am', JSON.stringify(showtext0));
        console.log(showtext0)
    })

    $("#btn2").on("click", function(){
        var showtext1 = $("#hour9").val();
        localStorage.setItem('9am', JSON.stringify(showtext1));
    })

    $("#btn3").on("click", function(){
        var showtext2 = $("#hour10").val();
        localStorage.setItem('10am', JSON.stringify(showtext2));
    })
    $("#btn4").on("click", function(){
        var showtext3 = $("#hour11").val();
        localStorage.setItem('11am', JSON.stringify(showtext3));
    })

    $("#btn5").on("click", function(){
        var showtext4 = $("#hour12").val();
        localStorage.setItem('12pm', JSON.stringify(showtext4));
    })

    $("#btn6").on("click", function(){
        var showtext5 = $("#hour13").val();
        localStorage.setItem('1pm', JSON.stringify(showtext5));
    })
    $("#btn7").on("click", function(){
        var showtext6 = $("#hour14").val();
        localStorage.setItem('2pm', JSON.stringify(showtext6));
    })

    $("#btn8").on("click", function(){
        var showtext7 = $("#hour15").val();
        localStorage.setItem('3pm', JSON.stringify(showtext7));
    })

    $("#btn9").on("click", function(){
        var showtext8 = $("#hour16").val();
        localStorage.setItem('4pm', JSON.stringify(showtext8));
    })
    $("#btn10").on("click", function(){
        var showtext9 = $("#hour17").val();
        localStorage.setItem('5pm', JSON.stringify(showtext9));
    })

    $("#btn11").on("click", function(){
        var showtext10 = $("#hour18").val();
        localStorage.setItem('6pm', JSON.stringify(showtext10));
    })

    $("#btn12").on("click", function(){
        var showtext11 = $("#hour19").val();
        localStorage.setItem('7pm', JSON.stringify(showtext11));
    })

    $("#btn13").on("click", function(){
        var showtext12 = $("#hour20").val();
        localStorage.setItem('8pm', JSON.stringify(showtext12));
    })


    function loadStorage(){
        $('.textarea8').append(localStorage.getItem('hour8'));
        $('.textarea9').append(localStorage.getItem('hour9'));
        $('.textarea10').append(localStorage.getItem('hour10'));
        $('.textarea11').append(localStorage.getItem('hour11'));
        $('.textarea12').append(localStorage.getItem('hour12'));
        $('.textarea13').append(localStorage.getItem('hour13'));
        $('.textarea14').append(localStorage.getItem('hour14'));
        $('.textarea15').append(localStorage.getItem('hour15'));
        $('.textarea16').append(localStorage.getItem('hour16'));
        $('.textarea17').append(localStorage.getItem('hour17'));
        $('.textarea18').append(localStorage.getItem('hour18'));
        $('.textarea19').append(localStorage.getItem('hour19'));
        $('.textarea20').append(localStorage.getItem('hour20'));
    }
 

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
