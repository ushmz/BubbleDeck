import { Box, Button, HStack, StatusBar, Text, useColorModeValue } from 'native-base';
import React, { useState } from 'react';

type TweetFieldHeaderProps = {
  disabled: boolean;
  onConfirmed: () => void;
  onCanceled: () => void;
};

export const TweetFieldHeader: React.FC<TweetFieldHeaderProps> = ({ disabled, onConfirmed, onCanceled }) => {
  const barStyle = useColorModeValue('light-content', 'dark-content');
  const bgColor = useColorModeValue('#F1F5F9', '#28282D');

  const contentColor = useColorModeValue('#28282D', '#F1F5F9');
  const contentDimmedColor = useColorModeValue('#c8c8c8', '#a2a7ae');

  const [btnColor, setBtnColor] = useState('#1DA1F2');
  const [txtColor, setTxtColor] = useState('#28282D');

  return (
    <>
      <StatusBar backgroundColor={bgColor} barStyle={barStyle} />
      <Box safeAreaTop bg={bgColor} />
      <HStack bgColor={bgColor} justifyContent="space-between" alignItems="center" w="100%">
        <Button
          ml="1"
          variant="unstyled"
          onPress={onCanceled}
          onPressIn={() => {
            setTxtColor(contentDimmedColor);
          }}
          onPressOut={() => {
            setTxtColor(contentColor);
          }}
        >
          <Text color={txtColor} fontSize="20">
            Cancel
          </Text>
        </Button>
        <Button
          h="32px"
          w="72px"
          mr="3.5"
          bg={btnColor}
          variant="unstyled"
          borderRadius="full"
          onPress={onConfirmed}
          onPressIn={() => {
            setBtnColor('#0a7abf');
          }}
          onPressOut={() => {
            setBtnColor('#1DA1F2');
          }}
          p="0"
        >
          <Text bold color="white" fontSize="14">
            Tweet
          </Text>
        </Button>
      </HStack>
    </>
  );
};
