document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("Form").addEventListener("submit", function (e) {

        e.preventDefault();

        const selectedDate = document.getElementById("datepicker").value;
        const selectedTime = document.getElementById("timepicker").value;

        const selectedDateTime = new Date(selectedDate + " " + selectedTime);
        const unixTimestamp = Math.floor(selectedDateTime.getTime() / 1000);

        document.getElementById("timestamp").textContent = unixTimestamp;

        const formattedTimestamp = `<t:${unixTimestamp}:F>`;
        document.getElementById("formattedTimestamp").value = formattedTimestamp;
    });
});

function copyToClipboard() {
    const formattedTimestampField = document.getElementById("formattedTimestamp");
    formattedTimestampField.select();
    document.execCommand("copy");
}
