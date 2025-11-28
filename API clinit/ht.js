function getPosts(userId){
    let rqu = new XMLHttpRequest() 
    rqu.open("GET","https://jsonplaceholder.typicode.com/posts?userId=" + userId)
    rqu.send()
    rqu.responseType = "json"
    rqu.onload = function() {
        if(rqu.status >= 200 && rqu.status < 300) {
            let posts = rqu.response
                            document.getElementById("right").innerHTML = ""
            for( post of posts ) {
                let content = `
            <div  class="bg-white shadow-md p-2 rounded-md mb-4">
                <h1 class="text-md font-bold text-black">${post.title}</h1>
                <p class="text-sm text-gray-600 mt-2">${post.body}</p>
            </div>
                `
                document.getElementById("right").innerHTML += content
            }
        } else {
            alert("error")
        }
    }
}

function getUser(){
    let rqu = new XMLHttpRequest() 
    rqu.open("GET","https://jsonplaceholder.typicode.com/users")
    rqu.send()
    rqu.responseType = "json"
    rqu.onload = function() {
        if(rqu.status >= 200 && rqu.status < 300) {
            let users = rqu.response
                            document.getElementById("left").innerHTML = ""
            for( user of users ) {
                let content = `
            <div id="user" onclick="userCl(${user.id}, this)" class=" W-full rounded-lg bg-stone-200 p-[7px] mb-[15px] shadow-2xl cursor-pointer hover:border-3 hover:border-black">
                <h3 class=" font-bold ">${user.name}</h3>
                <p>${user.email}</p>
            </div>
                `
                document.getElementById("left").innerHTML += content
            }
        } else {
            alert("error")
        }
    }
}   
getUser()
getPosts()

function userCl(id,el){
getPosts(id )
console.log(el)
}