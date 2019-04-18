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
  state = {
    visible: false,
    focused: false,
  };

  toggleVisibility = () => {
    this.setState(prevState => ({ visible: !prevState.visible }));
  }

  toggleFocus = () => {
    this.setState(prevState => ({ focused: !prevState.focused }));
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
      placeholderText,
      prompt,
      value,
      handleChange,
      label,
      componentType,
      error,
      handleInputFocus,
      inputRef,
    } = this.props;
    const { visible, focused } = this.state;
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

    const inputMargin = componentType === 'confirmPassword' ? 0 : 30;
    const placeholderOptions = focused ? '' : placeholderText;

    return (
      <View>
        <Text style={styles.label}>{prompt}</Text>
        <View style={[styles.formInputContainer, { marginBottom: inputMargin }]}>
          <TextInput
            value={value}
            placeholder={placeholderOptions}
            secureTextEntry={visibleText}
            style={styles.textInput}
            onChange={handleChange(componentType)}
            onFocus={this.toggleFocus}
            onBlur={this.toggleFocus}
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
