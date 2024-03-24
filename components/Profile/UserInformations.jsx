import React from "react";
import { Text, View } from "react-native";
import tw from "../../tailwind";

const UserInformations = () => {
  return (
    <View style={tw`m-4`}>
      <Text style={tw`font-bold text-base`}>Nom</Text>
      <Text style={tw`text-lg border-b border-gray-400`}>Mathis Laversin</Text>
      <Text style={tw`font-bold text-base mt-5`}>Email</Text>
      <Text style={tw`text-lg border-b border-gray-400`}>
        mathis.laversin@gmail.com
      </Text>
    </View>
  );
};

export default UserInformations;
