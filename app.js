//Variables
var Grupoamigos=[];
var listaol1 = document.getElementById('lista');
var listaol2 = document.getElementById('listaAmigos');
var Contador = 0;

// Agregar Amigo
function agregarAmigo(){
    amigo = document.getElementById("amigo").value;
    if(amigo == ""){
        alert("Ingrese por favor un nombre valido");
    } else{

    Grupoamigos.push(amigo);
    for (i = Contador; i < Grupoamigos.length; i++)
        {
            var li = document.createElement("li");
            li.textContent = Grupoamigos[i];
            listaol1.appendChild(li);
            Contador++
        }
    }
    listaol2.innerHTML = "";
}

function sortearAmigo(){
    let numeroAmigo =  Math.floor(Math.random()*Grupoamigos.length);
    listaol2.innerHTML= "Su amigo secreto es: " + Grupoamigos[numeroAmigo];
    listaol2.style.color = "green";
    listaol1.innerHTML = "";
}
