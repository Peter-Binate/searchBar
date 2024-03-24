import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import tw from "../../tailwind";

const UpdateProfileForm = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      {/* Header */}
      <View style={tw`flex-row bg-primaryRed p-6 items-center justify-between`}>
        <View style={tw`w-12`}></View>
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-white text-2xl font-bold italic mt-2`}>
            Paramètres
          </Text>
        </View>
        <View style={tw`w-12`}></View>
      </View>
      <View>
        <Text style={tw`font-semibold text-base m-4`}>Mon compte</Text>
        <View style={tw`bg-white rounded-2xl mx-3`}>
          <TouchableOpacity
            style={tw`flex-row justify-between items-center m-4`}
          >
            <Text style={tw`font-semibold`}>Mathis Laversin</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              style={tw`ml-3 text-primaryRed`}
            />
          </TouchableOpacity>
        </View>
        <View style={tw`bg-white rounded-2xl m-3`}>
          <TouchableOpacity
            style={tw`flex-row justify-between items-center m-4`}
          >
            <Text style={tw`font-semibold`}>A propos de l'app</Text>
            <Ionicons
              name="chevron-forward"
              size={20}
              style={tw`ml-3 text-primaryRed`}
            />
          </TouchableOpacity>
        </View>
        <View style={tw`flex items-center justify-center mt-4`}>
          <TouchableOpacity style={tw`border-2 p-4 rounded-xl bg-white`}>
            <Text>Se déconnecter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default UpdateProfileForm;
