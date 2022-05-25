import { MaterialIcons } from '@expo/vector-icons';
import { Box, Fab, Icon } from 'native-base';
import React from 'react';

type TweetFabProps = {
  onPressed: () => void;
};

export const TweetFab: React.FC<TweetFabProps> = ({ onPressed }) => {
  return (
    <Box h={100} w="100">
      <Fab
        size="sm"
        onPress={(e) => {
          onPressed();
        }}
        icon={<Icon as={MaterialIcons} name="add" size="lg" />}
      />
    </Box>
  );
};
