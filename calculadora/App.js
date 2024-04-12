import React,{useState} from 'react';
import {View, SafeAreaView, StyleSheet,ImageBackground} from 'react-native';

import Botao from './components/botaoNumeros';
import Operacoes from './components/botaoAcoes';
import BtnIgual from  './components/botaoIgual';
import Campo from './components/tela';

export default function App() {
  let [valorTela,setValorTela]=useState("")
  let [acumulado,setAcumulado]=useState(0)
  
  let resultado = 0 

  const zero = () =>{
    setValorTela(valorTela+"0")
  }
  const um = () =>{
    setValorTela(valorTela+"1")
  }
  const dois = () =>{
    setValorTela(valorTela+"2")
  }
  const tres = () =>{
    setValorTela(valorTela+"3")
  }
  const quatro = () =>{
    setValorTela(valorTela+"4")
  }
  const cinco = () =>{
    setValorTela(valorTela+"5")
  }
  const seis = () =>{
    setValorTela(valorTela+"6")
  }
  const sete = () =>{
    setValorTela(valorTela+"7")
  }
  const oito = () =>{
    setValorTela(valorTela+"8")
  }
  const nove = () =>{
    setValorTela(valorTela+"9")
  }

  const soma = () =>{
    opr='soma'
    setAcumulado(valorTela)
    setValorTela("")
  }
  const subtracao = () =>{
    opr='subt'
    setAcumulado(valorTela)
    setValorTela("")
  }
  const multiplicacao = () =>{
    opr='mult'
    setAcumulado(valorTela)
    setValorTela("")
  }
  const divisao = () =>{
    opr='divi'
    setAcumulado(valorTela)
    setValorTela("")
  }

  const calculo = () => {
    if(opr==="soma"){
      setValorTela(parseInt(acumulado) + parseInt(valorTela))
    }else if (opr==="subt"){
      setValorTela(parseInt(acumulado) - parseInt(valorTela))
    }else if (opr==="mult"){
      setValorTela(parseInt(acumulado) * parseInt(valorTela))
    }else if (opr === "divi" ){
      setValorTela(parseInt(acumulado) / parseInt(valorTela))
    }else{
      resultado = valorTela
    }


  }

  const limpar = () =>{
    setValorTela(" ")
    setAcumulado(" ")
  }

  return (
    <ImageBackground source={require("./assets/fundo.png")} imageStyle={{opacity: 0.6}}>
      <SafeAreaView style={styles.container}>
            
        <View style={styles.tela}>
        
          <View>
            <Campo valor={String(valorTela)}/>
          </View>

          <View style={styles.todosOsBotoes}>

            <View style={styles.botoesNms}>
              <Botao click={zero} valor= "0"/>
              <Botao click={um} valor= "1"/>
              <Botao click={dois} valor= "2"/>
              <Botao click={tres} valor= "3"/>
              <Botao click={quatro} valor= "4"/>
              <Botao click={cinco} valor= "5"/>
              <Botao click={seis} valor= "6"/>
              <Botao click={sete} valor= "7"/>
              <Botao click={oito} valor= "8"/>
              <Botao click={nove} valor= "9"/>

              <Operacoes click={limpar} valor="AC" />
              <BtnIgual click={calculo} />
            </View>

            <View style={styles.botoesAcs}>
              <Operacoes valor="+" click={soma} />
              <Operacoes valor="-" click={subtracao}/>
              <Operacoes valor="*" click={multiplicacao} />
              <Operacoes valor="/" click={divisao} />
            </View>
            
          </View>

        </View>
        
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    alignItems: 'center',
  },
  tela:{
    width: 350,
    height:2000,
  },
  todosOsBotoes:{
    marginTop: 30,
    backgroundColor: "black",
    borderRadius: 5,
    flexDirection: 'row',
  },
  botoesNms: {
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    //borderWidth:5,
    width: 250,
  },
  botoesAcs:{
    //borderWidth: 5,
    width: 90,
  },
});
