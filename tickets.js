document.getElementById("ticketForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const tickets = document.getElementById("tickets").value;
    const ticketType = document.getElementById("ticketType").value;
    const payment = document.getElementById("payment").value;
    const terms = document.getElementById("terms").checked;

    document.querySelectorAll(".error").forEach(err => err.textContent = "");
    document.getElementById("successMessage").textContent = "";

    if (name === "") {
        document.getElementById("nameError").textContent = "Full name required.";
        valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        valid = false;
    }

    const phonePattern = /^[0-9]{10,15}$/;
    if (!phone.match(phonePattern)) {
        document.getElementById("phoneError").textContent = "Enter a valid phone number.";
        valid = false;
    }

    if (tickets < 1 || tickets > 10) {
        document.getElementById("ticketsError").textContent = "Choose between 1 and 10 tickets.";
        valid = false;
    }

    if (ticketType === "") {
        document.getElementById("ticketTypeError").textContent = "Select a ticket type.";
        valid = false;
    }

    if (payment === "") {
        document.getElementById("paymentError").textContent = "Select a payment method.";
        valid = false;
    }

    if (!terms) {
        document.getElementById("termsError").textContent = "You must agree to the terms.";
        valid = false;
    }

    if (valid) {
        document.getElementById("successMessage").textContent = "Booking Successful!";
        document.getElementById("ticketForm").reset();
    }
});