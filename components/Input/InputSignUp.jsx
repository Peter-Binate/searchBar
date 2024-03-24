import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import tw from "../../tailwind";

const InputSignUp = ({ targetScreen }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [step, setStep] = useState(1); // Étape initiale est 1
  const [showAlert, setShowAlert] = useState(false); // État pour vérifier si une alerte est affichée
  const navigation = useNavigation();
  const [emailError, setEmailError] = useState("");

  const navigateToLoginScreen = () => {
    navigation.navigate("Login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleNext = () => {
    if (step === 1) {
      if (email === "" || password === "") {
        Alert.alert("Remplissez les champs", "Veuillez remplir tous les champs avant de passer à l'étape suivante.");
      } else if (!validateEmail(email)) {
        Alert.alert("Adresse e-mail invalide", "Veuillez saisir une adresse e-mail valide.");
      } else {
        setStep(2); // Passer à l'étape 2
      }
    } else if (step === 2) {
      navigation.navigate(targetScreen); // Naviguer vers la nouvelle vue
    }
  };

  const handleBack = () => {
    if (step === 2) {
      // Si c'est la deuxième étape
      setStep(1); // Revenir à l'étape 1
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Adresse e-mail invalide");
      return false;
    }
    setEmailError("");
    return true;
  };


  return (
    <View>
      <View>
        <Text style={tw`text-2xl text-center my-10 mb-1 font-bold`}>
          Créez votre compte P-10
        </Text>
      </View>
      <View style={tw`flex flex-row justify-center items-center`}>
        <Text style={tw`text-2xl text-center my-10 text-lg`}>
          Tu as un compte F1?
        </Text>
        <TouchableOpacity onPress={navigateToLoginScreen}>
          <Text style={tw`text-primaryRed underline mx-3`}>Se connecter</Text>
        </TouchableOpacity>
      </View>
      {step === 1 && (
        <View>
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
              {emailError !== "" && <Text style={tw`text-red-500`}>{emailError}</Text>}
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
          </View>
        </View>
      )}
      {step === 2 && (
        <View>
          <View style={tw`mt-4 m mx-4`}>
            <Text style={tw`text-gray-700 uppercase`}>Firstname</Text>
            <TextInput
              style={tw`border border-gray-400 rounded-md py-3 px-4 my-2`}
              placeholder="Enter your firstname"
              autoCapitalize="none"
              autoCorrect={false}
              value={firstName}
              onChangeText={setFirstName}
            />
          </View>
          <View style={tw`mt-4 mx-4`}>
            <Text style={tw`text-gray-700 uppercase`}>Lastname</Text>
            <TextInput
              style={tw`border border-gray-400 rounded-md py-3 px-4 my-2`}
              placeholder="Enter your lastname"
              autoCapitalize="none"
              autoCorrect={false}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
        </View>
      )}
      <View style={tw`flex-row justify-end mr-4 my-2`}>
        <TouchableOpacity
          onPress={handleNext}
          style={tw`bg-primaryRed w-29 py-2 rounded-md text-right`}
        >
          <Text style={tw`text-white font-bold text-center`}>
            {step === 1 ? "Suivant" : "Valider"}
          </Text>
        </TouchableOpacity>
      </View>
      {step === 2 && (
        <TouchableOpacity
          onPress={handleBack}
          style={tw`absolute left-4 top-4`}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputSignUp;

