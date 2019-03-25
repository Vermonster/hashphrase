import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import PropTypes from 'prop-types';
import { colors, fontSize } from '../styles/base';

const styles = StyleSheet.create({
  label: {
    alignSelf: 'center',
    fontSize: fontSize.lg,
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 15,
    marginBottom: 30,
    paddingLeft: 10,
    paddingTop: 10,
    alignSelf: 'center',
  },
  formInputContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 10,
    marginBottom: 30,
  },
  visibilityButton: {
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
    } if (inputLabel === 'password' || inputLabel === 'confirmPassword') {
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
        <IconButton
          icon={visibilityIcon}
          onPress={this.toggleVisibility}
          className="submitPassword"
          style={styles.visibilityButton}
          color="#212A59"
        />
      ) : null;

    return (
      <View style={styles.formInputContainer}>
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
