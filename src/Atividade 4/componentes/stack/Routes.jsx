import Home from './Home'
import Sobre from './Sobre'
import Cadastro from './Cadastro'
import IMC from './IMC'

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


const Pilha = createStackNavigator()

function Routes(){
    return(
        <NavigationContainer>
            <Pilha.Navigator
                initialRouteName='Home'
            >
                <Pilha.Screen
                    name='Home'
                    component={Home}
                    options={{title:'ATV.4'}}
                />
                <Pilha.Screen
                    name='Cadastro'
                    component={Cadastro}
                />
                <Pilha.Screen
                    name='IMC'
                    component={IMC}
                />
                <Pilha.Screen
                    name='Sobre'
                    component={Sobre}
                />
                
            </Pilha.Navigator>
        </NavigationContainer>
    )
}

export default Routes