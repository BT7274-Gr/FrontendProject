let apiUrl = 'https://jsonplaceholder.typicode.com/posts?_limit=10'
document.addEventListener('DOMContentLoaded', () => {
    let contentContainer = document.getElementById('contentContainer')
    let submitButton = document.getElementById('postPost')
    let activeUser= JSON.parse(localStorage.getItem('activeUser'))
    let kingpinPost = document.getElementById('kingpinPost')
    if(activeUser.kingpin !== true)
    {
        kingpinPost.classList.add('hide')
    }
    else
    {
         kingpinPost.classList.remove('hide')
    }
    const showPost =(combinedPosts) =>{
        contentContainer.innerHTML=''

        const onlyTen = combinedPosts.slice(0,10)
        onlyTen.forEach(post => {
            let cardColumn = document.createElement('div')
            cardColumn.innerHTML = `<div class = ' p-3 card h-100 shadow-sm'>
            <div class='card-body '> 
            <div class='d-flex justify-content-between align-items-start mb-3'>
            <h5 class='card-title text-primary text-capitalize'>${post.title}</h5>
            <span class='badge rounded-pill bg-light text-dark border'>
            <i class='bi bi-person'></i>
            ${post.author || 'Unknown User'}
            
            </span>
            </div>
            <p class='card-text text-muted'>${post.body}</p>
            </div>
            <div class = 'card-footer bg-transparent border-0'>
            
            </div>
            </div>`
            contentContainer.appendChild(cardColumn)

        })
    }
    async function loadPosts(){
    const response = await fetch(apiUrl)
    const apiPosts = await response.json()

    const userPosts = JSON.parse(localStorage.getItem('kingpinPosts')) || []
    const allPosts = [...userPosts,...apiPosts]
    showPost(allPosts)
}

submitButton.addEventListener('click', isntance =>{
    const title = document.getElementById('postTitle').value
    const postBody = document.getElementById('postBody').value
    
    if(title && postBody)
    {
        const newPost = {title : title,
            body:postBody,
            author: activeUser.name,
            id: Date.now()}
        const userPosts = JSON.parse(localStorage.getItem('kingpinPosts')) || []
        userPosts.unshift(newPost)
        localStorage.setItem('kingpinPosts', JSON.stringify(userPosts))
        document.getElementById('postTitle').value = ''
        document.getElementById('postBody').value=''
        loadPosts()
    }
    else
    {
        alert('Please fill out both the title and the description')
    }
})
loadPosts()

})



