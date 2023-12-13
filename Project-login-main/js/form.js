document.addEventListener("DOMContentLoaded", function(){
    const loginForm = document.getElementById("login_form");

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = loginForm.elements["email_address"].value;
        const service = loginForm.elements["service"].value;
        const firstName = loginForm.elements["first_name"].value;
        const lastName = loginForm.elements["last_name"].value;
        const appointmentDate = loginForm.elements["appointment_date"].value;
        const appointmentTime = loginForm.elements["appointment_time"].value;

        if(email.trim() === ""){
            alert("Email is required!");
            return;
        }

        if (!isValidEmail(email)) {
            alert("Please enter a valid email address!");
            return;
        }
        
        console.log("Email:", email);
        console.log("Service:", service);
        console.log("First Name:", firstName);
        console.log("Last Name:", lastName);
        console.log("Appointment Date:", appointmentDate);
        console.log("Appointment Time:", appointmentTime);

        loginForm.reset();
        alert("Appointment has been booked. You will receive a confirmation email shortly.");
    });

    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.reset();
    });
});