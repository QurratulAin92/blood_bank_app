import React,{useState,useEffect} from "react"
import firebase from "./firebase"
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, StatusBar} from 'react-native';



function  Login({navigation}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signup = () => {
       let user = {
           email,
           password
       }

       
       firebase.auth().createUserWithEmailAndPassword(email, password)
    
       .then((result)=>{  
        alert("Your account is created successfully")
        navigation.push("Home")

       firebase.database().ref("/").child("users").push(user)
       })
      .catch((error)=> {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      })
    }

     const login=()=>{
      let user = {
        email,
        password
    }
   

    firebase.auth().signInWithEmailAndPassword(email, password)
   .then((result) => {
     alert("user login successfully")

     navigation.push("Home")   

  
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    alert(errorMessage)
  });
    }

    return( 
    <View style={styles.container}>
      <Text style={styles.text}>Blood Bank Application</Text>
      <br/><br/>
      
      <TextInput value={email} onChangeText={(e)=>setEmail(e)} placeholder="enter your email" style={styles.email}/><br/>
      <TextInput value={password} onChangeText={(e)=>setPassword(e)} secureTextEntry={true} placeholder="enter your password" style={styles.password}/>
      <br/>
      <br/>
      <TouchableOpacity style={styles.btn1} onPress={login}>Login</TouchableOpacity>
      <br/>
      <TouchableOpacity style={styles.btn2} onPress={signup}>Signup</TouchableOpacity>

      <StatusBar style="auto" />
    </View>
    )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
   
    color:"white",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:50,
    fontWeight:"bold"
  },
  email: {
    backgroundColor:"white",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:30,
   
  },
  password: {
    backgroundColor:"white",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:30,
   
   
  },
  btn1:{
    backgroundColor:"wheat",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:30,
    width:170,
    height:50,
    borderRadius:10,
    color:"darkred",
    fontWeight:"bold"

   
  },
  btn2:{
    backgroundColor:"darkred",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:30,
    width:170,
    height:50,
    borderRadius:10,
    color:"white",
    fontWeight:"bold"

   
  }
})


export default Login;