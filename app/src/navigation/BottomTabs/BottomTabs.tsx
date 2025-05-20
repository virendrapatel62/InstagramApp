import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { Fragment } from "react";
import { TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import { Icon, Image } from "../../components/atoms";
import ReelIcon from "../../components/icons/Reel.icon";
import { placeholderProfilePicture } from "../../lib/images";
import { useTheme } from "../../theme";

import { SCREENS, useNavigation } from "..";
import { getBottomTabsConfig } from "../config/BottomTab.config";

const BottomTabNavigator = createBottomTabNavigator();

export default function BottomTabs() {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const config = getBottomTabsConfig(navigation);

  const commonOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarButton(props: any) {
      return (
        <TouchableWithoutFeedback onPress={props.onPress}>
          <View {...props}>{props.children}</View>
        </TouchableWithoutFeedback>
      );
    },
  };

  return (
    <BottomTabNavigator.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.colors.background,
          borderTopColor: theme.colors.border,
        },
        tabBarItemStyle: {
          paddingTop: 8,
        },
      }}
    >
      {config.map((tab) => {
        return (
          <BottomTabNavigator.Screen
            key={tab.name}
            name={tab.name}
            component={tab.component}
            options={{
              ...commonOptions,
              tabBarStyle: Object.assign(
                {
                  backgroundColor: theme.colors.background,
                },
                tab?.options?.tabBarStyle
              ),
              tabBarIcon: tab.icon,
              headerShown: !!tab.options?.headerShown,
              animation: "shift",
              tabBarButton(props) {
                return (
                  <TouchableOpacity
                    activeOpacity={1}
                    style={{
                      flex: 1,
                      display: "flex",
                      alignItems: "center",
                    }}
                    onLongPress={tab.onLongPress}
                    onPress={props.onPress}
                    key={tab.name}
                  >
                    {props.children}
                  </TouchableOpacity>
                );
              },
            }}
          />
        );
      })}
    </BottomTabNavigator.Navigator>
  );
}
