import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

export default class BotaoInput extends Component {
    constructor(props) {
        super(props)
        this.state = {text: ''}
    }


    
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5"
    },
    headerText: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
        fontWeight: "bold"
    },
    textInput: {
        height: 45,
        width: "95%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft: 20
    },
    viewButton: {
        width: "93%",
        margin: 15,
        backgroundColor: "red"

    }
});