let cateto_oposto = "";
let cateto_adjacente = "";
let hipotenusa = "";

function encontrarValores(){
    let cateto_oposto = document.getElementById("cateto_op").value;
    let cateto_adjacente = document.getElementById("cateto_adj").value;
    let hipotenusa = document.getElementById("hipotenusa").value;

    if (cateto_oposto == 0){
        cateto_oposto = Math.sqrt(hipotenusa**2 - cateto_adjacente**2).toFixed(2);
        document.getElementById("valor").innerHTML = cateto_oposto;
    }
    else
    if (cateto_adjacente == 0){
        cateto_adjacente = Math.sqrt(hipotenusa**2 - cateto_oposto**2).toFixed(2);
        document.getElementById("valor").innerHTML = cateto_adjacente;
    }
    else
    if (hipotenusa == 0) {
        hipotenusa = Math.sqrt(cateto_oposto**2 + cateto_adjacente**2).toFixed(2);
        document.getElementById("valor").innerHTML = hipotenusa;
    }
}
