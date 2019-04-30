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
    marginBottom: 18,
    width: '80%',
  },
  visibilityButton: {
    position: 'absolute',
    alignSelf: 'center',
  },
});

const FormInput = (props) => {
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
    handleInputVisibility,
    visibility,
  } = props;
  const visibilityIcon = visibility ? 'visibility' : 'visibility-off';
  const buttonType = (componentType !== 'confirmPassword')
    ? (
      <IconButton
        icon={visibilityIcon}
        onPress={handleInputVisibility}
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
          secureTextEntry={!visibility}
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
};

export default FormInput;
