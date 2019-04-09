import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton, Text, TextInput } from 'react-native-paper';
import { colors, fontSize } from '../styles/base';

const styles = StyleSheet.create({
  label: {
    alignSelf: 'flex-start',
    fontSize: fontSize.lg,
  },
  textInput: {
    flex: 1,
    backgroundColor: colors.white,
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
      placeholderText, prompt, value, handleChange, label, componentType, error, onBlur,
    } = this.props;
    const { visible } = this.state;
    const visibilityIcon = visible ? 'visibility' : 'visibility-off';
    const visibleText = this.isTextHidden(componentType, visible);
    const buttonType = (componentType === 'password'
      || componentType === 'confirmPassword')
      ? (
        <IconButton
          icon={visibilityIcon}
          onPress={this.toggleVisibility}
          accessibilityLabel="hide or show password"
          style={styles.visibilityButton}
          color={colors.secondary}
          testID="hideShowButton"
        />
      ) : null;

    return (
      <View>
        <Text style={styles.label}>{prompt}</Text>
        <View style={styles.formInputContainer}>
          <TextInput
            value={value}
            placeholder={placeholderText}
            secureTextEntry={visibleText}
            style={styles.textInput}
            onChange={handleChange(componentType)}
            autoCapitalize="none"
            autoComplete="off"
            autoCorrect={false}
            label={label}
            error={error}
          />
          { buttonType }
        </View>
        {onBlur && <Text>Testing</Text>}
      </View>
    );
  }
}

export default FormInput;
