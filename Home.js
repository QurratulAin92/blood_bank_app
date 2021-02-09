import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import pic1 from '../../image/blood bank.jpg';
import pic2 from '../../image/blood requests.gif';
import pic3 from '../../image/add_donor.png';
import pic4 from '../../image/contact.png';
import pic5 from '../../image/search.png';



export default function Home(props) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Blood Bank Application</Text>
        <br/>
        <br/>
        <br/>
        <View style={{flexDirection:"row"}}>
        <View>
        <Image style={styles.pic} source={pic1}/>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Blood_bank')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>BLOOD BANK</Text>
          </View>
        </TouchableOpacity>
        </View>
 
        <View style={{}}>
        <Image style={styles.pic} source={pic2} />
        <TouchableOpacity onPress={()=>props.navigation.navigate('Blood_request')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>BLOOD requst</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View>
        <Image style={styles.pic} source={pic3}  />
        <TouchableOpacity onPress={()=>props.navigation.navigate('Add_donor')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>ADD DONOR</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View>
        <Image style={styles.pic} source={pic4}  />
        <TouchableOpacity onPress={()=>props.navigation.navigate('Contact')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>CONTACT US</Text>
          </View>
        </TouchableOpacity>
        </View>

        <View>
        <Image style={styles.pic} source={pic5}  />
        <TouchableOpacity onPress={()=>props.navigation.navigate('Search')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>SearchDonor</Text>
          </View>
        </TouchableOpacity>
        </View>
        </View>
  
        <StatusBar style="auto" />
      </View>
    );
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily:"Times New Roman"
      
      
    },
    text: {
     
      color:"white",
      alignItems: 'center',
      justifyContent: 'center',
      fontSize:60,
      fontWeight:"bold"
    },

    pic:{
      flexDirection:'row',
      marginTop:5,
      width: 130, 
      height: 120,
      justifyContent:'flex-start'
     
    },

    button: {
      marginBottom: 10,
      width: 130,
 
      alignItems: 'center',
      backgroundColor: 'darkred',
      color:"white",
      borderWidth:4,
      borderColor:"white",
      borderRadius:5
     
    },
    buttonText: {
      textAlign: 'center',
      padding: 10,
      color: 'white',
      fontSize:15,
      fontWeight:'bold'
    }
  
  });

  
  