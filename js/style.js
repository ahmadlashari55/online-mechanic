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
