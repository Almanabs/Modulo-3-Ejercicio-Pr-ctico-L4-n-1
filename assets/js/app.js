window.alert("para el conjunto de los enteros. adivine el numero del 1 al 10. tienes 3 oportunidades");

numAzar=(Math.floor(Math.random() * 10)) + 1;

let lista=[]
for (let i=0;i<3;i++){
    verificador=0;
    while (verificador==0){
        contador=i+1;
        var num = parseFloat(prompt("intento numero " + contador + ":"));
        if (num>10){window.alert("el numero es mayor que 10");}
        else if(num<=0){window.alert("el numero es menor que 10");}
        else{ 
            if(num==numAzar && revisarLista(lista,num)===true){
                window.alert("has acertado");
                document.write("ganaste");
                i=3;
                verificador=1;}
                else if(num!=numAzar && revisarLista(lista,num)===true){
                    window.alert("no has acertado");
                    if (i==2){ 
                        document.write("se acabaron los intentos");
                        document.write("</br> el numero era "+ numAzar);
                        verificador=1;}
                else{verificador=1; }
    
                 }
         }
    }
  }

  function revisarLista(lista, numero){
    if(lista.length===0){ 
        lista.push(numero);
        return true;
    }
    for (let i=0;i<lista.length;i++) {
        if (lista[i]==numero){ 
            window.alert("ya has elegido este numero.");
            return false;
        }
        else if(i==(lista.length-1) && [i]!=numero){ 
            lista.push(numero);
            return true;
        }
    }
      } 

    