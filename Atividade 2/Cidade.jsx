/*import React, {Component} from 'react';
import {View, Text, Button, StyleSheet}  from 'react-native'

export default class Cidade extends Component{
    constructor(props){
        super(props)
        this.state={
            Fortaleza:0,
            Quixada:0,
            Limoeiro:0,
            Juazeiro:0
        }
        this.voteFortaleza = this.voteFortaleza.bind(this)
        this.voteQuixada = this.voteQuixada.bind(this)
        this.voteLimoeiro = this.voteLimoeiro.bind(this)
        this.voteJuazeiro = this.voteJuazeiro.bind(this)
    }



    voteFortaleza(){
        this.setState({Fortaleza:this.state.Fortaleza+1})
    }
    voteQuixada(){
        this.setState({Fortaleza:this.state.Quixada+1})
    }
    voteLimoeiro(){
        this.setState({Fortaleza:this.state.Limoeiro+1})
    }
    voteJuazeiro(){
        this.setState({Fortaleza:this.state.Juazeiro+1})
    }



    render(){

        const {Fortaleza,Quixada,Limoeiro,Juazeiro} = this.state;

        return(
            <View style={style.container}>
                <View style={style.cabecalho}>
                    <h1>Votação em Cidades</h1>
                </View>

                <View style={style.cidades}>
                    <Text style={{color: '#ffffff', fontWeight:'bold', fontSize:18}}>Fortaleza: {Fortaleza} voto(s)</Text>
                    <Text style={{color: '#ffffff', fontWeight:'bold', fontSize:18}}>Quixadá: {Quixada} voto(s)</Text>
                    <Text style={{color: '#ffffff', fontWeight:'bold', fontSize:18}}>Limoeiro: {Limoeiro} voto(s)</Text>
                    <Text style={{color: '#ffffff', fontWeight:'bold', fontSize:18}}>Juazeiro: {Juazeiro} voto(s)</Text>
                </View>
                
                <View style={style.maismenoempat}>
                    <Text style={{color:'#52D315', fontWeight:'bold'}}>Mais votadas:</Text>
                    <Text style={{color:'#FF365A', fontWeight:'bold'}}>Menos Votadas:</Text>
                    <Text style={{color:'#15BDD3', fontWeight:'bold'}}>Empatadas:</Text>
                </View>

                <View style={style.buttons}>
                    <Button color='#36DB96' title='FORTALEZA' onPress={this.voteFortaleza}/>
                    <Button color='#36DB96' title='QUIXADÁ'onPress={this.voteQuixada}/>
                    <Button color='#36DB96' title='LIMOEIRO'onPress={this.voteLimoeiro}/>
                    <Button color='#36DB96' title='JUAZEIRO'onPress={this.voteJuazeiro}/>
                </View>
            </View>

        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#1F1F1F',   
    },
    cabecalho: {
        fontFamily:'Montserrat',
        fontSize:'13px',
        alignSelf: 'center',
        color: '#36DB96',
        marginTop: 40,
    },
    maismenoempat:{
        marginLeft:15

    },
    cidades: {
        fontFamily:'Montserrat',
        margin: 15,
    },
    buttons:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop: 18,
        tintColor: '#f4e789',

    }
    

})*/