import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colorsTheme } from "../../constants";
import { Partners, Teachers, Associates } from "../../pages";

const Stack = createNativeStackNavigator();

const PartnersNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Partners"
      screenOptions={{
        headerStyle: {
          backgroundColor: colorsTheme.background,
        },
        headerTintColor: colorsTheme.black,
        headerTitleStyle: { fontFamily: "italic" },
      }}
    >
      <Stack.Screen name="Partners" component={Partners} />
      <Stack.Screen name="Teachers" component={Teachers} />
      <Stack.Screen name="Associates" component={Associates} />
    </Stack.Navigator>
  );
};

export default PartnersNavigator;
