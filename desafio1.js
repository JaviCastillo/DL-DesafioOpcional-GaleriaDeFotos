/* 
Hacer albums con texto de https://jsonplaceholder.typicode.com/albums

albums contienen fotos de https://jsonplaceholder.typicode.com/photos

*/

fetch('https://jsonplaceholder.typicode.com/albums')
    .then(response => response.json())
    .then(datos => {
        datos.forEach(e => {
            gallery.innerHTML += `<div class="albumWrapper" id="${e.id}" onClick="poblarAlbum(this.id)">${e.title}</div>`
        })
        activar();
    })
    .catch(error => console.error(error)); 




let activar = () => {
    let x = document.getElementsByClassName("albumWrapper")
        for (var i = 0; i < x.length; i++) {
            x[i].addEventListener('click', () =>{
                togglePage();
            }) 
        }
}

let togglePage = () => {
    document.querySelector('.albumes').classList.toggle("hide");
    document.querySelector('.fotos').classList.toggle("hide");
}


let poblarAlbum = (id) => {
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(datos => {
        albumPhotos.innerHTML = "";
        datos.forEach(e => {
            if(e.albumId == id) {
                albumPhotos.innerHTML += `<img src="${e.url}" class="photo">`
            }
        })
        
    })
    .catch(error => console.error(error)); 
}


