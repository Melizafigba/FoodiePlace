var url = 'https://pokeapi.co/v2/pokemon/50/'

fetch(url)
.then(response => response.json() )
.then(data => {

    let element = document.getElementById('elem')
    element.innerHTML = '<p>${data.name}</p>';

    console.log(data)
})

.catch(err => console.log(err))