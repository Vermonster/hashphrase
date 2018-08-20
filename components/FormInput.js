'use strict';
import React from 'react';
import { Input } from 'native-base';
import PropTypes from 'prop-types';

const FormInput = (props) => (
    <Input {...props.placeholder} autoCapitalize="none" {...props.onChangeText}/>
  )
  
  FormInput.propTypes = {
    onChangeText: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
  }
  
  export default FormInput;