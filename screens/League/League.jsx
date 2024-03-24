import React, { useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity, Modal } from "react-native"; // Ajouter Modal
import Header from "../../components/Header.jsx";
import DriversPopup from "./DriversPopup";
import { Ionicons } from '@expo/vector-icons';
import tw from "../../tailwind";

const LeagueScreen = () => {
  // État pour contrôler la visibilité de la modal qui affiche la liste des Drivers
  const [isModalVisible, setIsModalVisible] = useState(false); 

  return (
    // Zone de sécurité pour éviter que le contenu ne soit pas coupé par les bords (Iphone)
    <SafeAreaView style={tw`flex-1`}>
      <Header />
      <View style={tw`border-2 border-purple-50 bg-white`}>
        
        <View style={tw`h-full bg-lightGrey flex items-center`}>
          {/* Formulaire pour ajouter un Driver */}
          <View style={tw`bg-white mt-70 flex items-center w-80 shadow-md`}>
            
            <TouchableOpacity 
              style={tw`bg-primaryRed my-6 p-2 rounded-lg`}
              onPress={() => setIsModalVisible(true)} // Afficher la modal lors du clic
            >
              <Ionicons name="add-outline" size={34} color="white" />
            </TouchableOpacity>

            <Text style={tw`text-2xl mb-8 font-medium border-b-4 border-primaryRed`}>
              Ajouter un Pilote
            </Text>
          </View>
        </View>

      </View>

      {/* On appelle le composant DriversPopup */}
      <DriversPopup  visible={isModalVisible} closeModal={() => setIsModalVisible(false)} /> 

    </SafeAreaView>
  );
};

export default LeagueScreen;