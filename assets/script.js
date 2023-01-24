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


