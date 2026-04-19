let mainHeader = document.getElementById('header1')
let userVector = JSON.parse(localStorage.getItem('users')) || []
let kingpin = userVector.find(user => user.kingpin === true)
if (kingpin)
{
    mainHeader.textContent = `Welcome to ${kingpin.name}'s community`
}
else
{
    mainHeader.textContent = `There is no current main user`
}