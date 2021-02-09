import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

function Contact() {
    return(
        <View>
        <View style={styles.container}>
            <Text style={{fontSize:70 , color:'white' }}>
                CONTACTS US
            </Text>
        </View>

        <View style ={{borderColor:'black',borderStyle:'solid', borderRadius:20}}>
           <Text style={styles.card}>
               Name = Ali
           </Text>
           <Text style={styles.card}>
               City = Karachi
           </Text>
           <Text style={styles.card}>
             Blood Group: O Positive
           </Text>
           <Text style={styles.card}>
              Contact no: 0300-2365789
           </Text>
       </View>
       <br/>
       <br/>

       <View style ={{borderColor:'black',borderStyle:'solid', borderRadius:20}}>
           <Text style={styles.card}>
               Name = Shoaib
           </Text>
           <Text style={styles.card}>
               City = Lahore
           </Text>
           <Text style={styles.card}>
             Blood Group: O Negative
           </Text>
           <Text style={styles.card}>
              Contact no: 0321-6548870
           </Text>
       </View>

       <br/>
       <br/>

       <View style ={{borderColor:'black',borderStyle:'solid', borderRadius:20}}>
           <Text style={styles.card}>
               Name = Arsalan
           </Text>
           <Text style={styles.card}>
               City = Islamabad
           </Text>
           <Text style={styles.card}>
             Blood Group: AB negative
           </Text>
           <Text style={styles.card}>
              Contact no: 0333-3423221
           </Text>
       </View>

       <br/>
       <br/>

       <View style ={{borderColor:'black',borderStyle:'solid', borderRadius:20}}>
           <Text style={styles.card}>
               Name = Hammad
           </Text>
           <Text style={styles.card}>
               City = Karachi
           </Text>
           <Text style={styles.card}>
             Blood Group: B Positive
           </Text>
           <Text style={styles.card}>
              Contact no: 0321-6548870
           </Text>
       </View>

       </View>


        
    )
    
}

const styles = StyleSheet.create({
    container:{ 
        flex:1,
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom: 10
    },
     card:{
        flex:2,
        fontSize:20 ,
        paddingTop: 5,
        color:'black',
        backgroundColor:'lightgrey',
        borderColor:'black' ,
        fontWeight:"bold",
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
   } 
})

export default Contact;