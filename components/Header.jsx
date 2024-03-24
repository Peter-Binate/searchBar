import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import tw from "../tailwind";

const Header = () => {
  const navigation = useNavigation();

  const navigateToProfile = () => {
    navigation.navigate("Profil");
  };

  return (
    <View style={tw`flex-row bg-primaryRed p-6 items-center justify-between`}>
      <View style={tw`w-12`}></View>
      <View style={tw`flex-1 justify-center items-center mt-4`}>
        <Text style={tw`text-white text-2xl font-bold italic`}>P10-Game</Text>
      </View>
      <TouchableOpacity
        style={tw`p-2 bg-red-400 rounded-xl mt-4`}
        onPress={navigateToProfile}
      >
        <Ionicons name="person" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
