import { Avatar, Box, HStack, TextArea } from 'native-base';
import React, { useState } from 'react';

export const TweetEditField = () => {
  const [draft, setDraft] = useState<string>('');
  return (
    <HStack space="1">
      <Box ml="2" my="2" width="10%">
        <Avatar
          size="10"
          source={{ uri: 'https://blog.ushmz.org/_next/image?url=%2Fassets%2Fblog%2Fauthors%2Fushmz.png&w=256&q=75' }}
        />
      </Box>
      <Box mt="3" width="80%">
        <TextArea
          value={draft}
          onChange={(e) => {
            setDraft(e.nativeEvent.text);
          }}
          autoCompleteType="off"
          placeholder="What happening?"
          w="100%"
          backgroundColor="transparent"
          borderWidth="0"
        />
      </Box>
    </HStack>
  );
};
