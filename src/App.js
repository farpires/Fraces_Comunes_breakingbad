import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Frase({frase}){
return(
  <div className="frase">
   <h1>{frase.quote}</h1>
   <p>{frase.author}</p>
  </div>
)
}

function App(props) {

const [frase, ObetnerFrase] = useState({});


const consultarAPI= async () =>{
  const resultado = await axios('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
  // console.log(resultado.data[0]);
  //agregar el resultado de la API al state (similar a this.setState)
   ObetnerFrase(resultado.data[0]);
}
  
//consultaa una rest api
useEffect(() => {
  consultarAPI();
  },[])


//  console.log(frase); //frase= this.state
  return(
    <div className="contenedor">
      <Frase
      frase={frase}
      />
      <button
      onClick={consultarAPI}
      >Generar Nuevas</button>
    </div>
  )
}
 

export default App;

