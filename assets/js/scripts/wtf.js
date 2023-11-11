let signupForm = document.getElementById('signupForm');

if (signupForm) {
    document.getElementById('signupForm').addEventListener('submit', function(event) {
        event.preventDefault(); 

    // Grabs the input values
        var username = document.getElementById('sign-up-un').value;
        var email = document.getElementById('sign-up-email').value;
        var password = document.getElementById('sign-up-pw').value;
        var confirmPassword = document.getElementById('sign-up-cpw').value;

    // Validation checks
        if (username.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            alert('Please fill in all fields.');
            return;
        }
        
        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

    // Log values to the console for manual testing
        console.log('Username: ' + username);
        console.log('Email: ' + email);
        console.log('Password: ' + password);

    // Store values in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

    // Takes user to account.html
        //window.location.href = 'account.html';
    });
} else {
    console.log('signup form does not exist on this page')
}

document.addEventListener('DOMContentLoaded', function () {
    // Check if username exists in local storage
    var storedUsername = localStorage.getItem('username');

    if (storedUsername) {
        // If username exists, update the content of the element with id "add-username"
        var addUsernameElement = document.getElementById('add-username');

        if (addUsernameElement) {
            addUsernameElement.textContent = 'Welcome ' + storedUsername;
        } else {
            console.log('Element with id "add-username" not found on this page.');
        }
    } else {
        // If username doesn't exist, you might want to handle this case accordingly
        console.log('Username not found in local storage');
    }
});










