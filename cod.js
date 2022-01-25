var entradaMensagem = document.getElementById('entradaMensagem');
var opçoes = document.getElementById('opçoes');
var incremento = document.getElementById('incremento');
var btncodificar = document.getElementById('codificar');
var btndecodificar = document.getElementById('decodificar');
var alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
var submit = document.querySelector('#submit');
var saidaMensagem = document.querySelector('.saidaMensagem')


opçoes.addEventListener("change", function () {

    
    if(opçoes.value == 'cifraDeCesar') {
        incremento.style.display = 'block';
    
        
    }else if (opçoes.value == 'base64') {
        incremento.style.display = 'none';
    
    }else {
        alert('Escolha entre Cifra de Cesar ou Base64')
    }
    })



  btncodificar.addEventListener("click", function () {
     submit.style.display = 'block';
     submit.value = 'Codifica!'

  })

  btndecodificar.addEventListener("click", function () {
    submit.style.display = 'block';
    submit.value = 'Decodifica!'

 })


/*  //Funções

   1 - Código de Cesar//  */

function codCesar() {
  var elementoDaMensagem = entradaMensagem.value;
  var mensagemMinuscula = elementoDaMensagem.toLowerCase()
  var transformarNumero = (Number(incremento.value) % 26)
  var mensagemCodificada = '';

  for(var i = 0; i < mensagemMinuscula.length; i++){
     for(var j =0; j < alfabeto.length; j++){
       if(mensagemMinuscula[i] == alfabeto[j]){
         mensagemCodificada += alfabeto [j + transformarNumero]
         break;
     } else if (mensagemMinuscula[i] == ' ') {
         mensagemCodificada += ' ';
         break;
     }
    }
  

}
return mensagemCodificada
}


  function decCesar() {
    var elementoDaMensagem = entradaMensagem.value;
    var mensagemMinuscula = elementoDaMensagem.toLowerCase()
    var transformarNumero = (Number(incremento.value) % 26)
    var mensagemCodificada = '';
  
    for(var i = 0; i < mensagemMinuscula.length; i++){
       for(var j = alfabeto.length - 1; j >= 0; j--){
         if(mensagemMinuscula[i] == alfabeto[j]){
           mensagemCodificada += alfabeto [j + transformarNumero]
           break;
       } else if (mensagemMinuscula[i] == ' ') {
           mensagemCodificada += ' ';
           break;
       }
      }
      
  
  }
  return mensagemCodificada
}
  
function codBase(){
    var elementoDaMensagem = entradaMensagem.value;
    return btoa(elementoDaMensagem);
}

function decBase(){
    var elementoDaMensagem = entradaMensagem.value;
    return atob(elementoDaMensagem);
}





submit.addEventListener('click', function(e){
    e.preventDefault();
    
    if(opçoes.value === "base64"){
        if(submit.value === "Codifica!"){
           
            saidaMensagem.innerText = codBase();
            
        }else{
            
            saidaMensagem.innerText = decBase();
        }
    }else if(opçoes.value === "cifraDeCesar"){
        if(saidaMensagem.value === "Codifica!"){
            saidaMensagem.innerText = codCesar();
            
        }else{
            
            saidaMensagem.innerText = decCesar();
        }
    }
});