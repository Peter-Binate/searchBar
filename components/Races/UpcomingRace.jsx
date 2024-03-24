import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import tw from "../../tailwind";

const UpcomingRace = () => {
  const navigation = useNavigation();
  const navigateToResultScreen = () => {
    navigation.navigate("ResultRace");
  };
  return (
    <ScrollView style={tw`flex-1`}>
      <TouchableOpacity
        onPress={navigateToResultScreen}
        style={tw`flex-row bg-white py-6 w-99 pl-3 rounded-md my-2 mt-7`}
      >
        <View style={tw`mx-auto pr-3`}>
          <Text style={tw`font-bold text-xl text-[#67676d] mt-3`}>03-05</Text>
          <View style={tw`rounded-2xl bg-[#ededed] rounded-2xl text-[#67676d]`}>
            <Text
              style={tw`text-xs leading-tight tracking-wide font-normal mx-auto uppercase leading-none w-auto px-2.5 py-0.5`}
            >
              NOV.
            </Text>
          </View>
        </View>
        <View
          style={tw`border-l-2 border-dashed border-[#d0d0d2] bg-black w-68 pl-3`}
        >
          <Text style={tw`text-red-600 font-extrabold text-base`}>
            Round 21
          </Text>
          <Text style={tw`font-extrabold text-2xl mb-2`}>Brazil</Text>
          <Text style={tw`text-[#67676d] mb-3`}>
            FORMULA 1 ROLEX GRANDE PREMIO DE SAO PAULO 2023
          </Text>
        </View>
        <View style={tw`ml-3`}>
          <Ionicons
            name="chevron-forward"
            color={"red"}
            size={25}
            style={tw`pt-15`}
          />
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UpcomingRace;
