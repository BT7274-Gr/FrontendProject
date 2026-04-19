document.addEventListener('DOMContentLoaded', () => {
    const authSection = document.getElementById('authSection');
    const activeUser = JSON.parse(localStorage.getItem('activeUser'));

    if (activeUser) {
        // 1. User is logged in: Show their name and a Logout button
        authSection.innerHTML = `<span class="text-white me-3">Hello ${activeUser.name}</span>
            <button id="logoutBtn" class="btn btn-outline-danger btn-sm">Log Out</button>`;

        // 2. Add the Logout Logic
        document.getElementById('logoutBtn').addEventListener('click', () => {
            localStorage.removeItem('activeUser'); 
            alert("You have been logged out.");
            window.location.replace("login.html"); 
        });
    }
    else{
        if (!window.location.pathname.endsWith('login.html') && !window.location.pathname.endsWith('registration.html'))
        {
            window.location.replace('login.html')
        }
    }
});