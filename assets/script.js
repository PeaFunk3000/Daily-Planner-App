// moment.js day and hour vars
var theDay = moment().format("dddd, D MMMM YYYY");
var theHour = moment().format("kk");

// jquery DOM selectors
var saveBtn = $(".saveBtn");
var taskText = $(".description");
var timeDivs = $(".time-div");
var timeDivs_array = [...timeDivs];
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

// scheduler func to set .description textContent from (task) localstorage by retrieving using getItem key (taskTime)
function scheduler() {
    timeDivs_array.forEach(div => {
        div.querySelector(".description").textContent = (localStorage.getItem(div.id.split("-")[1]));
    });
}

// call scheduler
scheduler();

// function to clear local storage/clearSchedule
function clearSchedule() {
    localStorage.clear();
    scheduler();
};

// clearBtn.click to call clearSchedule
clearBtn.click(clearSchedule);

// for each to target divHour and if statement to compare theHour with divHour to add present, future and past CSS to .description
timeDivs.each(function () {
    var divHour = $(this).attr("id").split("-")[1];
    console.log(divHour);

    if (theHour == divHour) {
        $(this).children(".description").addClass("present");
    } else if (theHour < divHour) {
        $(this).children(".description").addClass("future");
    } else if (theHour > divHour) {
        $(this).children(".description").addClass("past");
    }
});

