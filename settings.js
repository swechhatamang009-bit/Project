// Select all buttons
const buttons = document.querySelectorAll(".btn");

// Save Library Information
buttons[0].addEventListener("click", function () {
    alert("Library information saved successfully!");
});

// Update Password
buttons[1].addEventListener("click", function () {

    const password = document.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = document.querySelectorAll('input[type="password"]')[1].value;

    if (password === "" || confirmPassword === "") {
        alert("Please enter both password fields.");
    }
    else if (password !== confirmPassword) {
        alert("Passwords do not match!");
    }
    else {
        alert("Password updated successfully!");
    }
});

// Save System Settings
buttons[2].addEventListener("click", function () {
    alert("System settings saved successfully!");
});

// Save Notification Settings
buttons[3].addEventListener("click", function () {

    const email = document.querySelectorAll('input[type="checkbox"]')[0].checked;
    const dueDate = document.querySelectorAll('input[type="checkbox"]')[1].checked;
    const sms = document.querySelectorAll('input[type="checkbox"]')[2].checked;

    let message = "Notification Preferences Saved.\n\n";

    message += "Email Notifications: " + (email ? "ON" : "OFF") + "\n";
    message += "Due Date Reminder: " + (dueDate ? "ON" : "OFF") + "\n";
    message += "SMS Notifications: " + (sms ? "ON" : "OFF");

    alert(message);
});