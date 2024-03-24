import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { monacoTrack } from "../../assets";
import tw from "../../tailwind";

const LeagueCard = () => {
  const navigation = useNavigation();

  const navigateToRanking = () => {
    navigation.navigate("Ranking");
  };

  return (
    <TouchableOpacity onPress={navigateToRanking}>
      <View style={tw`flex-row justify-between p-4 mb-3 bg-white rounded-md`}>
        <View style={tw`flex-row gap-x-3`}>
          <Image
            source={monacoTrack}
            style={tw`w-12 bg-gray-800 aspect-square rounded-full`}
          />
          <View>
            <Text style={tw`text-xl font-semibold`}>Team 1</Text>
            <Text>6 members</Text>
          </View>
        </View>
        <View style={tw`self-center`}>
          {/* <Text>Voté</Text> */}
          <Ionicons
            name="checkmark-sharp"
            style={tw`text-primaryRed`}
            size={20}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LeagueCard;
