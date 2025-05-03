import { useEffect, useRef, useState } from 'react';
import { ScrollView, TextInput } from 'react-native';
import { Stack } from 'react-native-flex-layout';
import { Icon, Image, Text } from '../../components/atoms';
import Flex from '../../components/atoms/Flex/Flex.component';
import ScreenWrapper from '../../components/layouts/ScreenWrapper/ScreenWrapper.layout';
import { metaAILogo } from '../../lib/images';
import { getRandomImage, getRandomUsers } from '../../lib/seed';
import { useTheme } from '../../theme';
import createStyles from './Search.styles';

import { createNavigationContainerRef } from '@react-navigation/native';
export const searchTabRef = createNavigationContainerRef();

function PostGrid() {
  const [count, setCount] = useState(20);

  return (
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
  );
}

function SearchResults() {
  const { theme, isDark } = useTheme();

  return (
    <Stack id="search-results" p={16} spacing={16}>
      {getRandomUsers().map((user, index) => (
        <Flex key={user.id} direction="row" items="center" style={{ gap: 16 }}>
          <Image
            src={user.profilePic}
            width={50}
            rounded
            aspectRatio={1}></Image>

          <Stack spacing={2}>
            <Text weight="bold">{user.username}</Text>
            <Text color={theme.textSecondary}>{user.fullName}</Text>
          </Stack>
        </Flex>
      ))}
    </Stack>
  );
}

function SearchInput(props: {
  focusInput: boolean;
  onBlur: () => void;
  onFocus: () => void;
}) {
  const { theme, isDark } = useTheme();
  const styles = createStyles(theme, isDark);

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
        {props.focusInput && (
          <Icon
            onPress={() => inputRef?.current?.blur()}
            size={30}
            name="angle-left"></Icon>
        )}
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

export default function SearchScreen(props: any) {
  const fromLongPress = props.route.params?.fromLongPress;
  const [focusSearchInput, setFocusSearchInput] = useState(false);

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

      {!focusSearchInput && (
        <ScrollView>
          <PostGrid />
        </ScrollView>
      )}
      {focusSearchInput && (
        <ScrollView>
          <SearchResults />
        </ScrollView>
      )}
    </ScreenWrapper>
  );
}
