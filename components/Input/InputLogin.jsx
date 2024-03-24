import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View, TextInput, Alert } from "react-native";
import tw from "../../tailwind";
import { Ionicons } from "@expo/vector-icons";

const InputLogin = ({ targetScreen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  const [emailError, setEmailError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Adresse e-mail invalide");
      return false;
    }
    setEmailError("");
    return true;
  };

  const navigateToSignUpScreen = () => {
    navigation.navigate("SignUp");
  };

  const navigateToHome = () => {
    if (email === "" || password === "") {
      Alert.alert("Remplissez les champs", "Veuillez remplir tous les champs avant de passer à l'étape suivante.");
    } else if (!validateEmail(email)) {
      Alert.alert("Adresse e-mail invalide", "Veuillez saisir une adresse e-mail valide.");
    } else {
      navigation.navigate("Home");
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <View style={tw`mt-21`}>
      <View>
        <Text style={tw`text-2xl text-center uppercase my-10 mb-1 font-bold`}>
          Se connecter
        </Text>
        <Text style={tw`text-2xl text-center my-10 text-lg`}>
          Connexion avec votre compte f1
        </Text>
      </View>
      <View>
        <View style={tw`mt-4 mx-4`}>
          <Text style={tw`text-gray-700 uppercase`}>Email</Text>
          <TextInput
            style={tw`border border-gray-400 rounded-md py-3 px-4 my-2`}
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />
          {emailError !== "" && <Text style={tw`text-primaryRed-500`}>{emailError}</Text>}
        </View>
      </View>
      <View style={tw`mt-4 mx-4`}>
        <Text style={tw`text-gray-700 uppercase`}>Password</Text>
        <View style={tw`relative my-2`}>
          <TextInput
            style={tw`border border-gray-400 rounded-md py-3 px-4 pr-10`}
            placeholder="Enter your password"
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={tw`absolute inset-y-0 right-0 flex items-center justify-center pr-3`}
            onPress={togglePasswordVisibility}
          >
            <Ionicons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>
        <View style={tw`flex-row justify-end my-2`}>
          <TouchableOpacity
            style={tw`bg-primaryRed w-29 py-2 rounded-md text-right`}
            onPress={navigateToHome}
          >
            <Text style={tw`text-white font-bold text-center`}>
              Se connecter
            </Text>
          </TouchableOpacity>
        </View>
        <View style={tw`flex flex-row justify-center items-center`}>
          <Text style={tw`text-lg text-center my-10 text-lg`}>Si vous n'avez pas de compte</Text>
          <TouchableOpacity onPress={navigateToSignUpScreen}>
            <Text style={tw`mx-2 underline text-primaryRed`}>
              Inscrivez-vous
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default InputLogin;
