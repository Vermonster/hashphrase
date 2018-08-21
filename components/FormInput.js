'use strict';
import React from 'react';
import { Input } from 'native-base';
import PropTypes from 'prop-types';

const FormInput = (props) => (
    <Input 
      placeholder={props.placeholder} 
      secureTextEntry={props.secureTextEntry} 
      autoCapitalize="none" 
      onChange={(e) => props.onChange(e)}
    />
  );
  
  FormInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    secureTextEntry: PropTypes.bool,
  }
  
  export default FormInput;