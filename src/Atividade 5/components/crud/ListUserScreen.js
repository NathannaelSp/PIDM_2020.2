import React, {useState, useEffect} from "react"
import {View, Text, StyleSheet} from 'react-native'
import { ListItem, Avatar } from "react-native-elements"
import { Button } from "react-native-elements/dist/buttons/Button"
import {ScrollView} from 'react-native-gesture-handler'

import firebase from "../../../../firebase/firebase_config"

const ListUserScreen = (props) => {
    const [users, setUsers] = useState ([])

    useEffect(
        ()=>{
            firebase.db.collection('alunos').onSnapshot(
                (queryOnSnapshot)=>{
                    const users = []
                    queryOnSnapyshot.docs.forEach(
                        (doc)=>{
                            const {nome,sobrenome,curso} = doc.data()
                            users.push({id:doc.id,nome,sobrenome,curso})
                        }
                    )
                    setUsers(users);
                }
            )
        },
        []
    )
    useEffect(
        ()=>{
            firebase.db.collection('alunos').onSnapshot(
                (queryOnSnapshot)=>{
                    const users = []
                    queryOnSnapshot.docs.forEach(
                        (doc) => {
                            const {nome, sobrenome,curso} = doc.data()
                            users.push({id:doc.id,nome,sobrenome,curso})
                        }
                    )
                    setUsers(users)
                }
            )
        },
        []
    )
    

    return(
        <ScrollView>
            {
                 users.map(
                     (user)=>{
                         return (
                             <ListItem key= {user.id}
                                       bottomDivider
                                       onPress={
                                           ()=>{
                                               props.navigation.navigate('EditUserScreen', {userId:user.id})
                                           }
                                       }
                                       >
                                     {}
                                 <Avatar
                                     source={{
                                         uri: 'https://pbs.twimg.com/profile_images/1373256123520847878/F47UYaot_400x400.jpg'
                                     }} rounded />
 
                                 <ListItem.Content>
                                     <ListItem.Title> {user.nome} {user.sobrenome}</ListItem.Title>
                                     <ListItem.Subtitle> {user.curso} </ListItem.Subtitle>
                                 </ListItem.Content>

                             </ListItem>
                         )
                     }
                 )
            }
 
             <View style={Styles.container}>
                     <Button style={Styles.Button}
                         onPress={
                             ()=>props.navigation.navigate('AddUserScreen')
                         }
                         title='+'
                     />
             </View>
 
        </ScrollView>
     )
}

const Styles = StyleSheet.create({
    container:{
        flex: 1,
        display: 'flex',
        alignItems: "flex-end"
    },

    Button: {
        backgroundColor: '#8a00ca',
        width: 50,
        height: 50,
        fontSize: 70,
        borderRadius: 50,
        marginTop: 20,
        marginBottom: 45,
        marginRight: 20
    },
    textInput: {
        flex: 1,
        padding: 0,
        top:0,
        marginBottom: 45,
        borderBottomWidth: 1,
        borderBottomColor: '#154434'
    }
})

export default ListUserScreen
