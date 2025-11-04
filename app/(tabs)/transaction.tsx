import { images } from "@/assets/images";
import React from "react";
import { Image, View ,Text } from "react-native";

export default function transaction() {
  return (
    <View className="flex-1  justify-start w-full relative items-center bg-white">
      {/* the top bar icon and text */}
      <View>
          {/* IMG AND TEXT */}
              <View className="flex flex-row gap-4 mt-4 justify-center items-center w-full max-w-[199px] ">
                <Image source={images.Award} className="w-[46px] h-[60px]" />
                <View className="flex ">
                  <Text className="text-[#0C4C7B96] text-[10px] font-[500]">
                    Total Exchange
                  </Text>
                  <Text className="text-[#0C4C7B] text-[20px] font-[600]">
                    $1,236.54
                  </Text>
                </View>
              </View>
              {/* Icon */}
      </View>
    </View>
  );
}
 