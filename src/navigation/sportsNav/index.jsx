import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colorsTheme } from "../../constants";
import { Sports } from "../../pages";

const Stack = createNativeStackNavigator();

const SportNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Sport"
      screenOptions={{
        headerStyle: {
          backgroundColor: colorsTheme.background,
        },
        headerTintColor: colorsTheme.black,
        headerTitleStyle: { fontFamily: "italic" },
      }}
    >
      <Stack.Screen name="Sport" component={Sports} />
    </Stack.Navigator>
  );
};

export default SportNavigator;
