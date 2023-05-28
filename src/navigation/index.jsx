import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from "./tabsNav";

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default AppNavigation;
