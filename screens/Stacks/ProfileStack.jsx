import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Profil/Login";
import SignUp from "../Profil/SignUp";
import Profile from "../Profil/Profil";
import UpdateProfileForm from "../Profil/UpdateProfileForm";

const Stack = createNativeStackNavigator();

const ProfilStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >

      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfileForm} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default ProfilStack;
