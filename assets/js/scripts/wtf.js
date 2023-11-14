let signupForm = document.getElementById('signupForm');
// Function to allow user to store personal details in local storage
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

    // Logs the values to the console for manual testing
        console.log('Username: ' + username);
        console.log('Email: ' + email);
        console.log('Password: ' + password);

    // Stores values in local storage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

    // Sends confirmation email to the user's inputted address  
        emailjs.send("service_udzvhfn", "template_kdeu3pk", {
            to_name: localStorage.getItem('username'),
            to_email: localStorage.getItem('email'),
        })
        .then(function(response) {
            console.log('Email sent:', response);
            window.location.href = 'account.html';
        })
        .catch(function(error) {
            console.error('Email did not send:', error);
        });
    });

} else {
    console.log('signup form does not exist on this page')
}

// Function to allow user to update data stored in local storage
let changeDetailsForm = document.getElementById('change-details-form');

if (changeDetailsForm) {
    document.getElementById('change-details-form').addEventListener('submit', function(event) {
        event.preventDefault(); 

    // Grabs the input values
        var username = document.getElementById('change-details-un').value;
        var email = document.getElementById('change-details-email').value;
        var password = document.getElementById('change-details-pw').value;
        var confirmPassword = document.getElementById('change-details-cpw').value;

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
        window.location.href = 'account.html';
    });
} else {
    console.log('change details form does not exist on this page')
}

document.addEventListener('DOMContentLoaded', function () {
    // Checks if username exists in local storage
    var storedUsername = localStorage.getItem('username');

    if (storedUsername) {
        // Updates the message on the account page
        var addUsernameElement = document.getElementById('add-username');
        var naHiddenElement = document.getElementById('na-hidden-element');
        var aHiddenElement = document.getElementById('a-hidden-element');
    
        // Replaces sign up on navbar with account after user submits sign up form
        if (naHiddenElement && aHiddenElement) {
            naHiddenElement.classList.remove('hidden');
            aHiddenElement.classList.add('hidden');
        } else {
            console.log('Hidden elements not found on this page.');
        };

        if (addUsernameElement) {
            addUsernameElement.textContent = 'Welcome ' + storedUsername;
        } else {
            console.log('Element with id "add-username" not found on this page.');
        }
    } else {
        // message for if username doesn't exist
        console.log('User has not created an account');
    }
});

// Function to allow user to navigate to search page using the button provided
let jumboButton = document.getElementById('jumbo-btn');
if (jumboButton) {
    document.getElementById('jumbo-btn').addEventListener('click', function(event) {
        window.location.href = 'search.html';
    })
} else {
    console.log('Jumbo button not found on this page')
};

