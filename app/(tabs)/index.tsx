import { images } from "@/assets/images"; 
import { useState } from "react";
import { Image, Pressable, Text, View, Modal } from "react-native"; 
export default function Index() {
  const [ShowDetails, setShowDetails] = useState(true);
  return ( 
    //  full content
    <View className="flex-1 relative justify-start items-center  bg-white  ">
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
          <Cards title="You Pay" />
        </View>
        {/* MIDDLE IMAGE */}
        <View className=" ">
          <Image
            source={images.swapIcon}
            className="w-[56px] h-[56px] absolute left-48"
            style={{ position: "absolute", top: -25, left: 150 }}
          />
        </View>
        {/* Second Card */}
        <View>
          <Cards title="You Get" />
        </View>
      </View>
      {/* Button */}
      <View className="w-full max-w-[356px] rounded-[12px] mt-5">
         
       <Pressable
        onPress={() => setShowDetails(!ShowDetails)}
        className="bg-[#0C4C7B] h-[55px] rounded-[12px] flex items-center justify-center"
        >
          <Text className="font-[600] text-[15px] text-white text-center">Swap</Text>
        </Pressable> 
       
      </View>
      {/* Swap Amount */}
      <View className="w-full max-w-[356px] mt-5   bg-[#f3f0f0df] mx-auto rounded-[13px] ">
        {/* Fist One */}
        <View className="flex flex-col gap-6 mt-3">
        <SwapCards title="Swap Amount" total="0.00"/>
        <Image source={images.BorderBottom} className="w-[356px] h-[2px]" />
      </View>
        {/* second One */}
        <View className="flex flex-col gap-6 mt-3">
        <SwapCards title="Swap Amount" total="0.00"/>
        <Image source={images.BorderBottom} className="w-[356px] h-[2px]" />
      </View>
        {/* third One */}
        <View className="flex flex-col gap-6 mt-3">
        <SwapCards title="Swap Amount" total="0.00"/>
        <Image source={images.BorderBottom} className="w-[356px] h-[2px]" />
      </View>
        {/* fourth One */}
        <View className="flex flex-col gap-6 my-3">
        <SwapCards title="Swap Amount" total="0.00"/>
      </View>
      </View>
     <Modal
      visible={!!ShowDetails}
      animationType="slide"
      transparent={true}
      onRequestClose={()=>setShowDetails(false)}
      presentationStyle="formSheet"
      >
        <Popup/>
      </Modal>
    </View>
  );
}

interface CardProps {
  title: string;
}
const Cards = ({ title }: CardProps) => {
  return (
    <View className="flex flex-row justify-between items-center w-[356px] px-10 h-[129px] bg-[#0C4C7B1A]  rounded-[20px] ">
      <View className="flex flex-col gap-4">
        <Text className="text-[#0C4C7BE5] text-[12px] font-[400] ">
          {title}
        </Text>
        <Text className="text-[#0C4C7BE5] text-[12px] font-[400] ">
          Select Your Country
        </Text> 
      </View>
      <Text className="text-[#0C4C7BE5] text-[12px] font-[400] ">0.00</Text>
    </View>
  );
};

interface SwapProps{
  title:string,
  total:string
}

const SwapCards =({title, total}:SwapProps)=>{
  return(
    <View className="w-[308px] mx-auto flex-row justify-between items-center">
      <Text className="text-[#0C4C7B99] text-[12px] font-[500]">{title}</Text>      
      <Text className="text-[#0C4C7B] text-[13px] font-[700]">{total}</Text>      
    </View>
  )
}



const Popup =()=>{
  return(
    <View className="absolute bottom-0 left-0 right-0 h-[290px] bg-white  rounded-[12px]">
      <Text className="text-[#0C4C7B] text-[18px] font-[600]">Popup Content Here</Text>
    </View>
  )
}