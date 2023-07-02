import { FontAwesome5 } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";

import { colorsTheme } from "../../constants";
import { Sports, Orders } from "../../pages";

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
      }}>
      <Stack.Screen
        name="Sport"
        component={Sports}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Orders")}>
              <FontAwesome5
                name="inbox"
                size={24}
                color={colorsTheme.white}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
      />
    </Stack.Navigator>
  );
};

export default SportNavigator;
