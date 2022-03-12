import { Avatar, Box, Button, HStack, Stack, Text, VStack, useColorModeValue, View } from 'native-base';
import React, { useState } from 'react';
import { TweetV2 } from 'twitter-api-v2';

import { LikeIcon } from './LikeIcon';
import { ReplyIcon } from './ReplyIcon';
import { RetweetIcon } from './RetweetIcon';
import { ShareIcon } from './ShareIcon';

type Props = {
  tweets: TweetV2;
};

export const Tweet = () => {
  const bgColor = useColorModeValue('#F1F5F9', '#28282D');
  const contentColor = useColorModeValue('#28282D', '#F1F5F9');

  const [retweeted, setRetweeted] = useState<boolean>();

  const [liked, setLiked] = useState<boolean>();

  return (
    <Box bg={bgColor} py="2">
      <HStack px="2">
        <Box>
          <Avatar
            size="12"
            source={{ uri: 'https://blog.ushmz.org/_next/image?url=%2Fassets%2Fblog%2Fauthors%2Fushmz.png&w=256&q=75' }}
          />
        </Box>
        <Box px="2" mr="8">
          <HStack>
            <Text bold fontSize="sm">
              displayName
            </Text>
            <Text ml="1" fontSize="sm" opacity={50}>
              @username
            </Text>
          </HStack>

          <HStack flexWrap="wrap">
            <Text fontWeight="400" color={contentColor}>
              {/* tweet.text */}
              Bengaluru (also called Bangalore) is the center of India&lsquo;s high-tech industry. The city is also
              known for its parks and nightlife.
            </Text>
          </HStack>
        </Box>
      </HStack>

      <HStack mx="8" justifyContent="space-evenly">
        <Button variant="unstyled">
          <ReplyIcon on />
        </Button>
        <Button variant="unstyled" onPress={() => setRetweeted((prev) => !prev)}>
          <RetweetIcon on={retweeted} />
        </Button>
        <Button variant="unstyled" onPress={() => setLiked((prev) => !prev)}>
          <LikeIcon on={liked} />
        </Button>
        <Button variant="unstyled">
          <ShareIcon on />
        </Button>
      </HStack>
    </Box>
  );
};
