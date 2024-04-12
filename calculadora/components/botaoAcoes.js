import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const Operacoes = ({valor,click}) => {
  return(
    <TouchableOpacity style={styles.botao}
    onPress={click}>
      <Text style={styles.texto}>
        {valor}
      </Text>
    </TouchableOpacity>
  );
}
export default Operacoes

const styles = StyleSheet.create({
  botao:{
    backgroundColor: 'white',
    width: 60,
    height: 50,
    borderRadius: 100,
    margin:10,
    justifyContent: 'center',
  },
  texto:{
    textAlign:'center',
    color: 'blue',
    fontSize: 15,
  }
});