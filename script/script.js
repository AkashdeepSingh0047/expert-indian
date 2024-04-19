// Function to clear form inputs
function clearForm() {
    document.getElementById("bookingForm").reset();
}

// Function to handle form submission
document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form data
    var formData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        licenseNumber: document.getElementById("licenseNumber").value,
        ssn: document.getElementById("ssn").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        address: document.getElementById("address").value,
        checkInDate: document.getElementById("checkInDate").value,
        checkOutDate: document.getElementById("checkOutDate").value,
        agreeCheckbox: document.getElementById("agreeCheckbox").checked
    };

    // Check if check-out date is after check-in date
    if (formData.checkOutDate <= formData.checkInDate) {
        alert("Check-out date must be after check-in date");
        return; // Do not proceed with form submission
    }

    // Process form data (You can send it to server or do something else)
    console.log(formData);

    // Clear form after submission
    clearForm();
});

// Prevent past dates from being selected in date picker and set minimum check-out date
window.addEventListener("DOMContentLoaded", function() {
    var today = new Date().toISOString().split('T')[0];
    document.getElementById("checkInDate").setAttribute("min", today);
    document.getElementById("checkOutDate").setAttribute("min", today);

    // Set minimum check-out date based on check-in date
    document.getElementById("checkInDate").addEventListener("change", function() {
        document.getElementById("checkOutDate").setAttribute("min", this.value);
    });
});

// Limit phone number input to 10 characters
document.getElementById("phoneNumber").addEventListener("input", function() {
    if (this.value.length > 10) {
        this.value = this.value.slice(0, 10);
    }
});


