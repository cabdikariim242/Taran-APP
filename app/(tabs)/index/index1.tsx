import { images } from "@/assets/images";
import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Index2() {
  const [selectedValue, setSelectedValue] = useState("apple");

  return (
    <View className="w-full h-full max-h-[650px]  ">
      {/* ScrollView with fixed height */}
      <ScrollView
        className="bg-white"
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{
          paddingBottom: 40,
        }}
      >
        {/* Header */}
        <View className="flex-row justify-start border-b border-[#0C4C7B1A] h-[54px] px-7 gap-3 py-2 items-center w-full mx-auto">
          <Image source={images.back} className="w-[16px] h-[16px]" />
          <Text className="text-[#0C4C7B96] text-[18px] font-[500]">Back</Text>
        </View>

        {/* Amount section */}
        <View className="bg-[#22c55e13] w-[356px] border border-[#22c55e2c] h-[117px] flex justify-center items-center mx-auto mt-5 rounded-[24px]">
          <Text className="text-[#0C4C7B96] text-[14px] font-[400]">
            You will receive
          </Text>
          <Text className="text-[#0C4C7B] text-[30px] font-[600]">$495.00</Text>
        </View>

        {/* Picker */}
        <View className="mt-4 flex flex-row  mx-auto  justify-center gap-5 items-center">
          <View className="flex gap-3">
                <Text className="text-[#0C4C7BE5] font-[400] text-[12px]">From</Text>
            <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={{
              height: 50,
              width: 160,
              backgroundColor: "#e8eff3",
              color: "black",
              borderRadius: 10,
            }} 
          >
            <Picker.Item label="Fiat" value="fiat" />
            <Picker.Item label="Banana 🍌" value="banana" />
            <Picker.Item label="Mango 🥭" value="mango" />
          </Picker>
          </View>
          <View className="flex gap-3">
            <Text className="text-[#0C4C7BE5] font-[400] text-[12px]">To</Text>
            <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
            style={{
              height: 50,
              width: 160,
              backgroundColor: "#e8eff3",
              color: "black",
              borderRadius: 10,
            }} 
          >
            <Picker.Item label="Fiat" value="fiat" />
            <Picker.Item label="Banana 🍌" value="banana" />
            <Picker.Item label="Mango 🥭" value="mango" />
          </Picker>
          </View>
        </View>

        {/* Important Notice */}
        <View className="mx-auto w-[356px] gap-5 my-6">
          <View className="flex-row items-center gap-4">
            <Image source={images.warning} className="w-[15px] h-[15px]" />
            <Text className="text-[#FFB100] text-[18px] font-[700]">
              Important Notice
            </Text>
          </View>

          <Text className="text-[#0C4C7BD9] text-[14px] w-[336px] font-[700]">
            Only send Tether (TRC20) network assets to this address. Sending
            other assets will result in a permanent loss.
          </Text>

          <Image
            source={images.QRcode}
            className="w-[189px] h-[217px] mx-auto mt-3"
          />

          <Pressable className="w-[356px] h-[48px] bg-[#0C4C7B] rounded-[12px] flex justify-center items-center mt-5">
            <Text className="text-white font-[600] text-[15px]">
              I have Paid
            </Text>
          </Pressable>
          
        </View>
      </ScrollView>
    </View>
  );
}
