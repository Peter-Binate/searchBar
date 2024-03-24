import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { illuPilot } from "../assets";
import GpRace from "../components/GpRace";
import Header from "../components/Header";
import tw from "../tailwind";

const HomeScreen = () => {
  return (
    // Zone de sécurité pour éviter que le contenu ne soit pas coupé par les bords (Iphone)
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView style={tw``}>
        <Header />
        <View style={tw`m-5`}>
          <View style={tw`mb-10`}>
            <Text style={tw`font-bold text-3xl text-center mb-2`}>P10 app</Text>
            <Text style={tw`text-center text-xl`}>
              Le jeu officiel P10 games
            </Text>
          </View>

          <View style={tw`flex justify-end items-end`}>
            <Image
              source={illuPilot}
              style={tw`w-full h-45 flex justify-center items-end`}
            />
          </View>

          <GpRace chooseButton />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
