document.addEventListener("DOMContentLoaded", function() {
    // Get the current date and time
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
    const currentDay = String(currentDate.getDate()).padStart(2, "0");
    const currentHour = String(currentDate.getHours()).padStart(2, "0");
    const currentMinute = String(currentDate.getMinutes()).padStart(2, "0");

    // Set the default value of selectedDate to the current date and time
    const defaultSelectedDate = `${currentYear}-${currentMonth}-${currentDay}`;
    const defaultSelectedTime = `${currentHour}:${currentMinute}`;
    document.getElementById("datepicker").value = defaultSelectedDate;
    document.getElementById("timepicker").value = defaultSelectedTime;

    document.getElementById("form").addEventListener("submit", function(e) {
        e.preventDefault();
        const selectedDate = document.getElementById("datepicker").value;
        const selectedTime = document.getElementById("timepicker").value;
        const selectedDateTime = new Date(selectedDate + " " + selectedTime);
        const unixTimestamp = Math.floor(selectedDateTime.getTime() / 1000);        
        const formattedTimestamp = `<t:${unixTimestamp}:F>`;
        document.getElementById("formattedTimestamp").textContent = unixTimestamp;
        document.getElementById("formattedTimestamp").value = formattedTimestamp;
    });
});

function CopyToClipboard() {
    const formattedTimestampField = document.getElementById("formattedTimestamp");
    formattedTimestampField.select();
    document.execCommand("copy");
}
