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
    justifyContent: 'flex-end',
    backgroundColor: colors.white,
    marginTop: 10,
    width: '80%',
  },
  visibilityButton: {
    position: 'absolute',
    alignSelf: 'center',
  },
});

class FormInput extends React.Component {
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
      placeholderText,
      prompt,
      value,
      handleChange,
      label,
      componentType,
      error,
      handleInputFocus,
      inputRef,
      handlePasswordVisibility,
      visibility,
    } = this.props;
    const visibilityIcon = visibility ? 'visibility' : 'visibility-off';
    const visibleText = this.isTextHidden(componentType, visibility);
    const buttonType = (componentType === 'password')
      ? (
        <IconButton
          icon={visibilityIcon}
          onPress={handlePasswordVisibility}
          accessibilityLabel="hide or show password"
          style={styles.visibilityButton}
          color={colors.secondary}
          testID="hideShowButton"
        />
      ) : null;

    const inputMargin = componentType === 'confirmPassword' ? 0 : 30;

    return (
      <View>
        <Text style={styles.label}>{prompt}</Text>
        <View style={[styles.formInputContainer, { marginBottom: inputMargin }]}>
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
            returnKeyType="next"
            onSubmitEditing={handleInputFocus}
            ref={inputRef}
            disableFullscreenUI
          />
          { buttonType }
        </View>
      </View>
    );
  }
}

export default FormInput;
