document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('signup_form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm_password');

    signupForm.addEventListener('submit', function (event) {
        if (!validateEmail(emailInput.value)) {
            event.preventDefault();
            alert('Please enter a valid email address.');
        }

        if (!validatePassword(passwordInput.value)) {
            event.preventDefault();
            alert('Password must be at least 8 characters and contain no blank spaces.');
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            event.preventDefault();
            alert('Passwords do not match.');
        }
    });

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
