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

// click function for save buttons
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