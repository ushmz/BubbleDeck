import React from 'react';
import { Text } from 'react-native';

import { Tweet } from './Tweet';
import { TweetFieldHeader } from './TweetFieldHeader';

export const Heckle = ({ navigation }) => {
  return (
    <>
      <TweetFieldHeader
        disabled={false}
        onConfirmed={() => {
          // Push tweet to buffer
          navigation.pop();
        }}
        onCanceled={() => {
          // Show dialog to confirm cancel editting
          navigation.pop();
        }}
      />
      <Text>本当に投稿しますか?</Text>
      <Tweet />
    </>
  );
};
