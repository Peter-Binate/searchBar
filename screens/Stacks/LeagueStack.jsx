import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LeagueScreen from "../League/League";
// import LeagueHome from "../League/LeagueHome";
// import Ranking from "../League/Ranking";

const Stack = createNativeStackNavigator();

const LeagueStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* <Stack.Screen name="LeaguesHome" component={LeagueHome} /> */}
      <Stack.Screen name="Leagues" component={LeagueScreen} />
      {/* <Stack.Screen name="Ranking" component={Ranking} /> */}
    </Stack.Navigator>
  );
};

export default LeagueStack;
