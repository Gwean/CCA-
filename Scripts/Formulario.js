function MostrarOtroSelect(divId, element) {
    document.getElementById(divId).style.display = element.value == "Otro" ? 'block' : 'none';
}
function MostrarOtroCheckbox(divId, element) {
    document.getElementById(divId).style.display = element.checked == true ? 'block' : 'none';
  }


function Clickeado(elementId) {
    if (document.getElementById(elementId).value == "0") {
        document.getElementById(elementId).classList.remove('FormularioEspacioBoton');
        document.getElementById(elementId).classList.add('FormularioEspacioBotonActivo');
        document.getElementById(elementId).value = "1";

    } else {
        document.getElementById(elementId).classList.remove('FormularioEspacioBotonActivo');
        document.getElementById(elementId).classList.add('FormularioEspacioBoton');
        document.getElementById(elementId).value = "0";
    }
}