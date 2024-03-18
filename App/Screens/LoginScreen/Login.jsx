import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { React } from 'react';
import Colors from '../../Utils/Colors';

export default function Login() {
  return (
    <View style={{alignItems: 'center'}}>
      <Image source={require('../../../assets/images/login.png')} 
        style={styles.loginImage}
      />
      <View style={styles.subContainer}>
        <Text style={{fontSize: 27, color: Colors.WHITE, textAlign: 'center'}}>
         Encontre um <Text style={{fontWeight: 'bold'}}>Profissional</Text> para <Text style={{fontWeight: 'bold'}}>limpeza ou reparos</Text>
        </Text> 
        <Text style={{fontSize: 10, color: Colors.WHITE, textAlign: 'center', marginTop: 20}}>Melhor lugar para encontrar serviços que entregarão perto de você</Text>

        <TouchableOpacity style={styles.button} onPress={()=>console.log("Botão iniciar")}>
          <Text style={{textAlign: 'center', fontSize: 17, color: Colors.PRIMARY}}>Vamos começar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 loginImage:{
  width:230,
  height: 450,
  borderWidth: 4,
  borderColor: Colors.BLACK,
  borderRadius: 14
 },
 subContainer: {
  width: '100%',
  backgroundColor: Colors.PRIMARY,
  height: '70%',
  marginTop: -20,
  borderTopLeftRadius: 30,
  borderTopRightRadius: 30,
  padding: 20
 },
 button:{
  padding: 15,
  backgroundColor: Colors.WHITE,
  borderRadius: 99,
  marginTop: 40
 }
})