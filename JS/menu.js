document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");

    // Abrir el menú y reducir el tamaño del botón
    menuToggle.addEventListener("click", () => {
        console.log("Abrir menú"); // Depuración
        sidebar.classList.add("active");
        overlay.classList.add("active");
        menuToggle.classList.add("small");
    });

    // Cerrar el menú y restaurar el tamaño del botón
    overlay.addEventListener("click", () => {
        console.log("Cerrar menú"); // Depuración
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        menuToggle.classList.remove("small");
    });
});