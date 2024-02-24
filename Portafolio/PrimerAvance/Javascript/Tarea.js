//Fetch GET
var url = "https://jsonplaceholder.typicode.com/todos/"

fetch(url)
  .then(respose => respose.json())
  .then(respose => console.log(respose))
.catch(error => console.error('Error:', error));

fetch(url)
.then(respose => respose.json())
.then(respose => {
  respose.forEach(element => {
      console.log(element.title)
  });
})
.catch(error => console.error('Error:', error));

// Fetch POST
fetch('https://jsonplaceholder.typicode.com/todos/', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "Armando Biography",
        completed: true
    })
})
.then(response => response.json())
.then(res => console.log(res))
.catch(error => console.error('Error:', error));



// Fetch BLOB
fetch('https://api.thecatapi.com/v1/images/search?limit=10')
  .then(response => response.blob())
  .then(blob => {
    console.log(blob)

    var urlBlob = URL.createObjectURL(blob)
    console.log(urlBlob)
  })
.catch(error => console.error('Error:', error));
 

// Fetch response.clone()
fetch(url)
.then(response => {
    clonedResponse = response.clone();
    return response.json();
})
.then(res => {
    console.log(res);
    clonedResponse.json().then(responseClone => {
      responseClone.forEach(element => {
        console.log(element.title);
      });
    });
})
.catch(error => console.error('Error:', error));
