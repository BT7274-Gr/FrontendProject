let userVector = JSON.parse(localStorage.getItem('users'))
let kingPin = userVector.find(user => user.kingpin === true)
let identifyKingpin = document.getElementById('identifyKingpin')
if(kingPin)
{
    identifyKingpin.innerText=`This is a website for ${kingPin.name}`
}

let userCountElement = document.getElementById('userCount')
let userCount = userVector.length
userCountElement.innerHTML= `There are ${userCount} users in this community`