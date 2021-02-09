import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity} from 'react-native';
import pic7 from '../../image/blood donor.png'

function Search(props) {
    const searching = () =>{
        props.navigation.navigate("Contact")
    }
    
    return(
        <View style={styles.container}>
            <Text style={{fontSize:90 , color:'white' }}>
                Search Donor
            </Text>
            <br/>
            <br/>

             <View>
                 <Text style={{fontSize:50,color:'white',}}>
                 A type blood has anti-B antibody in the plasma<br/>
                 B type blood has anti-A antibody in the plasma<br/>
                 AB has neither A nor B antibody in the plasma<br/>
                 O has both A and B antibody in the plasma.<br/>
                 </Text>
                 <br/>
                 <Image style={styles.pic} source={pic7}  />
                 
             </View>
             <br/>
             <br/>
             <br/>

            <View style={{display:"flex",flexDirection:"row"}}>
            <TextInput placeholder="Enter your blood group"  style={{backgroundColor:"white" ,fontSize:30,borderColor:"grey"}}/>
            <TouchableOpacity style={{backgroundColor:"darkred",color:"white",fontSize:30,borderWidth:2}} onPress={searching} > 
            Search
             </TouchableOpacity>
           
            </View>
            <br/>
            <br/>
            <br/>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container:{ 
        flex:1,
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent:'center'
    },
    pic:{
        
        marginTop:5,
        width: 700, 
        height: 750,
        justifyContent:'center',
        marginLeft:200
    }
})

export default Search;