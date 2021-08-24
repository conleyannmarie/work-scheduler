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

    $(".saveBtn").on("click", function(event) {
        //get the old data
        var oldData = JSON.parse(localStorage.getItem("data")) || [];
        //ge the hour id
        var id = $(event.target).closest(".time-block").attr("hour");
        //get the text
        var text = $(event.target).closest(".time-block").find(".description").val();
        //make data entry
        var dataEntry = {
            id: id,
            text: text
        }
                //update the old data
                oldData.push(dataEntry);
                //overwrite the local storage
                localStorage.setItem("data",JSON.stringify(oldData));
            });
        
            var data = JSON.parse(localStorage.getItem("data")) || [];
            data.forEach(function(datum) {
                var query = `[hour='${datum.id}']`;
                $(query).find(".description").val(datum.text);
            });
           

});