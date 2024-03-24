import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Header from "../../components/Header";
import PastRace from "../../components/Races/PastRace.jsx";
import UpcomingRace from "../../components/Races/UpcomingRace.jsx";
import tw from "../../tailwind.js";

const Tab = createMaterialTopTabNavigator();

const RaceScreen = () => {
  return (
    <SafeAreaView style={tw`flex-1 bg-[#ededed]`}>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "#ededed",
          tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
          tabBarStyle: { backgroundColor: "red" },
          tabBarIndicatorStyle: { backgroundColor: "white", height: 2 },
        }}
      >
        <Tab.Screen name="Upcoming" component={UpcomingRace} />
        <Tab.Screen name="Past" component={PastRace} />
      </Tab.Navigator>
      <ScrollView>
        <Header />
        <View>
          <PastRace />
          <PastRace />
          <PastRace />
          <PastRace />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RaceScreen;
