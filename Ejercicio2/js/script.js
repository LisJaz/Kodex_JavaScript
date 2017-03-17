//var x=2+3
//alert("hola mundo "+x);

function calcular(){
    //document.getElementById('idprueba').innerHTML ="wtf"
    //document.getElementById('idprueba').innerHTML ="<p>hola<p>"
    var op1= document.getElementById('operando1').value;
    var op2= document.getElementById('operando2').value;
    var opera= document.getElementById('operador').value;
    var result;
    var textOp;

    if (opera == "+") {
      result = parseInt(op1) + parseInt(op2);
    //  alert("El resultado es = "+ result);
    textOp = "suma";
    document.getElementById('respuesta').innerHTML ="El resultado de la "+textOp +" es: "+ result;
    }
    if (opera == "-") {
      result = parseInt(op1) - parseInt(op2);
      textOp = "resta";
      document.getElementById('respuesta').innerHTML ="El resultado de la "+textOp +" es: "+result;
    }
    if (opera == "*") {
      result = parseInt(op1) * parseInt(op2);
      textOp = "multiplicación";
      document.getElementById('respuesta').innerHTML ="El resultado de la "+textOp +" es: "+result;
    }
    if (opera == "/") {
      result = parseInt(op1) / parseInt(op2);
      textOp = "división";
      document.getElementById('respuesta').innerHTML ="El resultado de la "+textOp +" es: "+result;
    }

}
