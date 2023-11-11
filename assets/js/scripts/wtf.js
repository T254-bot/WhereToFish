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

// Log values to the console
    console.log('Username: ' + username);
    console.log('Email: ' + email);
    console.log('Password: ' + password);

// Store values in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

// Navigate to account.html
    //window.location.href = 'account.html';
});




