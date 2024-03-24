import React from "react";
import { Text, View, Image } from "react-native";
import tw from "../tailwind";

const RankingLeague = () => {
    const data = [
        {
          id: 1,
          pos: 1,
          driver: "Mahylan",
          user: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
          pts: 25,
        },
        {
          id: 2,
          pos: 2,
          driver: "Mr Lead Dev",
          user: "https://cdn-icons-png.flaticon.com/512/4975/4975733.png",
          pts: 18,
        },
        {
          id: 3,
          pos: 3,
          driver: "Romain",
          user: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png",
          pts: 15,
        },
        {
          id: 4,
          pos: 4,
          driver: "Helio",
          user: "https://cdn.icon-icons.com/icons2/582/PNG/512/man-2_icon-icons.com_55041.png",
          pts: 12,
        },
      ];
      const headerStyles = tw`text-white font-bold uppercase text-center`;
      const rowStyles = tw`text-black font-extrabold text-center`;
  return (
    <View style={tw`bg-[#38383f] my-2`}>
      {data.map((row) => (
        <View key={row.id} style={tw`flex-row bg-white items-center py-4 my-[2px] border-b border-gray-300`}>
          <Text style={[rowStyles, tw`w-1/6 font-black text-xl`]}>{row.pos}</Text>
          <View style={tw`flex-row items-center w-1/4`}>
            <View style={tw`h-8 w-[4px] bg-blue-600 mr-2`}></View>
            <Image
              style={tw`w-9 h-9 mr-2 rounded-full`}
              source={{ uri: row.user }} 
            />
          </View>
          <View style={tw`flex-grow items-center justify-start font-bold flex-row`}>
            <Text style={tw`font-extrabold`}>{row.driver}</Text>
        
          </View>
          <View style={tw `rounded-2xl bg-[#ededed] rounded-2xl text-[#67676d]`}>
            <Text style={tw`text-xs leading-tight tracking-wide font-normal mx-auto uppercase leading-none w-auto px-2.5 py-0.5`}>{row.pts} PTS</Text>
          </View>
          <Text style={[rowStyles, tw`w-1/6`]}></Text>
        </View>
      ))}
    </View>
  );
};

export default RankingLeague;