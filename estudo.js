let tabuada = 6;
let nome = "Vitor";
function escreva(){
    document.write("Tabuada do " + tabuada + "<br>");
     document.write(tabuada+ " x 1 = "+(tabuada*1)+"<br>");
     document.write (tabuada+ " x 2 = "+(tabuada*2)+"<br>");
     document.write (tabuada+ " x 3 = "+(tabuada*3)+"<br>");
     document.write(tabuada+ " x 4 = "+(tabuada*4)+"<br>");
     document.write (tabuada+ " x 5 = "+(tabuada*5)+"<br>");
     document.write (tabuada+ " x 6 = "+(tabuada*6)+"<br>");
     document.write(tabuada+ " x 7 = "+(tabuada*7)+"<br>");
     document.write (tabuada+ " x 8 = "+(tabuada*8)+"<br>");
     document.write (tabuada+ " x 9 = "+(tabuada*9)+"<br>");
     document.write(tabuada+ " x 10 = "+(tabuada*10)+"<br>");
     document.write ("Feito por " + nome);
}

function minhaTabuada(){
    for(let i = 1; i <= 10; i++){
        document.write("Tabuada do " + i + "<br>");
        for(let j = 1; j <= 10; j++){
            document.write (i + " x " + j + " = "+(j*i)+"<br>");    
        }
    document.write("<br>");

    }
        
    
}

function quadrado(){
    for(let i = 16; i <= 20;){
        document.write("O quadrado de " + i + " é " + (i*i)+ "<br>");
    }
}
function moeda(atual){
    return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}

function calcula(){
    let c = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
  
    if (!Number(c)){
        alert("Por favor use números!")
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return
    }
    if (!Number(j)){
        alert("Por favor use números!")
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return
    }
    let r = c *(1 + (j/100));{
    document.write("Resultado: " + moeda(r));
}
}

let op = "";
 function operacao(ope){
    op = ope;

 } 

 function calcule(){
    let v1 = document.getElementById("v1").value;
    let v2 = document.getElementById("v2").value;
    let r = 0;
    
    if(op === "+"){
        r = Number(v1) + Number(v2);
    }
    if(op === "-"){
        r = Number(v1) - Number(v2);
    }
    if(op === "*"){
        r = Number(v1) * Number(v2);
    }
    if(op === "/"){
        r = Number(v1) / Number(v2);
    }


    
    document.getElementById("resultado").innerHTML = r;

 }
