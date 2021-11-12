import * as React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, TextInput } from 'react-native';
import { initializeApp } from "firebase/app";
import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword  } from "firebase/auth";

export default function CadastroUsuario({ navigation }) {
  
    const [email,setEmail] = useState("");
    const [senha,setSenha] = useState("");
  
    const firebaseConfig = {
      apiKey: "AIzaSyB6hzsKCzbiTzdu6olYKM0E-n6U297NL5w",
      authDomain: "react-app-48008.firebaseapp.com",
      projectId: "react-app-48008",
      storageBucket: "react-app-48008.appspot.com",
      messagingSenderId: "998561325432",
      appId: "1:998561325432:web:68b4b29f004ef248b5a88d"
    };
  
    const app = initializeApp(firebaseConfig);
  
    function cadastrarFirebase(){
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, senha)
        .then((userCredential) => {
          const user = userCredential.user;
          navigation.navigate('Login');
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  
    return (
      <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>email</Text>
        <TextInput style={styles.input} value={email} onChangeText={email => setEmail(email)} />
        <Text style={styles.title}>senha</Text>
        <TextInput style={styles.input} secureTextEntry={true} value={senha} onChangeText={senha => setSenha(senha)} />
        <br />
        <Button
          title="Salvar"
          onPress={() => {cadastrarFirebase()}}
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