document.addEventListener("DOMContentLoaded", () => {
    console.log("Página cargada correctamente");

    // Ejemplo de interacción: Cambiar color de fondo de las secciones al hacer clic
    document.querySelectorAll("section").forEach(section => {
        section.addEventListener("click", () => {
            section.style.backgroundColor = "#dfe6e9";
            setTimeout(() => {
                section.style.backgroundColor = "#ecf0f1";
            }, 500);
        });
    });
});
