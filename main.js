// Array de datos interesantes sobre cortometrajes y cine
const interestingFacts = [
    "¿Sabías que la primera película de animación fue 'Gertie the Dinosaur', creada en 1914?",
    "El récord de la película más larga de la historia es de 35 horas, con el título 'Logistics'.",
    "El primer cortometraje en ganar un Oscar fue The Music Box en el año 1932.",
    "El cortometraje que más dinero ha ganado es 'Piper', producido por Pixar Animation Studios."
];

// Función para mostrar un dato interesante
document.getElementById("interestingFactButton").addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * interestingFacts.length); // Elegir uno aleatorio
    alert(interestingFacts[randomIndex]); // Mostrar el dato interesante
});

//Busqueda// 

function filterProducts() {
    // Obtener el valor del input de búsqueda
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    
    // Obtener la lista de productos
    let ul = document.getElementById('productList');
    let li = ul.getElementsByClassName('product-item');
    
    // Recorrer todos los elementos de la lista y ocultar los que no coincidan
    for (let i = 0; i < li.length; i++) {
        let productTitle = li[i].getElementsByTagName('h2')[0].textContent || li[i].getElementsByTagName('h2')[0].innerText;
        if (productTitle.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";  // Mostrar el producto si coincide
        } else {
            li[i].style.display = "none";  // Ocultar el producto si no coincide
        }
    }
}
