import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";

import AuthNavigator from "./authNav";
import TabsNavigator from "./tabsNav";

const AppNavigation = () => {
  const userId = useSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>{userId ? <TabsNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
};

export default AppNavigation;
