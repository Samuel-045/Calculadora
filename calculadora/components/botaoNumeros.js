import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Botao = ({valor, click}) => {
  return (
    <TouchableOpacity style={styles.botao}
    onPress={click}
    >
      <Text style={styles.texto}>
        {valor}
      </Text>
    </TouchableOpacity>
  );
}


export default Botao;

const styles = StyleSheet.create({
  botao:{
    backgroundColor: 'blue',
    width: 60,
    height: 50,
    borderRadius: 100,
    margin:10,
    justifyContent: 'center',
  },
  texto:{
    textAlign:'center',
    color: 'white',
    fontSize: 15,
  }
});