import { useEffect, useRef, useState } from 'react';
import {
  Pressable,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native';
import { Box, Stack } from 'react-native-flex-layout';
import { Icon, Image, Text } from '../../components/atoms';
import Flex from '../../components/atoms/Flex/Flex.component';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';
import { metaAILogo } from '../../lib/images';
import { getRandomImage, getRandomUsers } from '../../lib/seed';
import { useTheme } from '../../theme';
import createStyles from './Search.styles';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  createNavigationContainerRef,
  useNavigation,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigateToSearchScreen, SCREENS } from '../../navigation';
import PlaceholderScreen from '../Placeholder/Placeholder.screen';
export const searchTabRef = createNavigationContainerRef();

function PostGrid() {
  const [count, setCount] = useState(20);

  return (
    <ScreenWrapper safeArea={false}>
      <ScrollView>
        <Stack id="post-grid" spacing={2}>
          {Array(count)
            .fill(0)
            .map((_, index) => (
              <Flex key={index} direction="row" style={{ gap: 2 }}>
                <Image
                  width={'33.33%'}
                  aspectRatio={1}
                  src={getRandomImage(200)}></Image>
                <Image
                  width={'33.33%'}
                  aspectRatio={1}
                  src={getRandomImage(200)}></Image>
                <Image
                  width={'33.33%'}
                  aspectRatio={1}
                  src={getRandomImage(200)}></Image>
              </Flex>
            ))}
        </Stack>
      </ScrollView>
    </ScreenWrapper>
  );
}

function SearchSuggestions() {
  const { theme } = useTheme();
  const navigation = useNavigation();

  const handleSuggestionClick = (item: any) => {
    navigateToSearchScreen(navigation, {
      fromLongPress: false,
      screen: SCREENS.SEARCH_RESULT_TABS,
    });
  };

  return (
    <ScreenWrapper
      safeArea={false}
      style={{
        paddingHorizontal: 16,
      }}>
      <ScrollView>
        <Stack id="search-results" spacing={16}>
          {getRandomUsers().map((user, index) => (
            <Pressable
              onPress={() => handleSuggestionClick(user)}
              key={user.id}>
              <Flex direction="row" items="center" style={{ gap: 16 }}>
                <Image
                  src={user.profilePic}
                  width={50}
                  rounded
                  aspectRatio={1}></Image>

                <Stack spacing={2}>
                  <Text weight="bold">{user.username}</Text>
                  <Text color={theme.colors.textSecondary}>
                    {user.fullName}
                  </Text>
                </Stack>
              </Flex>
            </Pressable>
          ))}
        </Stack>
      </ScrollView>
    </ScreenWrapper>
  );
}

function SearchInput(props: {
  focusInput: boolean;
  onBlur: () => void;
  onFocus: () => void;
}) {
  const { theme, isDark } = useTheme();
  const styles = createStyles(theme, isDark);
  const navigation = useNavigation();

  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    setTimeout(() => {
      props.focusInput && inputRef?.current?.focus();
      !props.focusInput && inputRef?.current?.blur();
    }, 10);
  }, [props.focusInput]);

  return (
    <Stack>
      <Flex
        style={{
          paddingHorizontal: 16,
        }}
        direction="row"
        justify="center"
        items="center">
        <Icon
          onPress={() => navigation.goBack()}
          size={30}
          name="angle-left"></Icon>
        <Flex style={styles.inputContainer} grow={1}>
          <Image
            style={styles.metaAiLogo}
            src={metaAILogo}
            height={20}
            aspectRatio={1}></Image>
          <TextInput
            ref={inputRef}
            onFocus={() => props.onFocus()}
            onBlur={() => props.onBlur()}
            placeholder="Ask Meta AI or search"
            style={styles.input}></TextInput>
        </Flex>
      </Flex>
    </Stack>
  );
}

const SearchScreenNestedStack = createNativeStackNavigator();

const Tab = createMaterialTopTabNavigator();

function SearchTabForYouScreen() {
  return <PlaceholderScreen name="For you"></PlaceholderScreen>;
}
function SearchResults(props: { type: string }) {
  return <PlaceholderScreen name={props.type}></PlaceholderScreen>;
}

function SearchTabs() {
  const { theme, isDark } = useTheme();
  const SearchResultForYou = () => (
    <SearchResults type="For you"></SearchResults>
  );
  const SearchResultAccounts = () => (
    <SearchResults type="Accounts"></SearchResults>
  );
  const SearchResultReels = () => <SearchResults type="Reels"></SearchResults>;
  const SearchResultAudio = () => <SearchResults type="Audio"></SearchResults>;
  const SearchResultTags = () => <SearchResults type="Tags"></SearchResults>;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowIcon: false,
        tabBarShowLabel: true,
        swipeEnabled: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarIndicatorStyle: {
          backgroundColor: isDark ? theme.colors.white : theme.colors.black, // 👈 sets the bottom line to white
        },
        tabBarPressColor: 'transparent',
        tabBarLabelStyle: {
          color: theme.colors.textPrimary,
          fontSize: theme.fontSizes.sm,
          fontWeight: theme.fontWeights.bold,
        },
      }}>
      <Tab.Screen key="ForYou" name="For You" component={SearchResultForYou} />
      <Tab.Screen name="Accounts" component={SearchResultAccounts} />
      <Tab.Screen name="Reels" component={SearchResultReels} />
      <Tab.Screen name="Audio" component={SearchResultAudio} />
      <Tab.Screen name="Tags" component={SearchResultTags} />
    </Tab.Navigator>
  );
}

function NestedStack() {
  return (
    <SearchScreenNestedStack.Navigator
      initialRouteName={SCREENS.SEARCH_INITIAL_FEED}>
      <SearchScreenNestedStack.Screen
        name={SCREENS.SEARCH_RESULT_TABS}
        component={SearchTabs}
        options={{
          headerShown: false,
          animation: 'none',
        }}
      />
      <SearchScreenNestedStack.Screen
        name={SCREENS.SEARCH_SUGGESTIONS}
        component={SearchSuggestions}
        options={{
          headerShown: false,
          animation: 'none',
        }}
      />
      <SearchScreenNestedStack.Screen
        name={SCREENS.SEARCH_INITIAL_FEED}
        component={PostGrid}
        options={{
          headerShown: false,
          animation: 'none',
        }}
      />
    </SearchScreenNestedStack.Navigator>
  );
}

export default function SearchScreen(props: any) {
  const fromLongPress = props.route.params?.fromLongPress;
  const [focusSearchInput, setFocusSearchInput] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    focusSearchInput &&
      navigateToSearchScreen(navigation, {
        fromLongPress: false,
        screen: SCREENS.SEARCH_SUGGESTIONS,
      });
  }, [focusSearchInput]);

  useEffect(() => {
    focusSearchInput &&
      navigateToSearchScreen(navigation, {
        fromLongPress: false,
        screen: SCREENS.SEARCH_INITIAL_FEED,
      });
  }, []);

  useEffect(() => {
    if (fromLongPress) {
      setTimeout(() => {
        setFocusSearchInput(true);
      }, 100);
    }
  }, [fromLongPress]);

  return (
    <ScreenWrapper>
      <SearchInput
        focusInput={focusSearchInput}
        onBlur={() => setFocusSearchInput(false)}
        onFocus={() => setFocusSearchInput(true)}
      />

      <NestedStack></NestedStack>
    </ScreenWrapper>
  );
}
