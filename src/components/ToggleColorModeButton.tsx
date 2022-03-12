import { Button, useColorMode } from 'native-base';
import React from 'react';

export const ToggleColorModeButton = () => {
  const { toggleColorMode } = useColorMode();
  return <Button onPress={toggleColorMode}>Toggle</Button>;
};
