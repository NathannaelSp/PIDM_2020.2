import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Disciplina extends Component{
    render(){
        return(
            <View>
                <Text>Disciplina: <strong>{this.props.nome}</strong></Text>
            </View>
        )
    }
}