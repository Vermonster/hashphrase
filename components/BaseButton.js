import React from 'react';
import { Button, Text } from 'react-native-paper';
import PropTypes from 'prop-types';

const BaseButton = ({ onPress, buttonText }) => (
  <Button mode="contained" onPress={onPress}>
    <Text>{ buttonText }</Text>
  </Button>
);

BaseButton.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BaseButton;
