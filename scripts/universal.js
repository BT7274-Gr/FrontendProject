document.addEventListener('DOMContentLoaded', () => {
    const authSection = document.getElementById('authSection');
    const activeUser = JSON.parse(localStorage.getItem('activeUser'));

    if (activeUser) {
        // 1. User is logged in: Show their name and a Logout button
        authSection.innerHTML = `
            <span class="text-white me-3">Hi, ${activeUser.name}</span>
            <button id="logoutBtn" class="btn btn-outline-danger btn-sm">Log Out</button>
        `;

        // 2. Add the Logout Logic
        document.getElementById('logoutBtn').addEventListener('click', () => {
            localStorage.removeItem('activeUser'); // Clear the session
            alert("You have been logged out.");
            window.location.replace("login.html"); // Send back to login
        });
    }
});