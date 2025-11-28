
function getPosts(){
let req = new XMLHttpRequest();
req.open("GET","https://jsonplaceholder.typicode.com/posts");
req.send();
req.responseType = "json"
req.onload = function() {
    if(req.status >= 200 && req.status < 300 ) {
        let posts = req.response    
    for(post of posts) {
    document.getElementById("api-content").innerHTML +=`<h1>${post.body}</h1>`;

    }
    } else{
        alert("error")
    }
    
}}
function updateposts(){
    let rqu = new XMLHttpRequest();
    rqu.open("PUT","https://jsonplaceholder.typicode.com/posts/1")
    rqu.responseType = "json"
    rqu.setRequestHeader("Accept","application/json")
    rqu.setRequestHeader("Content-type","application/json")
    let bodyParam = `{
        "title": "Hello",
        "body": "world",
        "userId": 26
    }`
    rqu.send(bodyParam)
    rqu.onload = function() {

        if(rqu.status >= 200 && rqu.status < 300) {
            let res = rqu.response
        console.log(res)
        console.log("the status code is " + rqu.status)
        alert("the post has been updated successfully")
        } else {
            alert("error")
        }
        
    }
}

function creatposts(){
    let rqu = new XMLHttpRequest();
    rqu.open("POST","https://jsonplaceholder.typicode.com/posts")
    rqu.responseType = "json"
    rqu.setRequestHeader("Accept","application/json")
    rqu.setRequestHeader("Content-type","application/json")
    let bodyParam = `{
        "title": "lesson",
        "body": "hello world",
        "userId": 19
    }`
    rqu.send(bodyParam)
    rqu.onload = function() {

        if(rqu.status >= 200 && rqu.status < 300) {
            let res = rqu.response
        console.log(res)
        console.log("the status code is " + rqu.status)
        alert("the post has been created successfully")
        } else {
            alert("error")
        }
        
    }
}

function deleteposts(){
    let rqu = new XMLHttpRequest();
    rqu.open("DELETE","https://jsonplaceholder.typicode.com/posts/1")
    rqu.responseType = "json"
    rqu.setRequestHeader("Accept","application/json")
    rqu.setRequestHeader("Content-type","application/json")
    rqu.send()

    rqu.onload = function() {

        if(rqu.status >= 200 && rqu.status < 300) {
            let res = rqu.response
        console.log(res)
        console.log("the status code is " + rqu.status)
        alert("the post has been deleted successfully")
        } else {
            alert("error")
        }
        
    }
}

function userIdPosts(){
let req = new XMLHttpRequest();
req.open("GET","https://jsonplaceholder.typicode.com/posts?userId=9");
req.send();
req.responseType = "json"
req.onload = function() {
    if(req.status >= 200 && req.status < 300 ) {
        let posts = req.response    
    for(post of posts) {
    document.getElementById("api-content").innerHTML +=`<h1>${post.title}</h1>`;

    }
    } else{
        alert("error")
    }
    
}}


// getPosts()
// creatposts()
// 
userIdPosts()