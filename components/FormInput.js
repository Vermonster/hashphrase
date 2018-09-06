import React from 'react';
import { Input } from 'native-base';
import PropTypes from 'prop-types';

const FormInput = ({
  name, placeholder, secureTextEntry, onChanged,
}) => (
  <Input
    name={name}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    autoCapitalize="none"
    onChange={onChanged}
  />
);

FormInput.propTypes = {
  onChanged: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;
