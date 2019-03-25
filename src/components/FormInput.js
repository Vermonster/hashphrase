import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import PropTypes from 'prop-types';
import { colors, fontSize } from '../styles/base';

const styles = StyleSheet.create({
  label: {
    alignSelf: 'center',
    fontSize: fontSize.lg,
  },
  textInput: {
    width: 330,
    backgroundColor: colors.white,
    marginTop: 10,
    marginBottom: 30,
    alignSelf: 'center',
  },
});

class FormInput extends React.Component {
  state = { visible: false };

  toggleVisibility = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  isTextHidden = (inputLabel, visibleStatus) => {
    if (inputLabel === 'label') {
      return false;
    } if (inputLabel === 'password') {
      if (visibleStatus) {
        return false;
      }
    }
    return true;
  }

  render() {
    const {
      placeholder, formLabel, handleChange, className,
    } = this.props;
    const { visible } = this.state;
    const visibilityIcon = visible ? 'visibility' : 'visibility-off';
    const visibleText = this.isTextHidden(className, visible);
    const buttonType = (className === 'password'
      || className === 'confirmPassword')
      ? (
        <Button
          icon={visibilityIcon}
          onPress={this.toggleVisibility}
          className="submitPassword"
        />
      ) : null;

    return (
      <View>
        <Text style={styles.label}>{formLabel}</Text>
        <TextInput
          className={className}
          placeholder={placeholder}
          secureTextEntry={visibleText}
          style={styles.textInput}
          onChange={handleChange(className)}
        />
        { buttonType }
      </View>
    );
  }
}


FormInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default FormInput;
