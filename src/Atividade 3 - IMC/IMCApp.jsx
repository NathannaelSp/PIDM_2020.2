import React, {Component} from 'react'
import {View,Text,TextInput,Button} from 'react-native'
import IMCCalc from './IMCCalc';

export default class IMCApp extends Component {
    constructor(props){
        super(props)
        this.state = {altura:null, peso:null, apertou:false};
        this.apertarBotao = this.apertarBotao.bind(this)
    }

    apertarBotao = ()=>{
        if(this.state.altura != null && this.state.peso != null){
            this.setState({apertou:true})
        }
    }

    renderizarCalc(){
        if(this.state.apertou)
        {
            //this.setState({apertou:false})
            return(
                <IMCCalc altura={this.state.altura} peso={this.state.peso}/>
            )
        }
            
        return null
    }

    render(){
        return(
        <View>
            <TextInput
                style={{height:50, fontSize:26}}
                placeholder='Digite a sua altura'
                onChangeText={(altura)=>this.setState({altura})}
                
            />
            <TextInput
                style={{height:50,fontSize:26}}
                placeholder='Digite o seu peso'
                onChangeText={(peso)=>this.setState({peso})}
            />
            <Button
                title='Calcular IMC'
                onPress={this.apertarBotao}
            
            />
            {this.renderizarCalc()}
        </View>
        )
    }
}