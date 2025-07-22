const form = document.getElementById("appointmentForm");
const confirmation = document.getElementById("confirmation");
const confirmationText = document.getElementById("confirmationText");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const doctor = document.getElementById("doctor").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;

  confirmationText.innerHTML = `
    Dear <strong>${name}</strong>,<br/>
    Your appointment with <strong>${doctor}</strong> on <strong>${date}</strong> at <strong>${time}</strong> has been confirmed.<br/>
    A confirmation email will be sent to <strong>${email}</strong>.
  `;

  form.classList.add("hidden");
  confirmation.classList.remove("hidden");
});

function resetForm() {
  document.getElementById("appointmentForm").reset();
  form.classList.remove("hidden");
  confirmation.classList.add("hidden");
}
