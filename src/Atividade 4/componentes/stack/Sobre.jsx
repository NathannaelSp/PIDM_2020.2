import React, {Component} from 'react'
import {StyleSheet,View,Text, Button} from 'react-native'


export default class Sobre extends Component{
    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.texto}>
                    Sou estudante de Design Digital, especializado em Identidade visual.
                    <br>
                    </br>
                    <br>
                    </br>
                    Aplicação designada para a cadeira de PIDM.
                </Text>
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    container:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    texto:{
        fontSize:20,
        fontWeight:'bold',
        fontFamily:'Arial',
        padding:10
    }
})