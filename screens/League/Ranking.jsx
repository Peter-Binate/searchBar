import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import Header from "../../components/Header.jsx";
import RankingLeague from "../../components/RankingLeague.jsx";
import tw from "../../tailwind.js";

const Ranking = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#ededed]`}>
      <ScrollView>
        <Header />
        <RankingLeague />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Ranking;
