import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";

import { colorsTheme } from "../../constants";
import { Location, SavePlace, Maps, DetailsPlaces } from "../../pages";
const Stack = createNativeStackNavigator();

const LocationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SavePlace"
      screenOptions={{
        headerStyle: {
          backgroundColor: colorsTheme.background,
        },
        headerTintColor: colorsTheme.black,
        headerTitleStyle: { fontFamily: "italic" },
      }}>
      <Stack.Screen
        name="SavePlace"
        component={SavePlace}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Locations")}>
              <Ionicons
                name="add-circle-outline"
                size={25}
                color={colorsTheme.white}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Locations"
        component={Location}
      />
      <Stack.Screen
        name="Maps"
        component={Maps}
      />
      <Stack.Screen
        name="DetailsPlaces"
        component={DetailsPlaces}
      />
    </Stack.Navigator>
  );
};

export default LocationNavigator;
