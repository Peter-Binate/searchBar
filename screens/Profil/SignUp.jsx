import React from "react";
import { View } from "react-native";
import InputSignUp from "../../components/Input/InputSignUp";
import InputLogin from "../../components/Input/InputLogin";
import tw from "../../tailwind";

const SignUp = () => {
  return (
    <View style={tw`my-10`}>
      <InputSignUp />
      {/* <InputLogin/> */}
    </View>
  );
};

export default SignUp;
