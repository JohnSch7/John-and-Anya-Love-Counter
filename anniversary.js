document.addEventListener('DOMContentLoaded', function() {
    // Function to update counters
    function updateCounters() {
        const selectedDate = new Date('2024-12-10T18:30:00'); // Updated date and time
        const currentDate = new Date();

        const diff = currentDate - selectedDate;
        const seconds = Math.floor(diff / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const days = diff / (1000 * 60 * 60 * 24);
        const months = diff / (1000 * 60 * 60 * 24 * 30.4375);
        const years = diff / (1000 * 60 * 60 * 24 * 365.25);
        const totalDays = Math.floor(days);

        // Update individual boxes
        document.getElementById('seconds').innerText = `Seconds: ${seconds.toLocaleString()}`;
        document.getElementById('minutes').innerText = `Minutes: ${minutes.toLocaleString()}`;
        document.getElementById('hours').innerText = `Hours: ${hours.toLocaleString()}`;
        document.getElementById('days').innerText = `Days: ${days.toFixed(1).toLocaleString()}`;
        document.getElementById('months').innerText = `Months: ${months.toFixed(1).toLocaleString()}`;
        document.getElementById('years').innerText = `Years: ${years.toFixed(2).toLocaleString()}`;

        // Update the total box to display only total days
        document.getElementById('total').innerText = `Total: ${totalDays} day${totalDays !== 1 ? 's' : ''}`;
    }

    // Update counters every second (1000 milliseconds)
    setInterval(updateCounters, 1000);

    // Initial call to update counters immediately
    updateCounters();

    //PASSWORD

    function checkPassword() {
      const pw = document.getElementById("password").value;
      if (pw === "Dec10") {
        window.location.href = "index.html";
      } else {
        document.getElementById("error").innerText = "anniversary";
      }
    }
});
