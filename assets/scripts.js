$(document).ready(function() {

    var currentFormattedTime = moment().format('MMMM D, YYYY, dddd h:mm:ss a');
    $("#currentDay").text(currentFormattedTime);
    
    var goldenTime = moment().hour();
    $(".time-block").each(function(index,timeBlock) {
        var hour = parseInt($(timeBlock).attr("hour"));
        if (hour < goldenTime) {
            $(timeBlock).addClass("past");
        } else if (hour === goldenTime) {
            $(timeBlock).addClass("present");
        }else if (hour > goldenTime) {
            $(timeBlock).addClass("future");
        }
    });

    
   
});