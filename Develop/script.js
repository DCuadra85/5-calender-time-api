// $(document).ready(function() {
    loadStorage();
    console.log(loadStorage)

  
//.replace(/['"]+/g, '') may need this for loadstorage to work correctly.
    localStorage.setItem('hello', 'world');
    localStorage.getItem('hello');
    

    function loadStorage(){
        $('#text0').append(localStorage.getItem('8am'));
        $('#text1').append(localStorage.getItem('9am'));
        $('#text2').append(localStorage.getItem('10am'));
        $('#text3').append(localStorage.getItem('11am'));
        $('#text4').append(localStorage.getItem('12pm'));
        $('#text5').append(localStorage.getItem('1pm'));
        $('#text6').append(localStorage.getItem('2pm'));
        $('#text7').append(localStorage.getItem('3pm'));
        $('#text8').append(localStorage.getItem('4pm'));
        $('#text9').append(localStorage.getItem('5pm'));
        $('#text10').append(localStorage.getItem('6pm'));
        $('#text11').append(localStorage.getItem('7pm'));
        $('#text12').append(localStorage.getItem('8pm'));
    }
    

    // console.log($('#text0').val())
    $("#saveButton0").on("click", function(){
        var form0 = ($("#text0").val());
        localStorage.setItem('8am', JSON.stringify(form0));
        console.log(form0)
    })

    $("#saveButton1").on("click", function(){
        var form1 = $("#text1").val();
        localStorage.setItem('9am', JSON.stringify(form1));
    })

    $("#saveButton2").on("click", function(){
        var form2 = $("#text2").val();
        localStorage.setItem('10am', JSON.stringify(form2));
    })
    $("#saveButton3").on("click", function(){
        var form3 = $("#text3").val();
        localStorage.setItem('11am', JSON.stringify(form3));
    })

    $("#saveButton4").on("click", function(){
        var form4 = $("#text4").val();
        localStorage.setItem('12pm', JSON.stringify(form4));
    })

    $("#saveButton5").on("click", function(){
        var form5 = $("#text5").val();
        localStorage.setItem('1pm', JSON.stringify(form5));
    })
    $("#saveButton6").on("click", function(){
        var form6 = $("#text6").val();
        localStorage.setItem('2pm', JSON.stringify(form6));
    })

    $("#saveButton7").on("click", function(){
        var form7 = $("#text7").val();
        localStorage.setItem('3pm', JSON.stringify(form7));
    })

    $("#saveButton8").on("click", function(){
        var form8 = $("#text8").val();
        localStorage.setItem('4pm', JSON.stringify(form8));
    })
    $("#saveButton9").on("click", function(){
        var form9 = $("#text9").val();
        localStorage.setItem('5pm', JSON.stringify(form9));
    })

    $("#saveButton10").on("click", function(){
        var form10 = $("#text10").val();
        localStorage.setItem('6pm', JSON.stringify(form10));
    })

    $("#saveButton11").on("click", function(){
        var form11 = $("#text11").val();
        localStorage.setItem('7pm', JSON.stringify(form11));
    })

    $("#saveButton12").on("click", function(){
        var form12 = $("#text12").val();
        localStorage.setItem('8pm', JSON.stringify(form12));
    })
})

var dateTime = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM', '8 PM'];
// console.log(dateTime);
var timeSequence = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// var timeSequenceString = ['8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8 pm']
var arrayValue = [0,1,2,3,4,5,6,7,8,9,10,11,12,13]

var dateToday = moment().format("dddd, MMM Do ");
// console.log(dateToday, "today's date test")
$('#currentDay').append(dateToday);

