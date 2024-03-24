import React from "react";
import { Image, Text, View } from "react-native";
import tw from "../../tailwind";

const ResultBoard = () => {
  const data = [
    {
      id: 1,
      pos: 1,
      driver: "VER",
      user: "https://cdn.icon-icons.com/icons2/1736/PNG/512/4043260-avatar-male-man-portrait_113269.png",
      pts: 25,
    },
    {
      id: 2,
      pos: 2,
      driver: "LEC",
      user: "https://cdn-icons-png.flaticon.com/512/4975/4975733.png",
      pts: 18,
    },
    {
      id: 3,
      pos: 3,
      driver: "HAM",
      user: "https://cdn.icon-icons.com/icons2/1879/PNG/512/iconfinder-3-avatar-2754579_120516.png",
      pts: 15,
    },
    {
      id: 4,
      pos: 4,
      driver: "STR",
      user: "https://cdn.icon-icons.com/icons2/582/PNG/512/man-2_icon-icons.com_55041.png",
      pts: 12,
    },
  ];
  const headerStyles = tw`text-white font-bold uppercase text-center`;
  const rowStyles = tw`text-black font-extrabold text-center`;

  return (
    <View style={tw`bg-[#38383f] my-2`}>
      <View style={tw`flex-row mb-2 py-2 px-1`}>
        <Text style={[headerStyles, tw`w-1/6`]}>Pos</Text>
        <Text style={[headerStyles, tw`w-1/4 text-left`]}>Driver</Text>
        <Text style={[headerStyles, tw`flex-grow text-center`]}>User</Text>
        <Text style={[headerStyles, tw`w-1/6`]}>Pts</Text>
      </View>
      {data.map((row) => (
        <View
          key={row.id}
          style={tw`flex-row bg-white items-center py-2 border-b border-gray-300`}
        >
          <Text style={[rowStyles, tw`w-1/6`]}>{row.pos}</Text>
          <View style={tw`flex-row items-center w-1/4`}>
            <View style={tw`h-4 w-[4px] bg-blue-600 mr-2`}></View>
            <Text style={tw`font-extrabold`}>{row.driver}</Text>
          </View>
          <View style={tw`flex-grow items-center justify-center flex-row`}>
            <Image
              style={tw`w-6 h-6 mr-2 rounded-full`}
              source={{ uri: row.user }}
            />
          </View>
          <Text style={[rowStyles, tw`w-1/6`]}>{row.pts}</Text>
        </View>
      ))}
    </View>
  );
};

export default ResultBoard;
