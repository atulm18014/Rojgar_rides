import { View, Text, TextInput, StyleSheet,TouchableOpacity, ToastAndroid } from 'react-native'
import React, {useState, useEffect } from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter} from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import { createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from './../../../configs/FirebaseConfig'


export default function SignIn() {
    const router =useRouter();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [fullName,setFullName]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');


    const OnCreateAccount=()=>{

      if(!email || !password || !fullName || !phoneNumber)
      {
        ToastAndroid.show('Please enter all details' , ToastAndroid.BOTTOM);
        return;
      }

      createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("--",errorMessage,errorCode);
    // ..
  });
    };

  return (
    <View style={{
        padding:25,
        paddingTop:40,
     
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
      }}>Create a new Account!</Text>

{/* Name */}
<View style={{
        marginTop:50,
      }}>
        <Text style={{
        fontFamily:'outfit',
        marginLeft:10,
      }}>Name</Text>
      <TextInput 
      style={styles.input} 
      placeholder='Enter Your Name '
      onChangeText={(value)=>setFullName(value)}
      
      />
      </View>

{/* email */}
      <View style={{
        marginTop:20,
      }}>
        <Text style={{
        fontFamily:'outfit',
        marginLeft:10,
      }}>Email</Text>
      <TextInput 
      style={styles.input} 
      placeholder='Enter Email'
      onChangeText={(value)=>setEmail(value)}
      />
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
      placeholder='Enter Password'
      onChangeText={(value)=>setPassword(value)}
      />
      </View>


      <View style={{
        marginTop:20,
      }}>
        <Text style={{
        fontFamily:'outfit',
        marginLeft:10,
      }}>Phone Number</Text>
      <TextInput 
      style={styles.input} 
      placeholder='Enter Phone Number'
      onChangeText={(value)=>setPhoneNumber(value)}
      />
      </View>

        {/* sign-in button */}

        <TouchableOpacity onPress={OnCreateAccount}
        style={{
            padding:15,
            backgroundColor:Colors.BLACK,
            borderRadius:15,
            marginTop:100,

        }}>
            <Text 
              style={{
                color:Colors.WHITE,
                fontFamily:'outfit',
                fontSize:15,
                textAlign:'center'
              }}
            >Create Account</Text>
        </TouchableOpacity >  

             {/* Already have an account section */}
             <View style={styles.footer}>
        <Text style={styles.footerText}>Already have an account? </Text>
        <TouchableOpacity onPress={()=>router.replace('auth/sign-in')} >
          <Text style={styles.signInText}>Sign IN</Text>
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