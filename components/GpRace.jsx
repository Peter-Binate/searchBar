import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { australiaFlag, monacoTrack } from "../assets";

import tw from "../tailwind";

const GpRace = ({ chooseButton }) => {
  const navigation = useNavigation();

  const navigateToLeagueScreen = () => {
    navigation.navigate("League");
  };

  return (
    <View style={tw`p-5 bg-white rounded-md`}>
      <View
        style={tw`flex-row gap-x-2 pr-5 pb-5 mb-5 border-b border-r rounded-br-xl`}
      >
        <View style={tw`w-9/12`}>
          <View style={tw`flex-row gap-x-2 mb-3 items-center`}>
            <Image source={australiaFlag} style={tw`w-8 h-5`} />
            <Text style={tw`font-bold text-2xl`}>Monaco</Text>
          </View>
          <Text>FORMULA 1 ROLEX AUSTRALIAN GRAND PRIX 2024</Text>
        </View>
        <View style={tw`w-3/12 flex justify-center items-center`}>
          <Image
            source={monacoTrack}
            style={tw`w-full h-20 flex items-center`}
            resizeMode="contain"
          />
        </View>
      </View>
      <View
        style={tw`flex-row gap-x-2 justify-center bg-stone-900 p-5 mb-5 rounded-xl`}
      >
        <Text style={tw`text-white`}>Durée limite pour finaliser</Text>
        <Text style={tw`text-white`}>2j : 18h : 23m</Text>
      </View>
      {chooseButton && (
        <View style={tw`bg-primaryRed p-5 rounded-xl`}>
          <TouchableOpacity
            onPress={navigateToLeagueScreen}
            style={tw`flex-row justify-center items-center gap-x-1`}
          >
            <Text style={tw`text-white text-center uppercase font-medium`}>
              Choisissez votre écurie
            </Text>
            <Ionicons name="chevron-forward" style={tw`text-white`} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default GpRace;
