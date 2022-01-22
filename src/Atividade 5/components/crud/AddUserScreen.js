import React, {useState} from 'react'
import {View,Text, Button,TextInput,ScrollView,StyleSheet} from 'react-native'

import firebase from '../../../../firebase/firebase_config'


const AddUserScreen = (props) => {

    const initialState = {nome:'',sobrenome:'',curso:''}
    const [state, setState] = useState(initialState)

    const addNewUser = async ()=>{
        try{
            await firebase.db
            .collection('alunos')
            .add({
                nome: state.nome,
                sobrenome: state.sobrenome,
                curso: state.curso
            })
            props.navigation.navigate('ListUserScreen')
        }catch(error){
            console.log(error)
        }
    }

    const handleChangeText = (value,name) => {
        setState({...state, [name]:value})

    }

    return(
        <ScrollView style={styles.container}>

            <View style={styles.textInput}>
                <TextInput
                    placeholder='Nome'
                    value={state.nome}
                    onChangeText={(value) => handleChangeText(value, 'nome')}
                />
            </View>

            <View style={styles.textInput}>
                <TextInput
                    placeholder='Sobrenome'
                    value={state.sobrenome}
                    onChangeText={(value) => handleChangeText(value, 'sobrenome')}
                />
            </View>
            
            <View style={styles.textInput}>
                <TextInput
                    placeholder='Curso'
                    value={state.curso}
                    onChangeText={(value) => handleChangeText(value, 'curso')}
                />
            </View>
            <View>
                <Button title='Add User' onPress={()=> addNewUser()}/>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding: 35

    },
    textInput: {
        flex:1,
        padding:0,
        top:0,
        marginBottom:15,
        borderBottomWidth: 2,
        borderBottomColor:'#458ca7'

    }
})


export default AddUserScreen;
