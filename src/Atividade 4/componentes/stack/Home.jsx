import React, {Component} from 'react'
import {StyleSheet,View,Text, Button} from 'react-native'
import AddUserScreen from "../../../Atividade 5/components/crud/AddUserScreen"
import ListUserScreen from "../../../Atividade 5/components/crud/ListUserScreen";

export default class Home extends Component{
    render(){
        return(
            <View style={estilos.container}>
                <Button
                    title='Cadastro'
                    onPress={
                        ()=>
                        this.props.navigation.navigate('Cadastro',{})
                    }
                />
                <Button
                    title='IMC'
                    onPress={
                        ()=>
                        this.props.navigation.navigate('IMC',{})
                    }
                />
                <Button
                    title='Sobre'
                    onPress={
                        ()=>
                        this.props.navigation.navigate('Sobre',{})
                    }
                />
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
    },
    texto:{
        fontSize:22,
        fontWeight:'bold',
        fontFamily:'Arial'
    }
})