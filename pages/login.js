document.addEventListener('DOMContentLoaded', function () {
    const successMessage = localStorage.getItem('signupSuccess');
    if (successMessage) {
        alert(successMessage);
        // Clear the success message from storage so it's only displayed once
        localStorage.removeItem('signupSuccess');
    }
    // Other login page initialization code
});
