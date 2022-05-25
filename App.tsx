import { MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { extendTheme, HStack, Icon, IconButton, NativeBaseProvider, useColorModeValue } from 'native-base';
import React from 'react';
import { Pressable } from 'react-native';

import { ToggleColorModeButton } from './src/components/ToggleColorModeButton';
import { Tweet } from './src/components/Tweet';
import { TweetFab } from './src/components/TweetFab';
import { TweetEditField } from './src/components/TweetField';
import { TweetFieldHeader } from './src/components/TweetFieldHeader';

const theme = extendTheme({});

const Stack = createStackNavigator();

const Home = ({ navigation }) => {
  return (
    <>
      <ToggleColorModeButton />
      <Pressable onPress={(e) => navigation.push('item')}>
        <Tweet />
      </Pressable>
      <Pressable onPress={(e) => navigation.push('item')}>
        <Tweet />
      </Pressable>
      <Pressable onPress={(e) => navigation.push('item')}>
        <Tweet />
      </Pressable>
      <Pressable onPress={(e) => navigation.push('item')}>
        <Tweet />
      </Pressable>
      <TweetFab
        onPressed={() => {
          navigation.push('new');
        }}
      />
    </>
  );
};

const TweetEdit = ({ navigation }) => {
  return (
    <>
      <TweetFieldHeader
        disabled
        onConfirmed={() => {
          // Push tweet to buffer
          navigation.pop();
        }}
        onCanceled={() => {
          // Show dialog to confirm cancel editting
          navigation.pop();
        }}
      />
      <TweetEditField />
    </>
  );
};

const TweetItem = () => {
  return (
    <>
      <Tweet />
    </>
  );
};

const App = () => {
  const contentColor = useColorModeValue('#28282D', '#F1F5F9');
  return (
    <NativeBaseProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerLeft: () => {
                return <IconButton icon={<Icon size="lg" as={MaterialIcons} name="menu" color={contentColor} />} />;
              },
              headerRight: () => {
                return (
                  <HStack>
                    <IconButton icon={<Icon as={MaterialIcons} name="search" size="lg" color={contentColor} />} />
                    <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="lg" color={contentColor} />} />
                  </HStack>
                );
              },
            }}
          />
          <Stack.Screen
            name="new"
            component={TweetEdit}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="item" component={TweetItem} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
