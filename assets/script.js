console.log("Hello World!");

// moment.js day and hour vars
var theDay = moment().format("dddd, D MMMM YYYY");
var theHour = moment().format("kk");

console.log(theDay + theHour);

// jquery DOM selectors
var saveBtn = $(".saveBtn");
var taskText = $(".description");
var timeDivs = $(".time-div");
var clearBtn = $(".clearBtn");
var currentDay = $("#currentDay");

// set currentDay in header p tag
currentDay.text(theDay);

// setInterval to update theDay
setInterval(function () {
    var clockTime = moment();
    $("#currentDay").text(clockTime.format("dddd, D MMMM YYYY"))
}, 1000);

// click function for save buttons, setting taskTime as key and task as value
saveBtn.click(function () {
    var task = $(this).siblings(".description").val();
    var taskTime = $(this).parent().attr("id").split("-")[1];
    localStorage.setItem(taskTime, task);
});

console.log(localStorage);

// function to clear local storage/clearSchedule
function clearSchedule() {
    localStorage.clear();
};

// clearBtn.click to call clearSchedule
clearBtn.click(clearSchedule);

// for each to target divHour
timeDivs.each(function () {
    var divHour = $(this).attr("id").split("-")[1];
    console.log(divHour);
    // if statement to compare theHour with divHour to add present, future and past CSS to .description
    if (theHour == divHour) {
        $(this).children(".description").addClass("present");
    } else if (theHour < divHour) {
        $(this).children(".description").addClass("future");
    } else if (theHour > divHour) {
        $(this).children(".description").addClass("past");
    }
});

// set .description text as value (task) in localstorage by retrieving using key (taskTime)
$("#hour-09 .description").val(localStorage.getItem("09"));
$("#hour-10 .description").val(localStorage.getItem("10"));
$("#hour-11 .description").val(localStorage.getItem("11"));
$("#hour-12 .description").val(localStorage.getItem("12"));
$("#hour-13 .description").val(localStorage.getItem("13"));
$("#hour-14 .description").val(localStorage.getItem("14"));
$("#hour-15 .description").val(localStorage.getItem("15"));
$("#hour-16 .description").val(localStorage.getItem("16"));
$("#hour-17 .description").val(localStorage.getItem("17"));

