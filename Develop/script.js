
// // $(document).ready(function() {
//     loadStorage();
//     console.log(loadStorage)

  
// //.replace(/['"]+/g, '') may need this for loadstorage to work correctly.
    
    $(".saveBtn").on("click", function () {
    console.log(this);
        var text = $(this).siblings('.textarea').val();
        console.log(text)
        var time = $(this).parent().att('id');
        console.log(time)

        localStorage.setItem(time, text);

    })
    function loadStorage(){
        $('#hour8').append(localStorage.getItem('hour8'));
        $('#hour9').append(localStorage.getItem('hour9'));
        $('#hour10').append(localStorage.getItem('hour10'));
        $('#hour11').append(localStorage.getItem('hour11'));
        $('#hour12').append(localStorage.getItem('hour12'));
        $('#hour13').append(localStorage.getItem('hour13'));
        $('#hour14').append(localStorage.getItem('hour14'));
        $('#hour15').append(localStorage.getItem('hour15'));
        $('#hour16').append(localStorage.getItem('hour16'));
        $('#hour17').append(localStorage.getItem('hour17'));
        $('#hour18').append(localStorage.getItem('hour18'));
        $('#hour19').append(localStorage.getItem('hour19'));
        $('#hour20').append(localStorage.getItem('hour20'));
    }
    

    // console.log($('#text0').val())
    // $("#saveButton0").on("click", function(){
    //     var form0 = ($("#text0").val());
    //     localStorage.setItem('8am', JSON.stringify(form0));
    //     console.log(form0)
    // })

    // $("#saveButton1").on("click", function(){
    //     var form1 = $("#text1").val();
    //     localStorage.setItem('9am', JSON.stringify(form1));
    // })

    // $("#saveButton2").on("click", function(){
    //     var form2 = $("#text2").val();
    //     localStorage.setItem('10am', JSON.stringify(form2));
    // })
    // $("#saveButton3").on("click", function(){
    //     var form3 = $("#text3").val();
    //     localStorage.setItem('11am', JSON.stringify(form3));
    // })

    // $("#saveButton4").on("click", function(){
    //     var form4 = $("#text4").val();
    //     localStorage.setItem('12pm', JSON.stringify(form4));
    // })

    // $("#saveButton5").on("click", function(){
    //     var form5 = $("#text5").val();
    //     localStorage.setItem('1pm', JSON.stringify(form5));
    // })
    // $("#saveButton6").on("click", function(){
    //     var form6 = $("#text6").val();
    //     localStorage.setItem('2pm', JSON.stringify(form6));
    // })

    // $("#saveButton7").on("click", function(){
    //     var form7 = $("#text7").val();
    //     localStorage.setItem('3pm', JSON.stringify(form7));
    // })

    // $("#saveButton8").on("click", function(){
    //     var form8 = $("#text8").val();
    //     localStorage.setItem('4pm', JSON.stringify(form8));
    // })
    // $("#saveButton9").on("click", function(){
    //     var form9 = $("#text9").val();
    //     localStorage.setItem('5pm', JSON.stringify(form9));
    // })

    // $("#saveButton10").on("click", function(){
    //     var form10 = $("#text10").val();
    //     localStorage.setItem('6pm', JSON.stringify(form10));
    // })

    // $("#saveButton11").on("click", function(){
    //     var form11 = $("#text11").val();
    //     localStorage.setItem('7pm', JSON.stringify(form11));
    // })

    // $("#saveButton12").on("click", function(){
    //     var form12 = $("#text12").val();
    //     localStorage.setItem('8pm', JSON.stringify(form12));
    // })
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
