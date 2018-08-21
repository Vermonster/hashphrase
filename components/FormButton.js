import React from 'react';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';

const FormButton = (props) => (
  <Button full onPress={props.onPress}>
    <Text>Generate Password</Text>
  </Button>
);

FormButton.propTypes = {
  onPress: PropTypes.func.isRequired,
}

export default FormButton;