import React from 'react';
import { TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';

const FormInput = ({
  name, placeholder, onChanged,
}) => (
  <TextInput
    name={name}
    placeholder={placeholder}
    onChange={onChanged}
  />
);

FormInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;
