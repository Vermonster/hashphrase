import React from 'react';
import { Button } from 'native-base';
import BaseButtonText from './BaseButtonText';
import PropTypes from 'prop-types';

const BaseButton = (props) => (
  <Button full onPress={props.onPress}>
    <BaseButtonText label="Generate Password"/>
  </Button>
);

BaseButton.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default BaseButton;