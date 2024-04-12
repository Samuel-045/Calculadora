import {TouchableOpacity, Text, StyleSheet} from 'react-native';

const BtnIgual = ({click}) => {
  return(
    <TouchableOpacity style={styles.botao}
    onPress={click}>
      <Text style={styles.textoBtIgual}>
        =
      </Text>
    </TouchableOpacity>
  );
}
export default BtnIgual

const styles = StyleSheet.create({
  botao:{
    backgroundColor: "#FFD043",
    width: 60,
    height: 50,
    borderRadius: 100,
    margin:10,
    justifyContent: 'center',
  },
  textoBtIgual: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
});
