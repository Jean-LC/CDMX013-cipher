const cipher = {
  encode: function(offset,mensaje)
  {

      if(offset == "")  throw(TypeError("Coloca un número"));
      if(offset == null)  throw(TypeError("Coloca un número"));
    

    
    let newOffset=parseInt(offset)
    
    let resultado= "";

    for (let i = 0; i < mensaje.length; i++){
      let mensajeBase = mensaje.charCodeAt(i);
    
      if (mensajeBase >= 65 && mensajeBase <= 90){
      let mensajeAltas=String.fromCharCode((mensajeBase - 65 + newOffset) %26 + 65)
      resultado += mensajeAltas;

    } else { 
      if (mensajeBase >= 97 && mensajeBase <= 122){
        let mensajeBajas=String.fromCharCode((mensajeBase - 97 + newOffset) %26 + 97)
        resultado += mensajeBajas;
  
      } else {
          resultado += String.fromCharCode(mensajeBase);    
    }
  }
  }    
  return resultado
    },

    decode: function(offset2,mensaje2)
    {

      if(offset2 == "")  throw(TypeError("Coloca un número"));
      if(offset2 == null)  throw(TypeError("Coloca un número"));

      let newOffset2=parseInt(offset2)
  
      let resultado2= "";
  
      for (let i = 0; i < mensaje2.length; i++){
        let mensajeBase2 = mensaje2.charCodeAt(i);
       
        if (mensajeBase2 >= 65 && mensajeBase2 <= 90){
        let mensajeAltas2=String.fromCharCode(( mensajeBase2 + 65 - newOffset2) % 26   + 65)
        resultado2 += mensajeAltas2;

      } else { 
        if (mensajeBase2 >= 97 && mensajeBase2 <= 122){
          let mensajeBajas2=String.fromCharCode((mensajeBase2 + 97 + newOffset2) %26 + 97)
          resultado2 += mensajeBajas2;
    
        } else {
            resultado2 += String.fromCharCode(mensajeBase2);    
        }
       }  
    }    
    return resultado2
      } }

export default cipher;
