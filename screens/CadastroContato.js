import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput } from 'react-native';
import axios from 'axios';

export default function CadastroContato({ navigation }) {

  const [emailUser,setEmail] = useState("");
  const [nomeUser,setNome] = useState("");
  const [telefoneUser,setTelefone] = useState("");

  const contato={
    nome: nomeUser,
    email: emailUser,
    telefone: telefoneUser
  }

  const handleChangeNome = (e) => setNome(e);
  const handleChangeEmail = (e) => setEmail(e);
  const handleChangeTelefone = (e) => setTelefone(e);

  function addContato(contato){
    axios.post("http://professornilson.com/testeservico/clientes",contato).then((response) => {
      console.log('adicionado!')
    }).catch(function (error){
      console.log(error);
    });
  }
  
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>nome</Text>
      <TextInput style={styles.input} onChangeText={handleChangeNome} />
      <Text style={styles.title}>email</Text>
      <TextInput style={styles.input} onChangeText={handleChangeEmail} />
      <Text style={styles.title}>telefone</Text>
      <TextInput style={styles.input} onChangeText={handleChangeTelefone} />
      <br />
      <Button
        title="Salvar"
        onPress={() => {
          addContato(contato);
          navigation.navigate('ListaContatos');
        }}
      />
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
    margin: 12,
    textAlign: 'left',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
