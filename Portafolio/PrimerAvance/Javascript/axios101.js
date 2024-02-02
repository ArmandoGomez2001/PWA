const axios = require('axios')

const url = 'https://jsonplaceholder.typicode.com/users'

// axios.get(url).then(respose => {
//     respose.data.forEach(element => {
//         console.log("ID: "+ element.id + " Username: " + element.username + " Email: " + element.email)
//     });
// })

// axios.post(url, {
//     username: "FOO",
//     email: "foo@foo.com"
// }).then(response =>{
//     console.log(response.data)
// })