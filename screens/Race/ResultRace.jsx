import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Header from "../../components/Header.jsx";
import ResultBoard from "../../components/Races/ResultBoard.jsx";
import tw from "../../tailwind.js";

const ResultRace = () => {
  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView>
        <Header />
        <View>
          <ResultBoard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultRace;
