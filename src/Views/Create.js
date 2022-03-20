import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import firestore from "@react-native-firebase/firestore"
import { TextInput } from 'react-native-paper'
import * as firebase from 'firebase'

export default function Create({navigation}) {
    const[name,setName] =useState("")
    const[age,setAge] =useState("")
    const[school,setSchool] =useState("")
    const[department,setDepartment] =useState("")

    const createStdent=async()=>{
        await firestore().collection("student").
          add({
              name,
              age,
              school,
              department,
              timestamp:new Date()
          }).catch(error=>console.log(error.message))
          setName("")
          setAge("")
          setSchool("")
          setDepartment("")

          Alert.alert("success","student added successfully",[{text:"ok",onPress:()=>navigation.navigate("home")}])

    }
  return (
    <SafeAreaView style={{flex:1}}>
      <Text style={{color:"black",fontSize:20,textAlign:"center",paddingVertical:20}}>Create Student</Text>
      <ScrollView style={styles.inputContainer}>
        <TextInput
          label='Enter name'
          value={name}
          onChangeText={(name)=>setName(name)}
          style={styles.inputs}
          mode="outlined"
        />

       <TextInput
          label='Enter nage'
          value={age}
          onChangeText={(age)=>setAge(age)}
          style={styles.inputs}
          mode="outlined"
        />  

         <TextInput
          label='Enter school'
          value={school}
          onChangeText={(school)=>setSchool(school)}
          style={styles.inputs}
          mode="outlined"
        /> 

         <TextInput
          label='Enter depertment'
          value={department}
          onChangeText={(department)=>setDepartment(department)}
          style={styles.inputs}
          mode="outlined"
        />

        <TouchableOpacity style={styles.button} activeOpacity={0.7}
        onPress={()=>createStdent()}
        >
            <Text style={{color:"white", fontSize:16,fontWeight:"bold"}}>save</Text>
        </TouchableOpacity> 
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
     marginHorizontal:20
    },
    button:{
        backgroundColor:"black",
        borderRadius:10,
        height:40,
        alignItems:"center",
        justifyContent:"center" 
    },
    inputs:{
        marginBottom:10,

    }
})