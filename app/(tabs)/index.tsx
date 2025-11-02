import { images } from "@/assets/images";
import { Image, Text, View } from "react-native";
export default function Index() {
  return (
    //  full content
    <View className="flex-1 justify-start items-center  bg-white ">
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
      {/* Cards */}
      <View className="flex flex-col gap-2 mt-4 relative">
        {/* First Card */}
        <View>
          <Cards />
        </View>
        {/* MIDDLE IMAGE */}
        <View className=" " >
          <Image source={images.swapIcon} className="w-[56px] h-[56px] absolute left-48"  style={{position:'absolute', top:-25, left:150}}/>
        </View>
        {/* Second Card */}
        <View>
          <Cards />
        </View>
      </View>
    </View>
  );
}

const Cards = () => {
  return (
    <View className="flex flex-row justify-between items-center w-[356px] px-10 h-[129px] bg-[#0C4C7B1A]  rounded-[20px] ">
      <View className="flex flex-col gap-4">
        <Text className="text-[#0C4C7BE5] text-[12px] font-[400] ">
          You Pay
        </Text>
        <Text className="text-[#0C4C7BE5] text-[12px] font-[400] ">
          Select Your Country
        </Text>
      </View>
      <Text className="text-[#0C4C7BE5] text-[12px] font-[400] ">0.00</Text>
    </View>
  );
};
