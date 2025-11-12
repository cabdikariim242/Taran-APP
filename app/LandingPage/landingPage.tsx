import { images } from "@/assets/images";
import React from "react";
import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, View ,Text} from "react-native";

const landingPage = () => {
      const router = useRouter();
    
  return (
    <View className="w-full h-full bg-[#0C4C7B]">
      <ScrollView className="pb-24">
        <View className="flex flex-row justify-center items-center gap-24 mt-24">
          <Image
            source={images.taranWhiteLogo}
            className="w-[127px] h-[127px]"
          />
          <Image
            source={images.translate}
            className="w-[37px] h-[37px] mt-[-60px] mr-[-100px]"
          />
        </View>
        <View className="flex justify-center items-center gap-10 mt-14">
          <Image source={images.seamless} className="w-[320px] h-[97px] " />
          <Image source={images.Anaasir} className="w-[431px] h-[455px] " />
          <View className="flex flex-row gap-7 ">
            <Pressable  onPress={() => router.push('./Login/Signin')} className="bg-[#22C55E] rounded-[8px] w-[133px] h-[44px] flex justify-center items-center flex-row gap-3 mb-24">
                <Image source={images.add}  className="w-[17px] h-[17px] "/>
                <Text className="text-white ">
                    Sign In
                </Text>
            </Pressable>
            <Pressable onPress={() => router.replace("./Login/login")} className="border border-[#34C759] rounded-[8px] w-[133px] h-[44px] flex justify-center items-center flex-row gap-3 mb-24">
                <Image source={images.signup}  className="w-[17px] h-[17px] "/>
                <Text className="text-white ">
                    Sign Up
                </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default landingPage;
