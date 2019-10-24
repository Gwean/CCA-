function MostrarOtro(divId, element)
{
    document.getElementById(divId).style.display = element.value == "Otro" ? 'block' : 'none';
}