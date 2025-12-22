// Gets class/div ticketform, attaches a submit event listener to it
document.getElementById("ticketForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let valid = true;
// Get and clean user information
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const tickets = document.getElementById("tickets").value;
    const ticketType = document.getElementById("ticketType").value;
    const payment = document.getElementById("payment").value;
    const terms = document.getElementById("terms").checked;
//Clear all previous success and error messages

    document.querySelectorAll(".error").forEach(err => err.textContent = "");
    document.getElementById("successMessage").textContent = "";

// If name is empty, output error msg
    if (name === "") {
        document.getElementById("nameError").textContent = "Full name required.";
        valid = false;
    }

// If email does not Has text before the @, has exactly one @ symbol, has text after the @, has a dot, ends with 2 or 3 lowercase letters, output error msg
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Enter a valid email.";
        valid = false;
    }

// If phone number does not have numbers 0-9, atleast 10-15 characters long, output error msg
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phone.match(phonePattern)) {
        document.getElementById("phoneError").textContent = "Enter a valid phone number.";
        valid = false;
    }

// If no. of tickets is less than 1 or more than 10, output error msg
    if (tickets < 1 || tickets > 10) {
        document.getElementById("ticketsError").textContent = "Choose between 1 and 10 tickets.";
        valid = false;
    }
// If tickettype is empty, output error msg
    if (ticketType === "") {
        document.getElementById("ticketTypeError").textContent = "Select a ticket type.";
        valid = false;
    }

// If payment type is empty, output error msg
    if (payment === "") {
        document.getElementById("paymentError").textContent = "Select a payment method.";
        valid = false;
    }

// If terms and agreement box has not been ticked, output error msg.
    if (!terms) {
        document.getElementById("termsError").textContent = "You must agree to the terms.";
        valid = false;
    }
// If everything passes check, success messge printed
    if (valid) {
        document.getElementById("successMessage").textContent = "Booking Successful!";
        document.getElementById("ticketForm").reset();
    }
});