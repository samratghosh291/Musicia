document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup_form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');
    const submitButton = document.querySelector('.signup_btn'); // Select the submit button

    // Add a click event listener to the submit button
    submitButton.addEventListener('click', function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Validate the form when the submit button is clicked
        if (validateForm()) {
            signupForm.submit();
            localStorage.setItem('signupSuccess', 'Signup successful. You can now log in.');
            // Redirect to the login page
            window.location.href = 'login.html';
        }
    });

    // Add a submit event listener to the form
    signupForm.addEventListener('submit', function (event) {
        // Validate the form when it is submitted
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
            // alert('Form contains validation errors. Please correct them.');
        }
    });

    function validateForm() {
        let valid = true;

        // Validate username
        if (!validateUsername(usernameInput.value)) {
            alert('Please enter a valid username.');
            valid = false;
        }
        else{
            if (!validateEmail(emailInput.value)) {
                alert('Please enter a valid email address.');
                valid = false;
            }
            else{
                if (!validatePassword(passwordInput.value)) {
                    alert('Password must be at least 8 characters and contain no blank spaces.');
                    valid = false;
                }
                else if (passwordInput.value !== confirmPasswordInput.value) {
                    alert('Passwords do not match.');
                    valid = false;
                }
            }
        }
        // Validate email
        

        // Validate password
        

        return valid;
    }

    function validateUsername(username) {
        // Add validation rules for the username here if needed
        // For example, you can check for minimum length or specific character requirements
        return username.length > 0; // Currently, it checks for a non-empty username
    }

    function validateEmail(email) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    function validatePassword(password) {
        // Check for minimum length (e.g., at least 8 characters) and no blank spaces
        const minLength = 8; // You can adjust this value as needed
        const hasBlankSpaces = /\s/.test(password);
        return password.length >= minLength && !hasBlankSpaces;
    }
});
