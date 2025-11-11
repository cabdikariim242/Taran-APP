import { Stack } from "expo-router";
import React from "react";
import './globals.css'
import { View, Text,Image, StatusBar } from "react-native";
import {images} from '../assets/images'

export default function RootLayout() {
  return ( <Stack>
    <Stack.Screen name="Login" options={{headerShown: false}}/>

    <Stack.Screen 
    name="(tabs)"
    options={{
      headerShown: true,
      headerTitleAlign: 'center',
      headerStyle:{
        backgroundColor:'#0C4C7B'
      },
      headerTitle:() =>(
     <View style={{flexDirection: 'row', alignContent: 'center' , justifyContent: 'center',gap:100, margin:40}}>
          <View>
            <StatusBar backgroundColor="#0C4C7B"/>
            <Image source={images.profile} style={{width: 55, height: 55, }} />
          </View>
          <View>
            <View style={{flexDirection: 'row', alignContent: 'center' , justifyContent: 'center', gap:6 ,marginTop:10}}>
        <Text style={{color:'#22C55E'  }} className="  text-[18px] ">
           Hello,  
          </Text>
          <Text style={{color:'#ffff'}} >
             Ridwaan
          </Text>
            </View>
          
          <Text style={{color:'#ffff', fontSize:12,textAlign:'center'}}>
          Good Morning
          </Text>
        </View>
        <View>
            <Image source={images.notification} style={{width: 44, height: 44, }}></Image>
          </View>
        </View>
      )
    }}/>
 
  </Stack>
      
  );
}

 