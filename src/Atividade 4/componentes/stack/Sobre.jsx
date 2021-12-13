import React, {Component} from 'react'
import {StyleSheet,View,Text, Button} from 'react-native'

export default class Sobre extends Component{
    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.texto}>Página Sobre</Text>
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