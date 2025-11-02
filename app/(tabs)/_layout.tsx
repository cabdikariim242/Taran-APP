import { images } from "@/assets/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

interface Props {
  icon: string;
  focused: Boolean;
  title: string;
}
const Background = ({ icon, focused, title }: any) => {
  if (focused) {
    return (
      <View>
        <ImageBackground
          source={images.bg}
          className="flex-1 flex-col w-[49px] mx-auto min-h-[50px] justify-center items-center"
        >
          <Image
            source={icon}
            tintColor="#fff"
            className="w-full max-w-[21px] h-[22px]"
          />
        </ImageBackground>
        <Text className="     font-[600] text-[#0C4C7B] text-center capitalize" style={{fontSize:11,}}>
          {title}
        </Text>
      </View>
    );
  } else {
    return (
      <View className="flex-col gap-2 justify-center items-center w-[41px] mx-auto">
        <Image
          source={icon}
          tintColor="#0c4d7b69"
          className="w-[20px] h-[20px] mt-3"
        />
        <Text className="text-[8px] font-[600] text-[#0C4C7B]/70 text-centr  capitalize">
          {title}
        </Text>
      </View>
    );
  }
};

const _layout = () => {
  return (
    <Tabs
     initialRouteName="index"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          borderTopWidth: 0,
          shadowOpacity: 0,
          marginBottom: 20,
          elevation: 0,
          position: "absolute",
        },
      }}
    >
      <Tabs.Screen
        name="accounts"
        options={{
          headerShown: false,
          title: "accounts",
          tabBarIcon: ({ focused }) => (
            <Background
              focused={focused}
              icon={images.account}
              title="Account"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          headerShown: false,
          title: "transaction",
          tabBarIcon: ({ focused }) => (
            <Background
              focused={focused}               
              icon={images.transactions}
              title="Transaction"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "swap",
          tabBarIcon: ({ focused }) => (
            <Background focused={focused} icon={images.swap} title="Swap" />
          ),
        }}
      />

      <Tabs.Screen
        name="kyc"
        options={{
          headerShown: false,
          title: "kyc",
          tabBarIcon: ({ focused }) => (
            <Background focused={focused} icon={images.kyc} title="Kyc" />
          ),
        }}
      />

      <Tabs.Screen
        name="support"
        options={{
          headerShown: false,
          title: "support",
          tabBarIcon: ({ focused }) => (
            <Background
              focused={focused}
              icon={images.support}
              title="Support"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
