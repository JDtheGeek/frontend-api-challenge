
function getPeeps() {
  fetch('https://chitter-backend-api.herokuapp.com/peeps')
    .then(response => response.json())
    .then(json => console.log(json))
}

function getUsers() {
  fetch('https://chitter-backend-api.herokuapp.com/users')
    .then(response => response.json())
    .then(json => console.log(json))
}

function getPeep(id) {
  fetch('https://chitter-backend-api.herokuapp.com/peeps/' + id)
    .then(response => response.json())
    .then(json => console.log(json))
}

function getUser(id) {
  fetch('https://chitter-backend-api.herokuapp.com/users/' + id)
    .then(response => response.json())
    .then(json => console.log(json))
}

function postUser(myHandle, myPassword) {
  fetch('https://chitter-backend-api.herokuapp.com/users/', {
    method: "post",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user: {
        handle: myHandle,
        password: myPassword
      }
    })
  })
    .then(response => response.json())
    .then(json => console.log(json))
}

