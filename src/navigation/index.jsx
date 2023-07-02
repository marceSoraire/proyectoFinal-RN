import { NavigationContainer } from "@react-navigation/native";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AuthNavigator from "./authNav";
import TabsNavigator from "./tabsNav";
import { getPlacesAsync } from "../store/actions";

const AppNavigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPlacesAsync());
  }, []);
  const userId = useSelector((state) => state.auth.userId);

  return (
    <NavigationContainer>{userId ? <TabsNavigator /> : <AuthNavigator />}</NavigationContainer>
  );
};

export default AppNavigation;
