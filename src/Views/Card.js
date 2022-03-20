import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card, Header } from 'react-native-elements'
import Icon from "react-native-vector-icons/FontAwesome"
import firestore from "@react-native-firebase/firestore"

export default function CardItems({ student, navigation,getAllStudent }) {

  const deleteStudent = async (id) => {
 const res=  await firestore().collection("student").doc(id).delete()
 
    getAllStudent()

  }
  return (
    <View style={{  backgroundColor: "white" }}>
      <Card key={student.id}>
        <Card.Title style={{ fontSize: 18, fontWeight: "bold", color: "darkblue" }}>{student.name}</Card.Title>
        <Card.Divider />
        <Card.Title>{student.age} years old School: {student.school} Department: {student.department}</Card.Title>
        <Card.Divider />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>

          <TouchableOpacity
          onPress={() => navigation.navigate("update", student)}
          style={styles.button}
          >
          <Icon
            name='pencil'
            color={"blue"}
            size={20}
            
          />
          </TouchableOpacity>
         
           <TouchableOpacity
            onPress={() => deleteStudent(student.id)}
            style={styles.button}
           >
           <Icon
            name='trash'
            color={"red"}
            size={20}
           
          />
           </TouchableOpacity>
         
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    height:35,
    width:70,
    backgroundColor:"white",
    justifyContent:"center",
    alignItems:"center",
  }
})


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// export default function CardItems({student}) {
//   return (
//     <View>
//       <Text style={{color:"black"}}>{student.name}</Text>
//     </View>
//   )
// }

// const styles = StyleSheet.create({})