import cipher from './cipher.js';

//console.log(cipher);

const codeA = document.getElementById("codeA");
codeA.addEventListener("click", function() {
   const mensaje=document.getElementById("mensaje").value;
   const offset=document.getElementById("offset").value;
   if(mensaje.length==0){
      document.getElementById("mensajeResultado").innerHTML=("Por favor, escribe un mensaje");
      return;}

    if ( offset==0) {
      document.getElementById("mensajeResultado").innerHTML=("Por favor, escribe un número");
      return;} 

   document.getElementById("mensajeResultado").innerHTML= (cipher.encode(offset,mensaje)) 
})


const decodeB = document.getElementById("decodeB");
decodeB.addEventListener("click", function() {

   let mensaje2=document.getElementById("mensaje").value;
   let offset2=document.getElementById("offset").value;

   if(mensaje2.length==0){
      document.getElementById("mensajeResultado").innerHTML=("Por favor, escribe un mensaje");
      return;}

   if ( offset2==0) {
      document.getElementById("mensajeResultado").innerHTML=("Por favor, escribe un número");
      return;}

   document.getElementById("mensajeResultado").innerHTML= (cipher.decode(offset2,mensaje2)) 
})