var momentTime = moment().format('HH');
console.log(momentTime);

    var timeNumber = timeSequence.join()
    console.log(timeNumber)
    console.log(momentTime)


    function calendarDisplay() {  

    for(var i = 0; i < timeSequence.length; i++){
        
        if (timeSequence[i] < momentTime) {
            // console.log(timeNumber)
            // console.log(momentTime)
            $('.container').append(`
            
            <div id = "mod${arrayValue[i]}" class = "row">
            <div class = "hour col-1">${dateTime[i]}</div>
            <div class = "past pl-0 pr-0 col-8"><textarea id = "text${arrayValue[i]}">test</textarea></div>
            <button id = "saveButton${arrayValue[i]}" class = "saveBtn col-1"></button>
                
            </div>
           
            `);
            console.log($('#text0').val())
          } else if (timeSequence[i] > momentTime) {
            // console.log(timeNumber)
            // console.log(momentTime)
            $('.container').append(`
                            
                <div id = "mod${arrayValue[i]}" class = "row">
                <div class = "hour col-1">${dateTime[i]}</div>
                <div class = "future pl-0 pr-0 col-8"><textarea id = "text${arrayValue[i]}"></textarea></div>
                <button id = "saveButton${arrayValue[i]}" class = "saveBtn col-1"></button>
                
            </div>
          
            `);
          } else {
            // console.log(timeNumber)
            // console.log(momentTime)
            $('.container').append(`
           
                <div id = "mod${arrayValue[i]}" class = "row">
                <div class = "hour col-1">${dateTime[i]}</div>
                <div class = "present pl-0 pr-0 col-8"><textarea class = id = "text${arrayValue[i]}"></textarea></div>
                <button id = "saveButton${arrayValue[i]}" class = "saveBtn col-1"></button>
            
            </div>
            
            `);
          }
        // console.log(timeNumber)
        // console.log(momentTime)
    }
}



// $("saveBtn1").on("click", function(){
//     var 
// })



// function pageOpen(){
//     for (var i = 0; i < textarea.length; i++){
//         container.push(localStorage.getItem(i));
//         textarea[i].value = container[i]
//     }
// }

// $('.saveBtn').on('click', function(){
//     var btnSave = arrayValue[i];
//     var textSave = textarea[btnSave].value;

//     localStorage.setItem(btnSave, textSave)
// })


calendarDisplay()
// pageOpen();

// document.getElementsByClassName('fas fa-save').addEventListener('click', function(){
//     console.log(this)
// })

// $(".fas fa-save").on("click", function(){
//     console.log(this)
    
//     // var btnSave = this.value;


//     // var textSave = textarea[i]
//     // localStorage.setItem(btnSave, )
// })



// Store
// localStorage.setItem("lastname", "Smith");
// // Retrieve
// document.getElementById("result").innerHTML = localStorage.getItem("lastname");

// //syntax
// window.localStorage

// //syntax for saving data to localstorage
// localStorage.setItem("key", "value");

//Syntax for READING data from localStorage:
//var lastname = localStorage.getItem("key");

//Syntax for REMOVING data from localStorage:
//localStorage.removeItem("key");



// if (localStorage[".storage"]){
//     var storage =
// }

// var saveButton = localStorage.setItem()




//date time array, append to bootstrap date time

// No longer need switch case

// function dateTimetoString(dateTime) {
//     switch(dateTime[]) {
//       case '12 AM': return 0;
//       case '1 AM': return 1;
//       case '2 AM': return 2;
//       case '3 AM': return 3;
//       case "4 AM": return 4;
//       case '5 AM': return 5;
//       case '6 AM': return 6;
//       case '7 AM': return 7;
//       case "8 AM": return 8;
//       case "9 AM": return 9;
//       case "10 AM": return 10;
//       case "11 AM": return 11;
//       case "12 PM": return 12;
//       case "1 PM": return 13;
//       case "2 PM": return 14;
//       case "3 PM": return 15;
//       case "4 PM": return 16;
//       case "5 PM": return 17;
//       case "6 PM": return 18;
//       case "7 PM": return 19;
//       }
      
    //   console.log(dateTimetoString)
//   }

    // var timeString = $('.hour').text();
    // var timeNumber = dateTimetoString(timeString);

// '12 AM', '1 AM', '2 AM', '3 AM', '4 AM',
// '1','2','3','4',
// '1','2','3','4','5', '6', '7', 
// '12 AM', '1 AM', '2 AM', '3 AM', '4 AM','5 AM', '6 AM', '7 AM', 