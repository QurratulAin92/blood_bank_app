import React from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';

function Blood_request(props) {
    return(
        <View style={styles.container}>
            <Text style={{fontSize:70 , color:'white' }}>
                BLOOD REQUESTS
            </Text>
            <br/>
            <Text style={{fontSize:50 , color:"white"}}>
             POST BLOOD REQUESTS
            </Text>
            <br/><br/>
            <Text style={{fontSize:20 , color:"white"}}>
             Fill the form below to post Request
            </Text>
            <br/><br/>
            <View style={{display:"flex",flexDirection:"row"}}> 
            <br/>
            <Text style={{fontSize:30, color:"white"}}>Patient Name:</Text>
            <br/>
            <br/>
            <TextInput style={{backgroundColor:"red" ,fontSize:40,paddingLeft:30, borderWidth:0 , borderColor:"grey" ,borderBottomWidth:3}}/ >  
            </View>
            <View style={{display:"flex",flexDirection:"row"}}> 
            <br/>
            <Text style={{fontSize:30, color:"white"}}>Mobile Number:</Text>
            <br/>
            <br/>
            <TextInput style={{backgroundColor:"red" ,fontSize:40,paddingLeft:30, borderWidth:0 , borderColor:"grey" ,borderBottomWidth:3}}/ >  
            </View>
            <View style={{display:"flex",flexDirection:"row"}}> 
            <br/>
            <Text style={{fontSize:30, color:"white"}}>Number of Blood Unit:</Text>
            <br/>
            <br/>
            <TextInput style={{backgroundColor:"red" ,fontSize:40,paddingLeft:30, borderWidth:0 , borderColor:"grey" ,borderBottomWidth:3}}/ >  
            </View>
            <View style={{display:"flex",flexDirection:"row"}}> 
            <br/>
            <Text style={{fontSize:30, color:"white"}}>City:</Text>
            <br/>
            <br/>
            <TextInput style={{backgroundColor:"red" ,fontSize:40,paddingLeft:30, borderWidth:0 , borderColor:"grey" ,borderBottomWidth:3}}/ >  
            </View>
            
            <View style={{display:"flex",flexDirection:"row"}}> 
            <br/>
            <Text style={{fontSize:30, color:"white"}}>Blood Group:</Text>
            <br/>
            <br/>
            <TextInput type="radio" name="bg" style={{backgroundColor:"red" ,fontSize:40,paddingLeft:30, borderWidth:0 , borderColor:"grey" ,borderBottomWidth:3}}/ > 
            </View>

            <br/>
            <br/>
            
            
            <View>
                <TouchableOpacity onPress={()=>props.navigation.navigate("Contact")} style={{backgroundColor:"darkred",color:"white",fontSize:30,borderRadius:5,borderColor:"white",borderWidth:4,paddingLeft:20,paddingRight:25}}>Submit Your Request</TouchableOpacity>
            </View>
            
            
            


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

export default Blood_request;