let register = document.getElementById('register')
let userVector = JSON.parse(localStorage.getItem('users')) || []

register.addEventListener('click', instance => {
    let validEntry = true;
    let userPasswordVal = document.getElementById('password').value
    let userRePasswordVal = document.getElementById('repassword') .value
    let userNameVal = document.getElementById('userName').value
    let userEmailVal = document.getElementById('userEmail').value
    validEntry = checkInputs(userNameVal,userEmailVal,userPasswordVal,userRePasswordVal)

    if (validEntry)
    {
        let status = false
        if (userVector.length === 0)
        {
            status = true
        }
        else
        {
            status = false
        }
        let newUser = new User(userNameVal,userEmailVal,userPasswordVal, status)
        userVector.push(newUser);
        localStorage.setItem('users',JSON.stringify(userVector))
        alert("account created successfully")
        window.location.replace("login.html")
    }
})

class User {
    constructor(name,email,password,status){
        this.name = name;
        this.email = email;
        this.password = password;
        this.whenAccountCreated = new Date();
        this.kingpin = status;

    }
    
}


function checkInputs (name,email,password, repeatpassword)
{
     let correctCheck = true
    let passwordError = document.getElementById('passwordMismatch')
    let passwordEmptyError = document.getElementById('passwordEmpty')
    let userNameError = document.getElementById('nameError')
    let emailError = document.getElementById('emailError')
    let emailErrorDuplicate = document.getElementById('emailErrorDuplicate')
    let emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    passwordError.classList.add('hide')
    passwordEmptyError.classList.add('hide')
    userNameError.classList.add('hide')
    emailErrorDuplicate.classList.add('hide')
    emailError.classList.add('hide')
    if (password === "")
    {
        passwordEmptyError.classList.remove('hide')
        correctCheck =false
    }
    
    if (password !== repeatpassword)
    {
        passwordError.classList.remove('hide')
         correctCheck =false
    }
    if (name === "")
    {
        userNameError.classList.remove('hide')
        correctCheck = false
    }
    
    if (!emailRegEx.test(email))
    {
        emailError.classList.remove('hide')
        correctCheck = false
    }
    let duplicateEmail = userVector.find(user => user.email === email)
    if (duplicateEmail)
    {
        emailErrorDuplicate.classList.remove('hide')
        correctCheck = false
    }
    return correctCheck 

}
