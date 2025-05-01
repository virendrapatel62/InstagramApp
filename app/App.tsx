import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Fragment } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { Icon, Image } from './src/components/atoms';
import ReelIcon from './src/components/icons/Reel.icon';
import { placeholderProfilePicture } from './src/lib/images';
import HomeScreen from './src/screens/Home/Home.screen';
import NewPostScreen from './src/screens/NewPost/NewPost.screen';
import PlaceholderScreen from './src/screens/Placeholder/Placeholder.screen';

const Stack = createNativeStackNavigator();
const BottomTabNavigator = createBottomTabNavigator();

function BottomTabScreens() {
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

  const renderIcon = (tabName: string) => {
    const iconSize = 24;
    let icon = <Fragment />;
    switch (tabName) {
      case 'home':
        icon = <Icon size={iconSize} name="home" lib="Entypo" />;
        break;

      case 'search':
        icon = <Icon size={iconSize} name="search1" lib="AntDesign" />;
        break;

      case 'post':
        icon = <Icon size={iconSize + 2} name="plus-square-o" />;
        break;

      case 'reels':
        icon = <ReelIcon size={iconSize - 2} />;
        break;

      case 'profile':
        icon = (
          <Image
            src={placeholderProfilePicture}
            height={iconSize}
            aspectRatio={1}
            rounded
          />
        );
        break;
      default:
        return null;
    }

    return (
      <View
        style={{
          marginTop: 6,
        }}>
        {icon}
      </View>
    );
  };

  return (
    <BottomTabNavigator.Navigator screenOptions={{}}>
      <BottomTabNavigator.Screen
        name="Home"
        options={{
          tabBarIcon: () => renderIcon('home'),
          ...commonOptions,
        }}
        component={HomeScreen}
      />
      <BottomTabNavigator.Screen
        name="Search"
        options={{
          tabBarIcon: () => renderIcon('search'),
          ...commonOptions,
        }}
        component={() => <PlaceholderScreen name="Search" />}
      />
      <BottomTabNavigator.Screen
        name="Post"
        options={{
          tabBarIcon: () => renderIcon('post'),
          ...commonOptions,
        }}
        component={NewPostScreen}
      />
      <BottomTabNavigator.Screen
        name="reels"
        options={{
          tabBarIcon: () => renderIcon('reels'),
          ...commonOptions,
        }}
        component={() => <PlaceholderScreen name="Scroll Reels" />}
      />
      <BottomTabNavigator.Screen
        name="profile"
        options={{
          tabBarIcon: () => renderIcon('profile'),
          ...commonOptions,
        }}
        component={() => <PlaceholderScreen name="Profile" />}
      />
    </BottomTabNavigator.Navigator>
  );
}

function RootStack() {
  const commonOptions = {
    headerShown: false,
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={commonOptions}
        name="Home"
        component={BottomTabScreens}
      />
      <Stack.Screen
        options={commonOptions}
        name="Messages"
        component={() => <PlaceholderScreen name="Messages" />}
      />
      <Stack.Screen
        options={commonOptions}
        name="Notifications"
        component={() => <PlaceholderScreen name="Likes & Comments" />}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
