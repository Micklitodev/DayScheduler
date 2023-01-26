$(document).ready(function(){

var buttonEl = $(".btn");

$(function () {
      buttonEl.on("click", function () {
      var check = $(this).parent()
      var check2 = check.children().eq(1).val()
      localStorage.setItem('hr1', check2)

      console.log(localStorage.getItem('hr1'))

        $(this).css('background-color', 'red');
      });
    }); 

// var hour9 = $("#hour-9");
// var hour10 = $("#hour-10");
// var hour11 = $("#hour-11");

// var currentHour = dayjs().format("HH a");
// console.log(currentHour);

// if (currentHour.includes('pm')) {
//   if (currentHour > 9) {
//     hour9.attr("class", "row time-block past");
//   } else if ((currentHour = 9)) {
//     hour9.attr("class", "row time-block present");
//   } else if (currentHour < 9) {
//     hour9.attr("class", "row time-block future");
//   }

//   if (currentHour > 10) {
//     hour10.attr("class", "row time-block past");
//   } else if ((currentHour = 10)) {
//     hour10.attr("class", "row time-block present");
//   } else if (currentHour < 10) {
//     hour10.attr("class", "row time-block future");
//   }

//   if (currentHour > 11) {
//     hour11.attr("class", "row time-block past");
//   } else if ((currentHour = 11)) {
//     hour11.attr("class", "row time-block present");
//   } else if (currentHour < 11) {
//     hour11.attr("class", "row time-block future");
//   }
// }


//    $('#hour-9').text(localStorage.getItem(''));


})

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//





// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?
//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//
// TODO: Add code to display the current date in the header of the page.
