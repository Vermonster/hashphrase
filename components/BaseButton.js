import React from 'react';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';

const BaseButton = ({onPress, buttonText}) => (
  <Button full onPress={onPress}>
    <Text>{buttonText}</Text>
  </Button>
);

BaseButton.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default BaseButton;