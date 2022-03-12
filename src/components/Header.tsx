import { MaterialIcons } from '@expo/vector-icons';
import { Box, HStack, Icon, IconButton, StatusBar, Text, useColorModeValue } from 'native-base';
import React from 'react';

export const AppBar = () => {
  const barStyle = useColorModeValue('light-content', 'dark-content');
  const bgColor = useColorModeValue('#F1F5F9', '#28282D');
  const contentColor = useColorModeValue('#28282D', '#F1F5F9');

  return (
    <>
      <StatusBar backgroundColor={bgColor} barStyle={barStyle} />
      <Box safeAreaTop bg={bgColor} />
      <HStack bgColor={bgColor} px="1" py="3" justifyContent="space-between" alignItems="center" w="100%">
        <HStack alignItems="center">
          <IconButton icon={<Icon size="sm" as={MaterialIcons} name="menu" color={contentColor} />} />
          <Text color={contentColor} fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack>
          <IconButton icon={<Icon as={MaterialIcons} name="search" size="sm" color={contentColor} />} />
          <IconButton icon={<Icon as={MaterialIcons} name="more-vert" size="sm" color={contentColor} />} />
        </HStack>
      </HStack>
    </>
  );
};
