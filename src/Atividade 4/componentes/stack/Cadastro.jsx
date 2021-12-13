import React, {Component} from 'react'
import {StyleSheet,View,Text, Button, TextInput} from 'react-native'

export default class BotaoInput extends Component{
    constructor(props){
        super(props)
        this.state = {text: ''}
    }

    render() {
        return (
            <View style={estilos.container}>

                <Text style={estilos.headerText}>
                    Nome
                </Text>
                <TextInput
                    style={estilos.textInput}
                    onChangeText={(nome) => this.setState({ nome })}
                    placeholder="Digite aqui o seu nome"
                />

                <Text style={estilos.headerText}>
                    Idade
                </Text>
                <TextInput
                    style={estilos.textInput}
                    onChangeText={(idade) => this.setState({ idade })}
                    placeholder="Digite aqui sua idade"
                />

                <Text style={estilos.headerText}>
                    Email
                </Text>
                <TextInput
                    style={estilos.textInput}
                    onChangeText={(email) => this.setState({ email })}
                    placeholder="Digite aqui o seu email"
                />

                <View style={estilos.viewButton}>
                    <Button
                        title="Ok"
                        onPress={()=>{
                            alert(this.state.nome)
                            alert(this.state.idade)
                            alert(this.state.email)
                        }}
                    />
                </View>
            </View>
        );
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