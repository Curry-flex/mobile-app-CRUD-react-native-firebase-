import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Header} from 'react-native-elements'
import firestore from "@react-native-firebase/firestore"
import Icon from "react-native-vector-icons/FontAwesome"
import CardItems from './Card'

export default function Feed({navigation}) {
    const[student,setStudent]= useState([])
    
    const getAllStudent=async()=>{
     var querySnap =await firestore().collection("student").orderBy("timestamp","desc").get()
     var result =querySnap.docs.map((doc)=>{
       return {...doc.data(),id:doc.id}
     })
     setStudent(result)
    }
    useEffect(()=>{
        getAllStudent()
    },[student])
  return (
    <View style={{flex:1}}>
      <Text style={{color:"black",fontSize:20,textAlign:"center",paddingVertical:20}}>All Students</Text>
   
    <ScrollView>
      <FlatList 
   
      data={student}
      renderItem={({item})=><CardItems student={item} navigation={navigation} getAllStudent={getAllStudent}/>}
      />
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({})