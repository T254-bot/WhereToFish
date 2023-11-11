document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

// Grabs the input values
    var username = document.getElementById('sign-up-un').value;
    var email = document.getElementById('sign-up-email').value;
    var password = document.getElementById('sign-up-pw').value;
    var confirmPassword = document.getElementById('sign-up-cpw').value;

// logs values to the consoles for testing

    console.log('Username: ' + username);
    console.log('Email: ' + email);
    console.log('Password: ' + password);
    console.log('Confirm Password: ' + confirmPassword);
});




