import Ionicons from "@expo/vector-icons/Ionicons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";

import { colorsTheme } from "../../constants";
import { Partners, Teachers, Associates, NewAssociates, DetailsAssociates } from "../../pages";

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
      }}>
      <Stack.Screen
        name="Partners"
        component={Partners}
      />
      <Stack.Screen
        name="Teachers"
        component={Teachers}
      />
      <Stack.Screen
        name="Associates"
        component={Associates}
        options={({ navigation }) => ({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("NewAssociates")}>
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
        name="DetailsAssociates"
        component={DetailsAssociates}
      />
      <Stack.Screen
        name="NewAssociates"
        component={NewAssociates}
      />
    </Stack.Navigator>
  );
};

export default PartnersNavigator;
