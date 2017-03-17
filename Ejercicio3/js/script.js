//var x=2+3
//alert("hola mundo "+x);

function listar(){
    //document.getElementById('idprueba').innerHTML ="wtf"
    //document.getElementById('idprueba').innerHTML ="<p>hola<p>"
    var listarItem=[];
    var item= document.getElementById('itemLista').value;

    /*var ul= document.createElement('ul');
    ul.innerHTML= "<li>"+item+"</li>";
    document.getElementById('mercado').appendChild(ul);
*/
/*
    var li = document.createElement('li');
    li.innerHTML=item;
    document.getElementById('mercado').appendChild(li);
*/
    var aux = document.getElementById('mercado').innerHTML;
    document.getElementById('mercado').innerHTML= "<li>"+ item +"</li>" + aux

}
