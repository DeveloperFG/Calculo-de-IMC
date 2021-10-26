import { StatusBar } from "expo-status-bar";
import React, { useState, } from "react";
import { Alert, Button, Text, TextInput } from "react-native";


import {Container, Titulo, Titulo1, Area, InputIdade, InputAltura, 
  InputPeso ,PlanodeFundo, Avaliacao, BtCalcular, BtTexto} from './styles'



function App(){

  const image = require('./src/cuidados.png')

  const [nome, setNome] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('')
 
  function Res(){
      const imc = peso/ (altura*altura)
    
        if(imc < 18.5){
        setResultado( `Nome: ${nome} / IMC => ${imc.toFixed(2)}` + " " + 'Resultado: "Magreza"');

      }else if ( imc < 24.9  ){
        setResultado( `Nome: ${nome} / IMC => ${imc.toFixed(2)}` + " " + 'Resultado: "Normal"');
      } else if ( imc < 30  ){
        setResultado( `Nome: ${nome} / IMC => ${imc.toFixed(2)}` + " " + 'Resultado: "Sobrepeso"');

    }else {
      setResultado( `Nome: ${nome} / IMC => ${imc.toFixed(2)}` + " " + 'Resultado: "Obesidade"');
    }

    setNome("")
    setPeso("")
    setAltura("")

 }
 
  

    
return(
    
    <Container>
      <PlanodeFundo source={image}>
         <Titulo> Calculo de IMC </Titulo>
      <Area>
        <StatusBar backgroundColor="black"  hidden={false} barStyle="light-content"/>
       
        <Titulo1> Nome: </Titulo1>
        <InputIdade
          keyboardType= 'numeric'
          placeholder= 'Ex: 25'
          value={nome}
          onChangeText={(nome)=>setNome(nome)}
        />

      </Area>

      <Area>
       
        <Titulo1> Peso: </Titulo1>
        <InputPeso
          keyboardType='numeric'
           placeholder= 'Ex: 80'
           value={peso}
            onChangeText={ (peso) =>setPeso(peso) } 
       />
        
      </Area>

      <Area>
       
        <Titulo1> Altura: </Titulo1>
        <InputAltura
          keyboardType= 'numeric'
          placeholder= 'Ex: 1.70'
          value={altura}
          onChangeText={(altura)=>setAltura(altura)} 

        />
        
       </Area>

          <Avaliacao> {resultado} </Avaliacao>   
          
        <BtCalcular onPress={Res}>
            <Text style={{textAlign:'center', padding:10, color:'#fff', fontSize:20}}
            > Calcular IMC </Text>
          </BtCalcular>

       </PlanodeFundo>

    </Container>
    


  )


}

export default App;