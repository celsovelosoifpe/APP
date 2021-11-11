import React, { useState, useEffect } from 'react';
import { Button, View, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import axios from 'axios';

export default function ListaContatos({ navigation }) {
  
  const [dados,setDados] = useState([]);

  useEffect(()=>{
    function resgatarDados(){
      axios('http://professornilson.com/testeservico/clientes')
      .then((response) => setDados(response.data))
      .catch(function (error){
        console.log(error);
      });
    }
    resgatarDados();
  },[]);

  return (

    <View>
    <Button
      title="Cadastro de Contato"
      onPress={() => navigation.navigate('CadastroContato')}
    />
    <ScrollView>
        {
          dados.map((l, i) => (
            <ListItem key={i} bottomDivider onPress={() => {
              navigation.navigate('AlterarExcluirContato',{
                id: l.id,
                nome: l.nome,
                cpf: l.cpf,
                email: l.email,
                telefone: l.telefone,
              })
            }}>
              <Avatar source={{ uri: 'https://png.pngtree.com/png-vector/20190221/ourlarge/pngtree-female-user-vector-avatar-icon-png-image_691506.jpg' }} />
              <ListItem.Content>
                <ListItem.Title>{l.nome}</ListItem.Title>
                <ListItem.Subtitle>{l.telefone}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
          ))
        }
      </ScrollView>      
    </View>
  );

}