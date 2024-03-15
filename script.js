document.addEventListener("DOMContentLoaded", function () {
   console.log("Made by: https://github.com/NewNamesAreHard");

   SetDates();
   FillDates();
   Submit();
});

function CopyToClipboard() {
   const formattedTimestampField =
      document.getElementById("formattedTimestamp");
   formattedTimestampField.select();
   document.execCommand("copy");
}

function SetDates() {
   const currentDate = new Date(); // Create a new JavaScript Date object
   const currentYear = currentDate.getFullYear(); // Extract the current year from the Date object
   const currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0"); // Extract the current month from the Date object and ensure it's in two-digit format (01 - 12)
   const currentDay = String(currentDate.getDate()).padStart(2, "0"); // Extract the current day of the month from the Date object and ensure it's in two-digit format (01 - 31)
   const currentHour = String(currentDate.getHours()).padStart(2, "0"); // Extract the current hour from the Date object and ensure it's in two-digit format (00 - 23)
   const currentMinute = String(currentDate.getMinutes()).padStart(2, "0"); // Extract the current minute from the Date object and ensure it's in two-digit format (00 - 59)
   return {
      Date: currentDate,
      Year: currentYear,
      Month: currentMonth,
      Day: currentDay,
      Hour: currentHour,
      Minute: currentMinute,
   };
}

function FillDates() {
   const { Date, Year, Month, Day, Hour, Minute } = SetDates();
   document.getElementById("datepicker").value = `${Year}-${Month}-${Day}`;
   document.getElementById("timepicker").value = `${Hour}:${Minute}`;
}

function Submit() {
   document.getElementById("form").addEventListener("submit", function (e) {
      e.preventDefault();
      const selectedDate = document.getElementById("datepicker").value; // Get the selected date value from the datepicker input field
      const selectedTime = document.getElementById("timepicker").value; // Get the selected time value from the timepicker input field
      const selectedDateTime = new Date(selectedDate + " " + selectedTime); // Combine the selected date and time into a single Date object
      const unixTimestamp = Math.floor(selectedDateTime.getTime() / 1000); // Convert the selected date and time into a Unix timestamp (in seconds)
      let formattedTimestamp;
      if (document.getElementById("shortformat").checked) {
         formattedTimestamp = `<t:${unixTimestamp}>`;
      } else {
         formattedTimestamp = `<t:${unixTimestamp}:F>`;
      }
      document.getElementById("formattedTimestamp").textContent = unixTimestamp;
      document.getElementById("formattedTimestamp").value = formattedTimestamp;
   });
}
