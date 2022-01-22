import React, {useEffect, useState} from "react";
import {View,Text, ScrollView, Button, ActivityIndicator, StyleSheet} from 'react-native'
import { TextInput } from "react-native-gesture-handler";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react/cjs/react.production.min";
import firebase from '../../../../firebase/firebase_config'

const EditUserScreen = (props) => {
    const initialState = {id:'', nome:'',sobrenome:'',curso:''}
    const [user, setUser] = useState(initialState)

        useEffect(
            ()=>{ 
                getUserById (props.route.params.userId)
            },
            []
        )

    const handleChangeText = (value,props) =>{
        setUser({...user, [props]:value})
    }

    const getUserById = async (id) =>{
        const dbRef = firebase.db.collection('alunos').doc(id)
        const doc = await dbRef.get()
        const user = doc.data()
        setUser({...user, id:doc.id})
    }

    const deleteUser = async (id) =>{
        const dbRef = firebase.db.collection('alunos').doc(props.route.params.userId)
        await dbRef.delete()
        props.navigation.navigate('ListUserScreen')
    }


    const updateUser = async () =>{
        const userRef = firebase.db.collection('alunos').doc(user.id)
        await userRef.set({
            nome:user.nome,
            sobrenome:user.sobrenome,
            curso:user.curso
        })
        setUser(initialState)
        props.navigation.navigate('ListUserScreen')

    }
    



    return(
        <ScrollView style={styles.container}>
            <View>
                <TextInput placeholder="Nome"
                style={styles.inputGroup}
                value={user.nome}
                onChangeText={(value)=>handleChangeText(value, 'nome')}
                />
            </View>

            <View>
                <TextInput placeholder="Sobrenome"
                style={styles.inputGroup}
                value={user.sobrenome}
                onChangeText={(value)=>handleChangeText(value, 'sobrenome')}
                />
            </View>

            <View>
                <TextInput placeholder="Curso"
                style={styles.inputGroup}
                value={user.curso}
                onChangeText={(value)=>handleChangeText(value, 'curso')}
                />
            </View>

            <View>
                <Button title="Update"onPress={()=>updateUser()}/>
            </View>
            
            <View style={styles.btn}>
                <Button title="Delete" color='#fd0323'
                onPress={()=>deleteUser()}/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      padding:35

    },
    loader:{

    },
    inputGroup:{
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#5f5f5f'
    },
    btn:{
        marginTop: 8
    }
})

export default EditUserScreen