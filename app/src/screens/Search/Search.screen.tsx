import { NativeStackScreenProps } from '@react-navigation/native-stack';
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

type Props = NativeStackScreenProps<RootStackParamList, 'Search'>;

function PostGrid() {
  return (
    <Stack id="post-grid" spacing={2}>
      {Array(10)
        .fill(0)
        .map((_, index) => (
          <Flex direction="row" style={{ gap: 2 }}>
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

export default function SearchScreen(props: Props) {
  const fromLongPress = props.route.params?.fromLongPress;
  const { theme, isDark } = useTheme();
  const styles = createStyles(theme, isDark);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const inputRef = useRef<TextInput>(null);

  useEffect(() => {
    if (fromLongPress) {
      setTimeout(() => {
        inputRef?.current?.focus();
      }, 100);
    }
  }, [props.route?.params, inputRef]);

  return (
    <ScreenWrapper>
      <ScrollView>
        <Stack>
          <Flex
            style={{
              paddingHorizontal: 16,
            }}
            direction="row"
            justify="center"
            items="center">
            {isInputFocused && (
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
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
                placeholder="Ask Meta AI or search"
                style={styles.input}></TextInput>
            </Flex>
          </Flex>
        </Stack>

        {isInputFocused && <SearchResults />}
        {!isInputFocused && <PostGrid />}
      </ScrollView>
    </ScreenWrapper>
  );
}
