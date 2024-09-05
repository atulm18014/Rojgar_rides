import { View, Text, TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter} from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';


export default function SignIn() {
   
    const router =useRouter();
  return (
    <View style={{
        padding:25,
        paddingTop:70,
     
        height:'100%',
        backgroundColor:Colors.WHITE,
    }}>

<TouchableOpacity onPress={()=>router.back()}>
    <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>

      <Text style={{
        fontFamily:'outfit-bold',
        fontSize:35,
        marginTop:30,
      }}>Let's Sign You In</Text>

        <Text style={styles.text}>Welcome Back</Text>
        <Text style={styles.text}>You've been missed!</Text>



{/* email */}
      <View style={{
        marginTop:50,
      }}>
        <Text style={{
        fontFamily:'outfit',
        marginLeft:10,
      }}>Email</Text>
      <TextInput 
      style={styles.input} 
      placeholder='Enter Email'/>
      </View>

      {/* password */}
      <View style={{
        marginTop:20,
      }}>
        <Text style={{
        fontFamily:'outfit',
        marginLeft:10,
      }}>Password</Text>
      <TextInput 
      secureTextEntry={true}
      style={styles.input} 
      placeholder='Enter Password'/>
      </View>

        {/* sign-in button */}

        <View style={{
            padding:15,
            backgroundColor:Colors.BLACK,
            borderRadius:15,
            marginTop:50,

        }}>
            <Text 
              style={{
                color:Colors.WHITE,
                fontFamily:'outfit',
                fontSize:15,
                textAlign:'center'
              }}
            >Sign-IN</Text>
        </View>

          {/* Already have an account section */}
        <View style={styles.footer}>
        <Text style={styles.footerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={()=>router.replace('auth/sign-up')} >
          <Text style={styles.signInText}>Sign UP</Text>
        </TouchableOpacity>
      </View>
      

    </View>
  )
}

const styles = StyleSheet.create({
    input:{
        padding:15,
        borderWidth:1,
        borderRadius:15,
        borderColor:Colors.BLACK,
        fontFamily:'outfit',
    },
text:{
    fontFamily:'outfit',
        fontSize:20,
        color: Colors.GRAY,
},
footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  footerText: {
    fontFamily: 'outfit',
    fontSize: 16,
    color: '#242829',
  },
  signInText: {
    fontFamily: 'outfit',
    fontSize: 16,
    color: 'blue', // Change to desired blue color
    textDecorationLine: 'underline',
  },

});