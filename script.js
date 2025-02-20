document.addEventListener("DOMContentLoaded", () => {
    console.log("Script cargado correctamente");
    
    // Efecto de desplazamiento suave para los enlaces
    document.querySelectorAll("a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            if (this.getAttribute("href").startsWith("#")) {
                event.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // Cambiar color de fondo del header al hacer scroll
    window.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        if (window.scrollY > 50) {
            header.style.backgroundColor = "#1a252f";
        } else {
            header.style.backgroundColor = "#2c3e50";
        }
    });
});
