const boton = document.getElementById("boton")

boton.addEventListener("click", () => {
    alert("Click en el botón")
})

$(document).ready(function() {
    $("#boton").click(function() {
        console.log("Hola, estoy utilizando jQuery");
    });
});