import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import AddUserScreen from "./AddUserScreen"
import ListUserScreen from "./ListUserScreen"
import EditUserScreen from "./EditUserScreen"
import navegadorApp from "../../../Atividade 4/componentes/stack/Home"
import About from "../../../Atividade 4/componentes/stack/Sobre";


const MainStack = createStackNavigator()

function MainStackScreens() {
    return(
        <NavigationContainer>
            <MainStack.Navigator>

                <MainStack.Screen
                    name='Home'
                    component ={navegadorApp}
                    options={{title:'ClassMon'}}
                />

                <MainStack.Screen
                    name = 'AddUserScreen'
                    component = {AddUserScreen}
                    options={{title:'Add New User'}}
                />

                <MainStack.Screen
                    name = 'ListUserScreen'
                    component = {ListUserScreen}
                    options={{title:'List Users'}}
                />

                <MainStack.Screen
                    name = 'EditUserScreen'
                    component = {EditUserScreen}
                    options={{title:'Edit User'}}
                />

                <MainStack.Screen
                    name='About'
                    component ={About}
                    options={{title:'Sobre'}}
                />

            </MainStack.Navigator>
        </NavigationContainer>

    )

}

export default MainStackScreens