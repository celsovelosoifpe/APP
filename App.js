import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroUsuario from './screens/CadastroUsuario'
import ListaContatos from './screens/ListaContatos'
import CadastroContato from './screens/CadastroContato'
import AlterarExcluirContato from './screens/AlterarExcluirContato'
import Login from './screens/Login'

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CadastroUsuario" component={CadastroUsuario} />
        <Stack.Screen name="ListaContatos" component={ListaContatos} />
        <Stack.Screen name="AlterarExcluirContato" component={AlterarExcluirContato} />
        <Stack.Screen name="CadastroContato" component={CadastroContato} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
