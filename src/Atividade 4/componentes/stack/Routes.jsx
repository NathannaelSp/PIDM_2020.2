import Home from './Home'
import Sobre from './Sobre'
import Cadastro from './Cadastro'
import IMC from './IMC'

import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'


import EditUserScreen from "../../../Atividade 5/components/crud/EditUserScreen"
import AddUserScreen from "../../../Atividade 5/components/crud/AddUserScreen";
import ListUserScreen from "../../../Atividade 5/components/crud/ListUserScreen";

const MainStack = createStackNavigator()

function MainStackScreen(){
    return(
        <NavigationContainer>
            <MainStack.Navigator initialRouteName='NavegadorApp'>
                    <MainStack.Screen
                        name='NavegadorApp'
                        component={NavegadorApp}
                        options={{title: 'Home'}}
                    />

                    <MainStack.Screen
                        name='AddUserScreen'
                        component={AddUserScreen}
                        options={{title: 'Add New User'}}
                    />
                    
                    <MainStack.Screen
                        name='ListUserScreen'
                        component={ListUserScreen}
                        options={{title: 'List Users'}}
                    />
                    
                    <MainStack.Screen
                        name='EditUserScreen'
                        component={EditUserScreen}
                        options={{title: 'Edit User'}}
                    />
                
            </MainStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes