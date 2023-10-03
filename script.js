document.addEventListener("DOMContentLoaded", function () {
	// This function will be executed when the DOM is fully loaded
	console.log("Made by: https://github.com/NewNamesAreHard");

	const currentDate = new Date(); // Create a new JavaScript Date object
	const currentYear = currentDate.getFullYear(); // Extract the current year from the Date object
	const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0"); // Extract the current month from the Date object and ensure it's in two-digit format (01 - 12)
	const currentDay = String(currentDate.getDate()).padStart(2, "0"); // Extract the current day of the month from the Date object and ensure it's in two-digit format (01 - 31)
	const currentHour = String(currentDate.getHours()).padStart(2, "0"); // Extract the current hour from the Date object and ensure it's in two-digit format (00 - 23)
	const currentMinute = String(currentDate.getMinutes()).padStart(2, "0"); // Extract the current minute from the Date object and ensure it's in two-digit format (00 - 59)

	const defaultSelectedDate = `${currentYear}-${currentMonth}-${currentDay}`; // Set the default value of selectedDate to the current date in the format "YYYY-MM-DD"
	const defaultSelectedTime = `${currentHour}:${currentMinute}`; // Set the default value of selectedTime to the current time in the format "HH:MM"
	document.getElementById("datepicker").value = defaultSelectedDate; // Set the value of the datepicker input field to the default date
	document.getElementById("timepicker").value = defaultSelectedTime; // Set the value of the timepicker input field to the default time

	document.getElementById("form").addEventListener("submit", function (e) {
		e.preventDefault(); // Prevent the default form submission behavior (page refresh)
		const selectedDate = document.getElementById("datepicker").value; // Get the selected date value from the datepicker input field
		const selectedTime = document.getElementById("timepicker").value; // Get the selected time value from the timepicker input field
		const selectedDateTime = new Date(selectedDate + " " + selectedTime); // Combine the selected date and time into a single Date object
		const unixTimestamp = Math.floor(selectedDateTime.getTime() / 1000); // Convert the selected date and time into a Unix timestamp (in seconds)
		const formattedTimestamp = `<t:${unixTimestamp}:F>`; // Format the Unix timestamp into a string with a special format ("<t:timestamp:F>")
		document.getElementById("formattedTimestamp").textContent = unixTimestamp; // Set the Unix timestamp as the text content of an HTML element with the id "formattedTimestamp"
		document.getElementById("formattedTimestamp").value = formattedTimestamp; // Set the formatted timestamp as the value of an HTML element with the id "formattedTimestamp"
	});
});

function CopyToClipboard() {
	const formattedTimestampField =
		document.getElementById("formattedTimestamp"); // Get a reference to the HTML element with the id "formattedTimestamp"
	formattedTimestampField.select(); // Select the text inside the "formattedTimestamp" input or textarea field
	document.execCommand("copy"); // Execute the "copy" command to copy the selected text to the clipboard
}
