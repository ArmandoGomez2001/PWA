//Fetch GET
var url = "https://jsonplaceholder.typicode.com/todos/"

// fetch(url)
// .then(response => response.json())
// .then(response => {
//     response.forEach(element => {
//         console.log(element.title)
//     });
// })

//Fetch POST
// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content-Type":"application/json"
//     },
//     body: JSON.stringify({
//         title: "La vida de Armando",
//         completed: true
//     })
// })
// .then(response => response.json())
// .then(response => console.log(response))


//Fetch BLOB 
// fetch(url)
// .then(response => response.blob())
// .then(res => {
//     console.log(res)

//     var urlBlob = URL.createObjectURL(res)
//     console.log(urlBlob)
// })


//Fetch  response.clone()
fetch(url)
.then(response => {
    responseClone = response.clone()
    return response.json()
})
.then(res => {
    console.log(res)
    responseClone.json().then(responseClone => {
        responseClone.forEach(element => {
            console.log(element.title)
        });
    })
})