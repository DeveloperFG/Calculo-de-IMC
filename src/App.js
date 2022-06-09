
import { useState} from 'react'
import './app.css';

 export default function App(){

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState("");
  
  const [mensagem, setMensagem] = useState("");

  function CalcularIMC(){
    const alt = altura / 100;
    const imc = peso / (alt*alt);

    if(imc < 18.6){
    setMensagem( <h2 style={{color:'blue'}}> Você estar abaixo do peso, seu IMC: {imc.toFixed(2)} </h2>)

    }else if( imc >= 18.6 && imc < 24.9 ){
      setMensagem(<h2 style={{color:'green'}}> Peso ideal seu IMC e: {imc.toFixed(2)} </h2>)

  }else if(imc >= 24.9 && imc < 34.9 ){
    setMensagem(<h2 style={{color:'	#D2691E'}}> Levemente acima do peso, seu IMC e: {imc.toFixed(2)} </h2>)

  }else if( imc > 34.9){
    setMensagem(<h2 style={{color:'red'}}> Cuidado: obesidade! seu IMC e: {imc.toFixed(2)} </h2>)
  }

 }


  return(
    <div className='background'>
    <div className="app" > 
    
      <h1> Calcular IMC </h1>
       <span>Preencha os campos abaixo</span>

    <div className="area-input">
      <input
        type='text'
        placeholder='Peso em (kg) Ex:90'
        value={peso}
        onChange={(e) => setPeso(e.target.value)}
      />
      <input
        type='text'
        placeholder='Altura em (cm) Ex:180'
        value={altura}
        onChange={(e) => setAltura (e.target.value)}
     />

      <button onClick={CalcularIMC}>
        Calcular
      </button>
    </div>
  
    <h2> {mensagem} </h2> 
    
     </div>
    </div>
  )

}