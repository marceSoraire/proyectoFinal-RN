import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colorsTheme } from "../../constants";
import { Location, SavePlace } from "../../pages";
const Stack = createNativeStackNavigator();

const LocationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Locations"
      screenOptions={{
        headerStyle: {
          backgroundColor: colorsTheme.background,
        },
        headerTintColor: colorsTheme.black,
        headerTitleStyle: { fontFamily: "italic" },
      }}>
      <Stack.Screen
        name="Locations"
        component={Location}
      />
      <Stack.Screen
        name="SavePlace"
        component={SavePlace}
      />
    </Stack.Navigator>
  );
};

export default LocationNavigator;
