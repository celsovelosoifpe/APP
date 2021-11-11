import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput } from 'react-native';
import axios from 'axios';

export default function AlterarExcluirContato({ route, navigation }) {
  
  const { id, nome, cpf, email, telefone } = route.params;

  const [emailUser,setEmail] = useState(email);
  const [nomeUser,setNome] = useState(nome);
  const [telefoneUser,setTelefone] = useState(telefone);

  const contato={
    id: id,
    nome: nomeUser,
    email: emailUser,
    telefone: telefoneUser
  }

  const handleChangeNome = (e) => setNome(e);
  const handleChangeEmail = (e) => setEmail(e);
  const handleChangeTelefone = (e) => setTelefone(e);

  function excluirContato(id){
    axios.delete(`http://professornilson.com/testeservico/clientes/${id}`).then((response) => {
      console.log('excluido!')
    }).catch(function (error){
      console.log(error);
    });
  }

  function alterarContato(contato){
    axios.put(`http://professornilson.com/testeservico/clientes/${contato.id}`,contato).then((response) => {
      console.log('alterado!')
    }).catch(function (error){
      console.log(error);
    });
  }

  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>nome</Text>
      <TextInput style={styles.input} value={nomeUser} onChangeText={handleChangeNome} />
      <Text style={styles.title}>email</Text>
      <TextInput style={styles.input} value={emailUser} onChangeText={handleChangeEmail} />
      <Text style={styles.title}>telefone</Text>
      <TextInput style={styles.input} value={telefoneUser} onChangeText={handleChangeTelefone} />
      <br />
      <Button
        title="Alterar"
        onPress={() => {
          alterarContato(contato);
          navigation.navigate('ListaContatos');
        }}
      />
      <br />
      <Button
        title="Excluir"
        onPress={() => {
            excluirContato(id);
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
