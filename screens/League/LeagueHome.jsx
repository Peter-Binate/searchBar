import { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Header from "../../components/Header";
import JoinModal from "../../components/league/JoinModal";
import LeagueCard from "../../components/league/LeagueCard";
import tw from "../../tailwind";

export default function LeagueHome() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <SafeAreaView style={tw`flex-1`}>
      <ScrollView style={tw``}>
        <Header />
        <View style={tw`m-5`}>
          <Text style={tw`text-2xl font-bold mb-5`}>Leagues</Text>

          <LeagueCard />
          <LeagueCard />
          <LeagueCard />

          <View style={tw`flex-row gap-x-2 justify-center mt-3`}>
            <TouchableOpacity style={tw`px-8 py-4 rounded-lg bg-primaryRed`}>
              <Text style={tw`text-white font-medium`}>Créer</Text>
              {/* <Ionicons name="chevron-forward" style={tw`text-white`} /> */}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsModalVisible(true)}
              style={tw`px-8 py-4 rounded-lg bg-primaryRed`}
            >
              <Text style={tw`text-white font-semibold`}>Rejoindre</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <JoinModal
        visible={isModalVisible}
        closeModal={() => setIsModalVisible(false)}
      />
    </SafeAreaView>
  );
}
