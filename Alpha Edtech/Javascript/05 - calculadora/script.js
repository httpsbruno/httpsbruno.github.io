function letsCalculate(operation){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
   
    let r;
    if (operation === "plus") {
        r = num1 + num2;
    } else if (operation === "less") {
        r = num1 - num2;
    } else if (operation === "times") {
        r = num1 * num2;
    } else {
        r = num1 / num2;
    }
    document.getElementById("r").innerHTML = "Resultado: " + r;

}
