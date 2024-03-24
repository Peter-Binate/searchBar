import React, { useState } from "react";
import DriverSearchBar from "./DriverSearchBar";
import DriverCards from "./DriverCards";
import { SafeAreaView, Text, View, TouchableOpacity, Modal, FlatList } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import tw from "../../tailwind";

  const DriversPopup = ({ visible, closeModal }) => {
  const driversData = [
    {name : 'max verstappen', percent : 40, points: 81}, 
    {name : 'tom verstappen', percent : 40, points: 81},
    {name : 'max verstappen', percent : 40, points: 81},
    {name : 'leo verstappen', percent : 40, points: 81}, 
    {name : 'max verstappen', percent : 40, points: 81},
    {name : 'lili verstappen', percent : 40, points: 81},
    {name : 'max verstappen', percent : 40, points: 81}, 
    {name : 'max verstappen', percent : 40, points: 81},
    {name : 'max verstappen', percent : 40, points: 81},
  ]
  
  return (
    <Modal
      animationType="slide"
      transparent={true} //rend la modal transparente
      visible={visible}
      onRequestClose={closeModal} //spécifie la fonction à appeler lorsque l'utilisateur tente de fermer la modal
    >
      
      <SafeAreaView style={tw`flex-1`}>
          <View style={tw`h-full bg-driverBgColor flex items-center`}>

            <View style={tw`bg-white mb-5`}>

              {/* Bouton effacer et Fait */}
              <View style={tw`flex-row justify-end w-full gap-5 mt-3 mb-6 px-1`}>
                  
                  <TouchableOpacity style={tw`py-3 border-b-4 border-primaryRed`}>
                    <Text style={tw`text-xl`}>Effacer</Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={tw`bg-primaryRed py-3 px-7 rounded-lg`} onPress={closeModal}>
                    <Text style={tw`text-xl uppercase text-white`}>Fait</Text>
                  </TouchableOpacity>

              </View>

              <View style={tw`flex items-center`}>
                <Text style={tw`text-2xl font-bold mb-1`}>
                  Drivers
                </Text>
                <View style={tw`border-2 border-primaryRed bg-primaryRed w-1/3 mb-6`}/>
              </View>

              <DriverSearchBar />

            </View>

            
          <FlatList
            data={driversData}
            renderItem={({item})=> (
              <DriverCards item={item}/>
            )}
          />
          </View>
      </SafeAreaView>

    </Modal>
  );
};

export default DriversPopup;