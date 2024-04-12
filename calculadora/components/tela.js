import {View, StyleSheet,ScrollView, TextInput} from 'react-native';

const Campo = ({valor,res}) =>{
  return(
    <TextInput placeholder={""} 
            style={styles.input} 
            value={valor}/>
  )
}
export default Campo

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'gray',
    textAlign: 'right',
    color: 'white',
    fontSize:30,
    padding:20,
    height:100,
    borderWidth:4,
    borderRadius: 5
  },
})