import React from "react";
import { View } from "react-native";
import InputLogin from "../../components/Input/InputLogin";

const LoginScreen = () => {
  return (
    // Zone de sécurité pour éviter que le contenu ne soit pas coupé par les bords (Iphone)
    <View>
      {/* <SafeAreaView style={tw`flex-1 bg-bg_input`}>
        <ScrollView>
          <Input />
        </ScrollView> */}
      {/* <View style={tw`mt-10 ml-15`}>
          <Text style={tw`font-bold text-xl`}>LoginScreen</Text>
        </View>
        <Text>contenu</Text> */}
      <InputLogin />
    </View>
    // </SafeAreaView >
  );
};

export default LoginScreen;
