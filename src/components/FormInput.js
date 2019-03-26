import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Text, TextInput } from 'react-native-paper';
// import PropTypes from 'prop-types';
import { colors, fontSize } from '../styles/base';

const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
    fontSize: fontSize.lg,
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.white,
    marginTop: 10,
    paddingLeft: 10,
    paddingTop: 10,
    alignSelf: 'center',
  },
  formInputContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: 10,
    marginBottom: 30,
    width: '80%',
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
      placeholderText, prompt, handleChange, className, label,
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
          color={colors.secondary}
        />
      ) : null;

    return (
      <View>
        <Text style={styles.label}>{prompt}</Text>
        <View style={styles.formInputContainer}>
          <TextInput
            className={className}
            placeholder={placeholderText}
            secureTextEntry={visibleText}
            style={styles.textInput}
            onChange={handleChange(className)}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            label={label}
            underlineColor="#fff"
          />
          { buttonType }
        </View>
      </View>
    );
  }
}

export default FormInput;
