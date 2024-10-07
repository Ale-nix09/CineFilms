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
