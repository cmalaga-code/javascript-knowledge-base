// current
fetch('https://gorest.co.in/public/v2/users')
.then(response => {
    let data = response.json()
    console.log(data)
});

