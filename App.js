import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeStack from "./screens/Stacks/HomeStack";
import LeagueStack from "./screens/Stacks/LeagueStack";
import ProfileStack from "./screens/Stacks/ProfileStack";
import RaceStack from "./screens/Stacks/RaceStack";
import tw from "./tailwind";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Accueil") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Profil") {
              iconName = focused ? "person" : "person-outline";
            } else if (route.name === "League") {
              iconName = focused ? "trophy" : "trophy-outline";
            } else if (route.name === "Courses") {
              iconName = focused ? "flag" : "flag-outline";
            }

            // Ici, vous pouvez ajuster la taille et la couleur selon vos préférences
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: tw`text-primaryRed`.color, // Couleur de l'icône quand l'onglet est actif
          tabBarInactiveTintColor: tw`text-backgroundGrey`.color, // Couleur de l'icône quand l'onglet est inactif
          headerShown: false,
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
            marginTop: -5,
          },
          tabBarStyle: [
            {
              display: "flex",
              //augmenter la hauteur de la navbar
              height: 70,
            },
            null,
          ],
        })}
      >
        <Tab.Screen name="Accueil" component={HomeStack} />
        <Tab.Screen name="Courses" component={RaceStack} />
        <Tab.Screen name="League" component={LeagueStack} />
        <Tab.Screen name="Profil" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
