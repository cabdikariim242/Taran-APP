import { Stack } from "expo-router";
import React from "react";
import './globals.css'
import { View, Text } from "react-native";

export default function RootLayout() {
  return ( <Stack>
    <Stack.Screen 
    name="(tabs)"
    options={{
      headerShown: true,
      headerTitleAlign: 'center',
      headerTitle:() =>(
        <View>
          <Text>
            hellow world
          </Text>
        </View>

      )
    }}
    />
  </Stack>
      
  );
}
