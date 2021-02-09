import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import city from '../../image/city.jpg';
import name from '../../image/name.png';
import contact from '../../image/contact.png';
import password from '../../image/password.png';
import blood from '../../image/blood requests.gif';
import firebase from "./firebase"




export default function Add_donor() {
    const [donorname, setName] = useState("")
    const [bloodgroup , setBloodGroup] = useState("")
    const [cityname, setCity] = useState("")
    const [cell, setCell] = useState("")

    const register = () => {
        let donor = {
            donorname,
            bloodgroup,
            cityname,
            cell
        }

        firebase.database().ref("/").child("donors").push(donor)
    }
    
    return(
        
        <View style={styles.container}>
            <Text style={{fontSize:70 , color:'white' }}>:
                Add Donor(You can save lives)
            </Text>
            <Text style={{fontSize:50 ,backgroundColor:"white", color:"red"}}>
                Register yourself as a donor
            </Text>
            <br/><br/>
           <View style={{backgroundColor:"white",padding:30}}>
            <View style={{display:"flex",flexDirection:"row"}}> 
            <Image source={name} style={{width:30,height:30}}/>
            <TextInput  placeholder="Name" onChangeText={(e)=>setName(e)} style={{backgroundColor:"white" ,fontSize:30,paddingLeft:15, borderBottomWidth:1,borderColor:"grey"}}/ >  
            </View>
            <View style={{display:"flex",flexDirection:"row"}}> 
            <Image source={contact} style={{width:30,height:30}}/>
            <TextInput placeholder="Cell Number" onChangeText={(e)=>setCell(e)} style={{backgroundColor:"white" ,fontSize:30,paddingLeft:15,  borderBottomWidth:1,borderBottomColor:"grey"}}/ >   </View>
          
            <View style={{display:"flex",flexDirection:"row"}}> 
            <Image source={password} style={{width:30,height:30}}/>
            <TextInput placeholder="Password" type="password" style={{backgroundColor:"white" ,fontSize:30,paddingLeft:15, borderBottomWidth:1,borderColor:"grey"}}/ >   </View>
            
            <View style={{display:"flex",flexDirection:"row"}}> 
            <Image source={city} style={{width:30,height:30}}/>
            <TextInput placeholder="Select City" onChangeText={(e)=>setCity(e)} style={{backgroundColor:"white" ,fontSize:30,paddingLeft:15, borderBottomWidth:1,borderColor:"grey"}}/ >   </View>
            
            <View style={{display:"flex",flexDirection:"row"}}> 
            <Image source={blood} style={{width:30,height:30}}/>
            <TextInput placeholder="Blood Group" onChangeText={(e)=>setBloodGroup(e)} style={{backgroundColor:"white" ,fontSize:30,paddingLeft:15, borderBottomWidth:1,borderColor:"grey"}}/ >   </View>
          

           </View>
           <Text style={{color:"white", fontSize:25}}>Are you a donor?</Text>
           <br/>
           <TouchableOpacity onPress={register} style={{backgroundColor:"darkred",color:"white",fontSize:30,borderRadius:5,borderColor:"white",borderWidth:4,paddingLeft:20,paddingRight:25}}>Register</TouchableOpacity>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{ 
        flex:1,
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent:'center'
    }
})

