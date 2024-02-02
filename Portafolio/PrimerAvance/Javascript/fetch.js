var url = "https://api.stackexchange.com/2.2/questions?site=stackoverflow&tagged=javascript";

const responseData = fetch(url).then(response => response.json())
.then(res => console.log(res))

// responseData.then(({ items, has_more, quota_max, quota_remaining }) => {
//     console.log("Quota max: " + quota_max + "\n");
//     for (const { title, question_id } of items) {
//         console.log(question_id + " title: " + title);
//     }
// }).catch(err => console.log(err));


// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content_type": "application/json"
//     },
//     body: JSON.stringify({
//         username: "foo",
//         email: "foo@foo.com"
//     })
// }).then(response => response.json())
// .then(res => console.log(res))

// fetch(url).then(response => {
//     response.forEach(element => {
//         console.log("ID" + element.id + "userId:" + element.userID)
//     })
// })

// fetch(url, {
//     method: "POST",
//     headers: {
//         "Content_type": "application/json"
//     },
//     body: JSON.stringify({
//         userID: 2,
//         title: "Lorem Ipsum"
//     })
// }).then(res => res.json())
// .then(res => console.log(res))
