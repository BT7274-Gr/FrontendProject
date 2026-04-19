let loginButton = document.getElementById('loginButton')
let currentUser = JSON.parse(localStorage.getItem('activeUser'))
if (currentUser)
{
    window.location.replace('home.html')
}
loginButton.addEventListener('click', instance => {
    let userVector = JSON.parse(localStorage.getItem('users')) || []
    let emailValue = document.getElementById('userEmail').value
    let passwordValue = document.getElementById('userPassword').value
    let foundUser = userVector.find(user => user.email === emailValue && user.password === passwordValue)
    let loginError = document.getElementById('loginError')
    loginError.classList.add('hide')
    if (foundUser)
    {
        localStorage.setItem('activeUser', JSON.stringify(foundUser))
        window.location.replace('home.html')
    }
    else
    {
        loginError.classList.remove('hide')
    }
})