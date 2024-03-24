import React, { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, Text, View, TextInput, TouchableOpacity } from "react-native";
import tw from "../../tailwind";

export default function DriverSearchBar() {
  return (
    <View style={tw`flex-row items-center justify-between mx-auto w-[90] h-[12] mb-8 rounded-lg bg-driverBgColor`}>
        <TextInput placeholder="Search Drivers" style={tw`ml-2.5`}></TextInput>
        <TouchableOpacity style={tw`mr-2.5`}>
            <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
    </View>
  );
};
