import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import UserInformations from "../../components/Profile/UserInformations";
import tw from "../../tailwind";

const Profil = () => {
  const navigation = useNavigation();

  const navigateToUpdateProfile = () => {
    navigation.navigate("UpdateProfile");
  };

  return (
    <SafeAreaView style={tw`flex-1`}>
      {/* Header */}
      <View style={tw`flex-row bg-primaryRed p-6 items-center justify-between`}>
        <View style={tw`w-12`}></View>
        <View style={tw`flex-1 justify-center items-center`}>
          <Text style={tw`text-white text-2xl font-bold italic mt-2`}>
            Mon profil
          </Text>
        </View>
        <View style={tw`w-12`}></View>
      </View>
      {/* Content */}
      <View>
        <UserInformations />
        {/* Modify user informations, redirect to UpdateProfileForm */}
        <TouchableOpacity onPress={navigateToUpdateProfile}>
          <Text style={tw`text-primaryRed font-semibold text-base m-4`}>
            Modifier vos informations
          </Text>
        </TouchableOpacity>
      </View>
      {/* Delete account */}
      <View style={tw`mx-5`}>
        <View style={tw`border-t border-gray-400`}></View>
        <TouchableOpacity style={tw`flex-row items-center m-4`}>
          <Text style={tw`font-semibold`}>Supprimer mon compte</Text>
          <Ionicons
            name="chevron-forward"
            size={20}
            style={tw`ml-3 text-primaryRed`}
          />
        </TouchableOpacity>
        <View style={tw`border-b border-gray-400`}></View>
      </View>
    </SafeAreaView>
  );
};

export default Profil;
