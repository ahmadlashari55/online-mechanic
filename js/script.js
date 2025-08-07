document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const vehicle = document.getElementById("vehicle").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const location = document.getElementById("location").value;

  if (name && phone && vehicle && service && date && location) {
    // Optionally save booking in localStorage
    let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
    bookings.push({ name, phone, vehicle, service, date, location });
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Show confirmation
    document.getElementById("bookingForm").style.display = "none";
    document.getElementById("confirmation").style.display = "block";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("bookingForm");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    // Simple form validation
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const vehicle = document.getElementById("vehicle").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value.trim();

    if (!name || !phone || !vehicle || !service || !date || !location) {
      alert("Please fill in all fields.");
      return;
    }

    // Show confirmation
    confirmation.style.display = "block";

    // Clear form
    form.reset();
  });
});
<script>
  function searchContent() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const services = [
      "oil change",
      "brake check",
      "battery service",
      "tire replacement",
      "emergency mechanic"
    ];

    const matched = services.filter(service => service.includes(input));

    if (matched.length > 0) {
      alert("✅ Found: " + matched.join(", "));
    } else {
      alert("❌ No results found.");
    }
  }
</script>
