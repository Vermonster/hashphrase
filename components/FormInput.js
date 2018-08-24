import React from 'react';
import { Input } from 'native-base';
import PropTypes from 'prop-types';

const FormInput = ({
  name, placeholder, secureTextEntry, onChange,
}) => (
  <Input
    name={name}
    placeholder={placeholder}
    secureTextEntry={secureTextEntry}
    autoCapitalize="none"
    onChange={e => onChange(e)}
  />
);

FormInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;
