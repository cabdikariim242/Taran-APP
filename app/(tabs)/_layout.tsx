import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/assets/images' 
 
interface Props{
  icon:string,
  focused:Boolean,
  title:string
}
const Background = ({icon,focused,title,}:any) =>{
  if (focused) { 
  return(
    <>
     <ImageBackground source={images.bg} className="flex-1 flex-col w-[49px] min-h-[50px] mb-6 justify-center items-center">
       <Image source={icon} tintColor="#ffff" className="w-full max-w-[21px] h-[22px]"/> 
     </ImageBackground>
     <Text className="text-[14px] font-[600] text-[#0C4C7B] capitalize">{title}</Text>
     </>
  )
}else{
  return(
    <View className="flex-col gap-2justify-center items-center"> 
      <Image source={icon} tintColor="#0c4d7b69" className="w-[20px] h-[20px]"/>
       <Text className="text-[8px] font-[600] text-[#0C4C7B]/70 capitalize">{title}</Text>
    </View>
  )
}
}

const _layout = () => {
  return (
      <Tabs>
        <Tabs.Screen 
        name="accounts"
        options={{
          headerShown: false, 
         title:'accounts',
          tabBarIcon: ({focused}) =>(<Background focused={focused} icon={images.account} />)
        
         }}
        />
         <Tabs.Screen 
        name="transaction"
        options={{
          headerShown: false, 
         title:'transaction',
          tabBarIcon: ({focused}) =>(<Background focused={focused} icon={images.transactions}/>)
        
         }}
        />

        <Tabs.Screen 
        name="index"
        options={{
          headerShown: false, 
         title:'swap',
          tabBarIcon: ({focused}) =>(<Background focused={focused} icon={images.swap}/>)
         }}
        />

        <Tabs.Screen 
        name="kyc"
        options={{
          headerShown: false, 
         title:'kyc',
          tabBarIcon: ({focused}) =>(<Background focused={focused} icon={images.kyc}/>)
        
         }}
        />

         
        <Tabs.Screen 
        name="support"
        options={{
          headerShown: false, 
         title:'support',
          tabBarIcon: ({focused}) =>(<Background focused={focused} icon={images.support}/>)
        
         }}
        />
       
        
      </Tabs>
  )
}

export default _layout