import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RaceScreen from "../Race/Races";
import ResultRace from "../Race/ResultRace";

const Stack = createNativeStackNavigator();

const RaceStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Races" component={RaceScreen} />
      <Stack.Screen name="ResultRace" component={ResultRace} />
    </Stack.Navigator>
  );
};

export default RaceStack;
