import React from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { verstappen } from "../../assets";
import tw from "../../tailwind";

export default function DriversCards({item}) {
    const {name, percent, points} = item
  return (
    <View style={tw`bg-white my-2 flex-row justify-between rounded-xl w-96 h-22`}>
        <View style={tw`w-1/3`}>
          <Image source={verstappen} style={tw`w-full rounded-l-xl h-full`} />
        </View>

        <View style={tw`w-1/4 w-50 pt-2`}>
          <Text style={tw`font-bold uppercase w-95 ml-2`}>
            {name}
          </Text>
          
          <View style={tw`flex flex-row gap-3 mt-2 ml-2`}>
            <Text style={tw`font-bold bg-lightGrey py-1 px-2 rounded-lg`}>
              {percent}%
            </Text>
            <Text style={tw`font-bold bg-lightGrey py-1 px-2 rounded-lg`}>
              {points}Pts
            </Text>
          </View>
        </View>

        <View style={tw`flex justify-center px-2`}>
          {/* Bouton Add */}
          <TouchableOpacity style={tw`flex justify-center py-3 border border-slate-950 rounded-lg h-5/6 bg-black`}>
            <Ionicons name="add-outline" size={34} color="white" />
          </TouchableOpacity>  

          {/* Bouton close */}
          {/* <TouchableOpacity style={tw`flex justify-center py-3 border border-slate-950 rounded-lg h-5/6 bg-white`}>
            <Ionicons name="close" size={34} color="black" />
          </TouchableOpacity>   */}
        </View>
    </View>
  );
};
