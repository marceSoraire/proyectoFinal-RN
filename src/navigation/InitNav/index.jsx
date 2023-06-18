import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { colorsTheme } from "../../constants";
import { Disciplines, Category, Section, NewAssociates } from "../../pages/index";
const Stack = createNativeStackNavigator();

const InitNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Disciplines"
      screenOptions={{
        headerStyle: {
          backgroundColor: colorsTheme.background,
        },
        headerTintColor: colorsTheme.black,
        headerTitleStyle: { fontFamily: "italic" },
      }}>
      <Stack.Screen
        name="Disciplines"
        component={Disciplines}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={({ route }) => ({ title: route.params.name })}
      />
      <Stack.Screen
        name="Section"
        component={Section}
        options={({ route }) => ({ title: route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default InitNavigator;
