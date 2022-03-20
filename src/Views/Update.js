import { Alert, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import firestore from "@react-native-firebase/firestore"
import { TextInput } from 'react-native-paper'

export default function Update({navigation,route}) {
  const updateData =route.params
  const studentID =updateData.id
    // const[name,setName] =useState("")
    // const[age,setAge] =useState("")
    // const[school,setSchool] =useState("")
    // const[department,setDepartment] =useState("")

    const[student,setStudent]=useState({
       name:updateData.name,
       age:updateData.age,
       school:updateData.school,
       department:updateData.department 
    })

    const updateStudent=async(student)=>{
        await firestore().collection("student").doc(studentID).
          update(student).catch(error=>console.log(error.message))
  
        Alert.alert("success","update successfully",[{text:"ok",onPress:()=>navigation.navigate("feed")}])

    }
  return (
    <SafeAreaView style={{flex:1}}>
      <Text style={{color:"black",fontSize:20,textAlign:"center",paddingVertical:20}}>Update Student</Text>
      <ScrollView style={styles.inputContainer}>
        <TextInput
          label='Enter name'
          value={student.name}
          onChangeText={(name)=>setStudent({...student,name:name})}
          mode="outlined"
          style={styles.inputs}
        />

       <TextInput
          label='Enter nage'
          value={student.age}
          onChangeText={(age)=>setStudent({...student,age:age})}
          style={styles.inputs}
          mode="outlined"
        />  

         <TextInput
          label='Enter school'
          value={student.school}
          onChangeText={(school)=>setStudent({...student,school:school})}
          style={styles.inputs}
          mode="outlined"
        /> 

         <TextInput
          label='Enter depertment'
          value={student.department}
          onChangeText={(department)=>setStudent({...student,department:department})}
          style={styles.inputs}
          mode="outlined"
        />

        <TouchableOpacity style={styles.button} activeOpacity={0.7}
        onPress={()=>updateStudent(student)}
        >
            <Text style={{color:"white", fontSize:16,fontWeight:"bold"}}>update</Text>
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
        borderRadius:10
      
    }
})


